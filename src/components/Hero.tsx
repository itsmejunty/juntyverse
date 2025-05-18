
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Enhanced colorful background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-40 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      <div className="absolute top-60 left-20 w-48 h-48 bg-purple-400/15 rounded-full blur-2xl" />
      
      {/* Grid pattern overlay with gradient */}
      <div 
        className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          maskImage: "linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)"
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Enhanced avatar with animated border */}
          <div className="relative mb-8 md:mb-0 order-1 md:order-2 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/60 rounded-full blur-xl opacity-80 animate-pulse"></div>
            <div className="p-1.5 bg-gradient-to-br from-primary to-accent rounded-full">
              <Avatar className="w-52 h-52 border-4 border-white/90 shadow-2xl">
                <AvatarImage 
                  src="https://i.postimg.cc/rw0cR7KB/Whats-App-Image-2025-05-18-at-1-22-49-PM.jpg" 
                  alt="Jadidya" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-primary/30 to-accent/30 text-3xl font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* Star decorations around avatar */}
            <span className="absolute top-0 -right-2 text-accent/80">
              <Star className="h-5 w-5 fill-accent/30" />
            </span>
            <span className="absolute bottom-4 -left-4 text-primary/80">
              <Star className="h-6 w-6 fill-primary/30" />
            </span>
          </div>

          <div className="flex flex-col items-start space-y-8 max-w-3xl order-2 md:order-1">
            {/* Enhanced badge with more pronounced animation */}
            <Badge variant="outline" className="animate-fade-in py-2 px-4 gap-2 text-sm bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border-primary/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              Available for new opportunities
            </Badge>
            
            {/* Enhanced heading with more vibrant gradient */}
            <div className="space-y-4">
              <h1 className="font-bold text-5xl md:text-7xl leading-tight tracking-tight">
                Hey, I'm <span className="text-gradient-name inline-block relative">
                  Jadidya
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary/50 rounded-full"></span>
                </span>
              </h1>
              
              <h2 className="text-3xl md:text-5xl font-light text-foreground/90 tracking-tight">
                Front-end & <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Full-Stack</span> Developer
              </h2>
            </div>
            
            {/* Enhanced paragraph with more professional wording */}
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl leading-relaxed">
              A recent B.Tech graduate in Computer Science specializing in crafting
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium"> exceptional web experiences </span> 
              with React and Node.js. I build elegant, responsive solutions that combine aesthetics with performance.
            </p>
            
            {/* Enhanced buttons with more professional styling */}
            <div className="flex flex-col sm:flex-row gap-5 pt-8">
              <Link to="/projects">
                <Button size="lg" className="group relative overflow-hidden transition-all duration-300 px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/20">
                  <span className="relative z-10 flex items-center gap-2.5 text-base font-medium">
                    View my projects
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="group border-primary/40 hover:border-accent px-8 py-6 hover:shadow-lg hover:shadow-primary/20">
                  <span className="flex items-center gap-2.5 text-base font-medium">
                    Get in touch
                    <Sparkles className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
          
        {/* Enhanced scrolling indicator with animation */}
        <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce">
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">Scroll to explore</span>
          <ArrowRight className="rotate-90 w-4 h-4 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
