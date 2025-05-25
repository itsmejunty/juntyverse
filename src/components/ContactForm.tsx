
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import { Send, MessageCircle, User, Mail, FileText, Sparkles } from 'lucide-react';
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
          title: "Message sent! ✨",
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
    
    // Add user message with animation
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
            content: "Thanks for your message! I'll get back to you as soon as possible. 🚀" 
          }]);
        }, 1000);
      })
      .catch((error) => {
        console.error('Chat message email failed:', error);
        // Still show the message in UI even if email fails
        setChatMessages(prev => [...prev, { 
          sender: 'admin', 
          content: "Thanks for your message! I'll get back to you as soon as possible. 🚀" 
        }]);
      });
  };

  if (isChatMode) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h3 className="font-medium flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary animate-pulse" />
            Chat Mode
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Contact Form</span>
            <Switch 
              checked={isChatMode} 
              onCheckedChange={setIsChatMode}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-accent"
            />
            <span className="text-sm font-medium text-primary">Chat</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-background to-secondary/30 border rounded-2xl h-80 overflow-y-auto p-4 flex flex-col space-y-3 shadow-inner backdrop-blur-sm">
          {chatMessages.map((message, index) => (
            <div 
              key={index}
              className={`max-w-[80%] animate-slide-in-right ${message.sender === 'user' 
                ? 'self-end bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl' 
                : 'self-start bg-gradient-to-r from-muted to-muted/80 shadow-md hover:shadow-lg'} rounded-2xl px-4 py-3 transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-1">
                {message.sender === 'admin' && <Sparkles className="w-3 h-3 text-accent animate-pulse" />}
                <span className="text-xs opacity-70">
                  {message.sender === 'user' ? 'You' : 'Jadidya'}
                </span>
              </div>
              {message.content}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSendChatMessage} className="flex space-x-2 animate-fade-in">
          <div className="relative flex-1">
            <Input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 pr-10 border-primary/20 focus:border-primary/40 transition-colors duration-300"
            />
            <MessageCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
          <Button type="submit" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all duration-300">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="font-medium flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Contact Form
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Contact Form</span>
          <Switch 
            checked={isChatMode} 
            onCheckedChange={setIsChatMode}
            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-accent"
          />
          <span className="text-sm text-muted-foreground">Chat</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <label htmlFor="from_name" className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Your Name
          </label>
          <Input
            id="from_name"
            name="from_name"
            placeholder="John Doe"
            required
            className="transition-all duration-300 focus:scale-105 border-primary/20 focus:border-primary/40"
          />
        </div>
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="reply_to" className="text-sm font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address
          </label>
          <Input
            id="reply_to"
            name="reply_to"
            type="email"
            placeholder="john@example.com"
            required
            className="transition-all duration-300 focus:scale-105 border-primary/20 focus:border-primary/40"
          />
        </div>
      </div>
      
      <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" />
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Project Inquiry"
          required
          className="transition-all duration-300 focus:scale-105 border-primary/20 focus:border-primary/40"
        />
      </div>
      
      <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-primary" />
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, timeline, and budget..."
          rows={6}
          required
          className="transition-all duration-300 focus:scale-105 border-primary/20 focus:border-primary/40 resize-none"
        />
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="flex items-center gap-2">
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
