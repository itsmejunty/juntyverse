
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Hello! I'm Jadidya, a recent B.Tech graduate in Computer Science from Mallareddy College of Engineering. 
                I'm passionate about building intuitive, efficient web applications that solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed mb-4">
                My focus is on front-end and full-stack development, particularly using React and Node.js. 
                I enjoy the challenge of turning complex problems into simple, beautiful solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                In the short term, my goal is to join a collaborative development team where I can build meaningful applications while refining my skills. 
                Looking ahead, I aspire to grow into a senior developer or technical lead role with expertise in system design and DevOps practices.
              </p>
            </div>
            
            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="border border-border/40 rounded-lg p-6">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">B.Tech in Computer Science</h3>
                    <p className="text-muted-foreground">Mallareddy College of Engineering</p>
                  </div>
                  <Badge variant="outline">2024</Badge>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border/40 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Python Complete Course For Python Beginners</h3>
                      <p className="text-muted-foreground">Udemy</p>
                    </div>
                    <Badge variant="outline">2024</Badge>
                  </div>
                </div>
                
                <div className="border border-border/40 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Python Full Stack Development</h3>
                      <p className="text-muted-foreground">Offline Course</p>
                    </div>
                    <Badge variant="outline">2024</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interests */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Interests & Hobbies</h2>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-accent/10 rounded-md text-accent-foreground">
                  Gaming
                </div>
                <div className="px-4 py-2 bg-accent/10 rounded-md text-accent-foreground">
                  Fitness
                </div>
                <div className="px-4 py-2 bg-accent/10 rounded-md text-accent-foreground">
                  Technology
                </div>
                <div className="px-4 py-2 bg-accent/10 rounded-md text-accent-foreground">
                  Continuous Learning
                </div>
              </div>
            </div>
            
            {/* Resume */}
            <div className="pt-6">
              <a href="/Jadidya_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="group">
                  Download Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
