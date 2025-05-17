
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start space-y-8 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="font-bold text-5xl md:text-7xl leading-tight">
            Hey, I'm <span className="text-primary">Jadidya</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-light text-foreground/90">
            Front-end & Full-Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A recent B.Tech graduate in Computer Science specializing in building modern web applications using React and Node.js. 
            I create elegant solutions that prioritize user experience and clean code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/projects">
              <Button size="lg" className="group">
                View my projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">Get in touch</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Abstract background element */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
