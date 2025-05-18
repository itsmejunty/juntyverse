
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import emailjs from '@emailjs/browser';

// EmailJS configuration constants
const EMAILJS_SERVICE_ID = 'service_vavsskp';
const EMAILJS_TEMPLATE_ID = 'template_2kd2n3r';
const EMAILJS_PUBLIC_KEY = 'gIFZN3uJWbJjIIXwC';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'admin', content: string }[]>([
    { sender: 'admin', content: "Hi there! 👋 I'm available to chat. Feel free to send me a message and I'll get back to you soon!" }
  ]);
  const [messageInput, setMessageInput] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // Get form data
    const form = e.target as HTMLFormElement;
    
    // Send email using EmailJS
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        form.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast({
          title: "Message failed to send",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  const handleSendChatMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!messageInput.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { sender: 'user', content: messageInput }]);
    
    // Prepare email data for chat message
    const emailData = {
      from_name: 'Chat User',
      message: messageInput,
      reply_to: 'chat@user.com',
    };
    
    // Clear input
    setMessageInput('');
    
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData)
      .then(() => {
        // Email sent successfully, add simulated response
        setTimeout(() => {
          setChatMessages(prev => [...prev, { 
            sender: 'admin', 
            content: "Thanks for your message! I'll get back to you as soon as possible." 
          }]);
        }, 1000);
      })
      .catch((error) => {
        console.error('Chat message email failed:', error);
        // Still show the message in UI even if email fails
        setChatMessages(prev => [...prev, { 
          sender: 'admin', 
          content: "Thanks for your message! I'll get back to you as soon as possible." 
        }]);
      });
  };

  if (isChatMode) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Chat Mode</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Contact Form</span>
            <Switch 
              checked={isChatMode} 
              onCheckedChange={setIsChatMode}
            />
            <span className="text-sm font-medium">Chat</span>
          </div>
        </div>
        
        <div className="bg-background border rounded-lg h-80 overflow-y-auto p-4 flex flex-col space-y-3">
          {chatMessages.map((message, index) => (
            <div 
              key={index}
              className={`max-w-[80%] ${message.sender === 'user' 
                ? 'self-end bg-primary text-primary-foreground' 
                : 'self-start bg-muted'} rounded-lg px-4 py-2`}
            >
              {message.content}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSendChatMessage} className="flex space-x-2">
          <Input
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Contact Form</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Contact Form</span>
          <Switch 
            checked={isChatMode} 
            onCheckedChange={setIsChatMode}
          />
          <span className="text-sm text-muted-foreground">Chat</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="from_name" className="text-sm font-medium">
            Your Name
          </label>
          <Input
            id="from_name"
            name="from_name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="reply_to" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="reply_to"
            name="reply_to"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Project Inquiry"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, timeline, and budget..."
          rows={6}
          required
        />
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
