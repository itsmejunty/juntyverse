
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Enhanced floating elements with purple theme */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-40 w-64 h-64 bg-fuchsia-400/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-60 left-20 w-48 h-48 bg-purple-600/12 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }} />
      
      {/* Floating icons with purple theme */}
      <div className="absolute top-32 left-16 animate-float opacity-40">
        <Code className="w-8 h-8 text-purple-600" />
      </div>
      <div className="absolute top-48 right-32 animate-float opacity-40" style={{ animationDelay: '1.5s' }}>
        <Palette className="w-6 h-6 text-violet-600" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float opacity-40" style={{ animationDelay: '3s' }}>
        <Zap className="w-7 h-7 text-purple-700" />
      </div>
      
      {/* Enhanced grid pattern with purple tint */}
      <div 
        className="absolute inset-0 bg-grid-small-purple/[0.2] -z-10 animate-fade-in" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(147 51 234 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          maskImage: "linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)"
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Enhanced avatar with purple gradient layers */}
          <div className="relative mb-8 md:mb-0 order-1 md:order-2 animate-fade-in group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/60 to-violet-600/60 rounded-full blur-xl opacity-80 animate-pulse group-hover:blur-2xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/40 to-purple-500/40 rounded-full blur-2xl opacity-60 animate-ping animation-duration-3000"></div>
            <div className="p-2 bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 rounded-full transform group-hover:scale-105 transition-transform duration-300 purple-glow">
              <Avatar className="w-52 h-52 border-4 border-white shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                <AvatarImage 
                  src="https://i.postimg.cc/rw0cR7KB/Whats-App-Image-2025-05-18-at-1-22-49-PM.jpg" 
                  alt="Jadidya" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-purple-100 to-violet-100 text-3xl font-bold text-purple-700">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* Enhanced star decorations with purple theme */}
            <span className="absolute top-0 -right-2 text-purple-600 animate-bounce">
              <Star className="h-5 w-5 fill-purple-200" />
            </span>
            <span className="absolute bottom-4 -left-4 text-violet-600 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Star className="h-6 w-6 fill-violet-200" />
            </span>
            <span className="absolute top-16 -left-6 text-fuchsia-500 animate-pulse">
              <Star className="h-4 w-4 fill-fuchsia-100" />
            </span>
          </div>

          <div className="flex flex-col items-start space-y-8 max-w-3xl order-2 md:order-1">
            {/* Enhanced badge with purple theme */}
            <Badge variant="outline" className="animate-slide-up py-3 px-6 gap-3 text-sm glass-effect border-purple-200 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
              </span>
              Available for new opportunities
            </Badge>
            
            {/* Text with enhanced purple styling */}
            <div className="space-y-6">
              <h1 className="font-bold text-5xl md:text-7xl leading-tight tracking-tight animate-fade-in">
                Hey, I'm <span className="text-gradient-purple inline-block relative hover:scale-105 transition-transform duration-300">
                  Jadidya
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-full animate-pulse opacity-70"></span>
                </span>
              </h1>
              
              <h2 className="text-3xl md:text-5xl font-light text-foreground/90 tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Front-end & <span className="text-gradient-purple hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500">Full-Stack</span> Developer
              </h2>
            </div>
            
            {/* Enhanced paragraph */}
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              A recent B.Tech graduate in Computer Science specializing in crafting
              <span className="text-gradient-purple font-medium"> exceptional web experiences </span> 
              with React and Node.js. I build elegant, responsive solutions that combine aesthetics with performance.
            </p>
            
            {/* Enhanced buttons with purple theme */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link to="/projects">
                <Button size="lg" className="group relative overflow-hidden transition-all duration-500 px-8 py-6 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-1 purple-glow">
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 flex items-center gap-3 text-base font-medium">
                    View my projects
                    <ArrowRight className="transition-transform group-hover:translate-x-2 group-hover:scale-110" />
                  </span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="group border-purple-300 hover:border-violet-400 px-8 py-6 hover:shadow-xl hover:shadow-purple-200/30 hover:scale-105 hover:-translate-y-1 transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 glass-effect">
                  <span className="flex items-center gap-3 text-base font-medium text-purple-700 group-hover:text-purple-800">
                    Get in touch
                    <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
          
        {/* Enhanced scrolling indicator with purple theme */}
        <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce cursor-pointer group hover:scale-110 transition-transform duration-300">
          <span className="text-sm font-medium text-gradient-purple mb-2 group-hover:from-fuchsia-500 group-hover:to-purple-700 transition-all duration-300">Scroll to explore</span>
          <ArrowRight className="rotate-90 w-4 h-4 text-purple-600 group-hover:text-violet-700 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
