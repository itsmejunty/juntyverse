
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start space-y-8 max-w-3xl">
          <Badge variant="outline" className="animate-fade-in py-2 px-4 gap-2 text-sm bg-primary/20 border-primary/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </Badge>
          
          <div className="space-y-3">
            <h1 className="font-bold text-5xl md:text-7xl leading-tight tracking-tight">
              Hey, I'm <span className="text-gradient-name inline-block relative">
                Jadidya
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-accent/60 to-primary/40 rounded-full"></span>
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-light text-foreground/90">
              Front-end & <span className="text-accent">Full-Stack</span> Developer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A recent B.Tech graduate in Computer Science specializing in building 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium"> modern web applications </span> 
            using React and Node.js. I create elegant solutions that prioritize user experience and clean code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link to="/projects">
              <Button size="lg" className="group relative overflow-hidden transition-all duration-300 px-8 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/20">
                <span className="relative z-10 flex items-center gap-2">
                  View my projects
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="group border-primary/30 hover:border-accent px-8 hover:shadow-lg hover:shadow-primary/20">
                <span className="flex items-center gap-2">
                  Get in touch
                  <Sparkles className="h-4 w-4" />
                </span>
              </Button>
            </Link>
          </div>
          
          {/* Scrolling indicator */}
          <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce">
            <span className="text-sm text-accent mb-2">Scroll to explore</span>
            <ArrowRight className="rotate-90 w-4 h-4 text-accent" />
          </div>
        </div>
      </div>
      
      {/* Modern blob background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-40 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      <div className="absolute top-60 left-20 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl" />
      
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
