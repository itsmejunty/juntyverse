
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Linkedin, Github, User } from 'lucide-react';

const ContactInfo = ({ icon, title, content, href }: { icon: React.ReactNode, title: string, content: string, href?: string }) => {
  return (
    <div className="flex items-start">
      <div className="mt-1 mr-4 p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {href ? (
          <a 
            href={href} 
            className="text-muted-foreground hover:text-primary transition-colors"
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <ContactInfo 
                  icon={<Mail size={20} />} 
                  title="Email" 
                  content="juntyhoney2015@gmail.com" 
                  href="mailto:juntyhoney2015@gmail.com"
                />
                
                <ContactInfo 
                  icon={<Linkedin size={20} />} 
                  title="LinkedIn" 
                  content="linkedin.com/in/jadidya" 
                  href="https://linkedin.com/in/"
                />
                
                <ContactInfo 
                  icon={<Github size={20} />} 
                  title="GitHub" 
                  content="github.com/jadidya" 
                  href="https://github.com/"
                />
                
                <ContactInfo 
                  icon={<User size={20} />} 
                  title="Location" 
                  content="India" 
                />
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Response Time</h2>
                <p className="text-muted-foreground">
                  I typically respond to all messages within 24-48 hours. For urgent inquiries, please mention that in the subject line or use the chat mode for quicker responses.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
