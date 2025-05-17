
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start space-y-8 max-w-3xl">
          <Badge variant="outline" className="animate-fade-in py-2 px-4 gap-2 text-sm bg-primary/10 border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </Badge>
          
          <div className="space-y-3">
            <h1 className="font-bold text-5xl md:text-7xl leading-tight tracking-tight">
              Hey, I'm <span className="text-primary inline-block relative">
                Jadidya
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-light text-foreground/90">
              Front-end & Full-Stack Developer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A recent B.Tech graduate in Computer Science specializing in building 
            <span className="text-primary font-medium"> modern web applications </span> 
            using React and Node.js. I create elegant solutions that prioritize user experience and clean code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link to="/projects">
              <Button size="lg" className="group relative overflow-hidden transition-all duration-300 px-8">
                <span className="relative z-10 flex items-center gap-2">
                  View my projects
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="group border-primary/30 hover:border-primary px-8">
                Get in touch
              </Button>
            </Link>
          </div>
          
          {/* Scrolling indicator */}
          <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <ArrowRight className="rotate-90 w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      {/* Modern blob background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" 
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
             maskImage: "linear-gradient(to bottom, transparent, 15%, white, 85%, transparent)"
           }} 
      />
    </section>
  );
};

export default Hero;
