import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Star, Code, Palette, Zap, Rocket, Globe, Database, Cpu, Smartphone, Monitor, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import EnhancedButton from './EnhancedButton';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Next.js', 'Express.js', 'PostgreSQL'];

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Skill rotation animation
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(skillInterval);
    };
  }, []);

  const floatingIcons = [
    { Icon: Code, position: { top: '15%', left: '10%' }, delay: '0s', color: 'text-purple-600', size: 'w-6 h-6 md:w-8 md:h-8' },
    { Icon: Palette, position: { top: '25%', right: '15%' }, delay: '1s', color: 'text-violet-600', size: 'w-5 h-5 md:w-7 md:h-7' },
    { Icon: Zap, position: { bottom: '30%', left: '8%' }, delay: '2s', color: 'text-purple-700', size: 'w-7 h-7 md:w-9 md:h-9' },
    { Icon: Rocket, position: { top: '40%', right: '8%' }, delay: '0.5s', color: 'text-fuchsia-600', size: 'w-6 h-6 md:w-8 md:h-8' },
    { Icon: Globe, position: { bottom: '20%', right: '20%' }, delay: '1.5s', color: 'text-violet-700', size: 'w-5 h-5 md:w-7 md:h-7' },
    { Icon: Database, position: { top: '60%', left: '15%' }, delay: '2.5s', color: 'text-purple-800', size: 'w-6 h-6 md:w-8 md:h-8' },
    { Icon: Cpu, position: { bottom: '15%', left: '25%' }, delay: '3s', color: 'text-indigo-600', size: 'w-5 h-5 md:w-7 md:h-7' },
    { Icon: Smartphone, position: { top: '35%', left: '25%' }, delay: '1.2s', color: 'text-purple-500', size: 'w-4 h-4 md:w-6 md:h-6' },
    { Icon: Monitor, position: { bottom: '40%', right: '30%' }, delay: '2.8s', color: 'text-violet-500', size: 'w-6 h-6 md:w-8 md:h-8' },
    { Icon: Wifi, position: { top: '50%', right: '25%' }, delay: '0.8s', color: 'text-fuchsia-500', size: 'w-5 h-5 md:w-7 md:h-7' }
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Enhanced Dynamic Background with more layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multiple animated gradient blobs with different animations */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-fuchsia-400/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-60 left-20 w-48 h-48 bg-purple-600/12 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-violet-300/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-purple-300/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }} />
        
        {/* Enhanced mouse-following gradient with parallax effect */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-fuchsia-400/15 to-purple-400/15 rounded-full blur-2xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 64 + Math.sin(Date.now() * 0.001) * 20,
            top: mousePosition.y - 64 + Math.cos(Date.now() * 0.001) * 20,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      {/* Enhanced Floating Tech Icons with more variety */}
      {floatingIcons.map(({ Icon, position, delay, color, size }, index) => (
        <div
          key={index}
          className={`absolute animate-float opacity-40 hover:opacity-70 transition-all duration-300 ${color} cursor-pointer hover:scale-125`}
          style={{ 
            ...position, 
            animationDelay: delay,
            animationDuration: `${4 + index * 0.5}s`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running';
          }}
        >
          <Icon className={size} />
        </div>
      ))}
      
      {/* Enhanced Interactive Grid Pattern with animation */}
      <div 
        className="absolute inset-0 bg-grid-small-purple/[0.2] -z-10 animate-fade-in" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(147 51 234 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          maskImage: "linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)"
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Enhanced Interactive Avatar with more effects */}
          <ScrollAnimation animation="scale-up" delay={200} className="mb-8 md:mb-0 order-1 md:order-2 group">
            {/* Multiple animated rings with different effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/60 to-violet-600/60 rounded-full blur-xl opacity-80 animate-pulse group-hover:blur-2xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/40 to-purple-500/40 rounded-full blur-2xl opacity-60 animate-ping animation-duration-3000"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400/30 to-violet-400/30 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-fuchsia-300/20 rounded-full blur-xl opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
            
            {/* Enhanced interactive glow effect */}
            <div className="p-2 bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 rounded-full transform group-hover:scale-105 transition-all duration-300 purple-glow hover:shadow-3xl group-hover:rotate-3">
              <Avatar className="w-52 h-52 border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-300 hover:rotate-3 hover:scale-105">
                <AvatarImage 
                  src="https://i.postimg.cc/rw0cR7KB/Whats-App-Image-2025-05-18-at-1-22-49-PM.jpg" 
                  alt="Jadidya" 
                  className="object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                />
                <AvatarFallback className="bg-gradient-to-br from-purple-100 to-violet-100 text-3xl font-bold text-purple-700">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* Enhanced Dynamic Star Decorations with animations */}
            <span className="absolute top-0 -right-2 text-purple-600 animate-bounce hover:scale-125 transition-all duration-300 cursor-pointer hover:text-purple-800">
              <Star className="h-5 w-5 fill-purple-200 hover:fill-purple-400" />
            </span>
            <span className="absolute bottom-4 -left-4 text-violet-600 animate-bounce hover:scale-125 transition-all duration-300 cursor-pointer hover:text-violet-800" style={{ animationDelay: '0.5s' }}>
              <Star className="h-6 w-6 fill-violet-200 hover:fill-violet-400" />
            </span>
            <span className="absolute top-16 -left-6 text-fuchsia-500 animate-pulse hover:scale-125 transition-all duration-300 cursor-pointer hover:text-fuchsia-700">
              <Star className="h-4 w-4 fill-fuchsia-100 hover:fill-fuchsia-300" />
            </span>
            <span className="absolute -top-2 left-12 text-purple-500 animate-bounce hover:scale-125 transition-all duration-300 cursor-pointer hover:text-purple-700" style={{ animationDelay: '1s' }}>
              <Star className="h-3 w-3 fill-purple-300 hover:fill-purple-500" />
            </span>
            <span className="absolute top-24 right-8 text-violet-400 animate-pulse hover:scale-125 transition-all duration-300 cursor-pointer hover:text-violet-600" style={{ animationDelay: '1.5s' }}>
              <Star className="h-4 w-4 fill-violet-200 hover:fill-violet-400" />
            </span>
          </ScrollAnimation>

          <div className="flex flex-col items-start space-y-8 max-w-3xl order-2 md:order-1">
            {/* Enhanced Status Badge with more animations */}
            <ScrollAnimation animation="slide-right" delay={100}>
              <Badge 
                variant="outline" 
                className={`py-3 px-6 gap-3 text-sm glass-effect border-purple-200 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300 hover:scale-105 cursor-pointer hover:border-purple-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
                </span>
                Available for new opportunities
              </Badge>
            </ScrollAnimation>
            
            {/* Enhanced Typography with more effects */}
            <div className="space-y-6">
              <ScrollAnimation animation="fade-up" delay={200}>
                <h1 className={`font-bold text-5xl md:text-7xl leading-tight tracking-tight ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}>
                  Hey, I'm <span className="text-gradient-purple inline-block relative hover:scale-105 transition-transform duration-300 cursor-pointer group">
                    Jadidya
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-full animate-pulse opacity-70 group-hover:opacity-100 group-hover:h-3 transition-all duration-300"></span>
                    <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 rounded-full animate-pulse opacity-40 group-hover:opacity-70 transition-all duration-300" style={{ animationDelay: '0.5s' }}></span>
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={400}>
                <h2 className={`text-3xl md:text-5xl font-light text-foreground/90 tracking-tight ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`} style={{ animationDelay: '0.2s' }}>
                  Front-end & <span className="text-gradient-purple hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 cursor-pointer hover:scale-105 inline-block">Full-Stack</span> Developer
                </h2>
              </ScrollAnimation>
            </div>
            
            {/* Enhanced Description with more interactive elements */}
            <ScrollAnimation animation="fade-up" delay={600}>
              <p className={`text-lg md:text-xl text-muted-foreground/90 max-w-2xl leading-relaxed ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`} style={{ animationDelay: '0.4s' }}>
                A recent B.Tech graduate in Computer Science specializing in crafting
                <span className="text-gradient-purple font-medium hover:font-semibold transition-all duration-300 cursor-pointer hover:scale-105 inline-block"> exceptional web experiences </span> 
                with React and Node.js. I build elegant, responsive solutions that combine 
                <span className="text-gradient-purple font-medium hover:font-semibold transition-all duration-300 cursor-pointer hover:scale-105 inline-block"> aesthetics with performance</span>.
              </p>
            </ScrollAnimation>
            
            {/* Enhanced Interactive Buttons with more effects */}
            <ScrollAnimation animation="fade-up" delay={800}>
              <div className={`flex flex-col sm:flex-row gap-6 pt-8 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`} style={{ animationDelay: '0.6s' }}>
                <Link to="/projects">
                  <EnhancedButton
                    size="lg"
                    className="group relative overflow-hidden transition-all duration-500 px-8 py-6 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 hover:-translate-y-1 purple-glow"
                    loadingDuration={800}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative z-10 flex items-center gap-3 text-base font-medium">
                      View my projects
                      <ArrowRight className="transition-transform group-hover:translate-x-2 group-hover:scale-110" />
                    </span>
                  </EnhancedButton>
                </Link>
                <Link to="/contact">
                  <EnhancedButton
                    size="lg"
                    variant="outline"
                    className="group border-purple-300 hover:border-violet-400 px-8 py-6 hover:shadow-xl hover:shadow-purple-200/30 hover:scale-105 hover:-translate-y-1 transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 glass-effect relative overflow-hidden"
                    loadingDuration={800}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-violet-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 flex items-center gap-3 text-base font-medium text-purple-700 group-hover:text-purple-800">
                      Get in touch
                      <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </EnhancedButton>
                </Link>
              </div>
            </ScrollAnimation>

            {/* Enhanced Skills Preview with rotation animation */}
            <ScrollAnimation animation="fade-up" delay={1000}>
              <div className={`flex flex-wrap gap-3 pt-4 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`} style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Currently working with:</span>
                  <Badge 
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 hover:from-purple-200 hover:to-violet-200 hover:scale-110 transition-all duration-300 cursor-pointer glass-effect animate-pulse"
                  >
                    {skills[currentSkill]}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'].map((skill, index) => (
                    <Badge 
                      key={skill} 
                      className="px-3 py-1 bg-white/80 text-purple-700 hover:bg-purple-100 hover:scale-110 transition-all duration-300 cursor-pointer glass-effect text-xs"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
          
        {/* Enhanced Interactive Scroll Indicator with more animations */}
        <ScrollAnimation animation="fade-up" delay={1200}>
          <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce cursor-pointer group hover:scale-110 transition-all duration-300">
            <span className="text-sm font-medium text-gradient-purple mb-2 group-hover:from-fuchsia-500 group-hover:to-purple-700 transition-all duration-300">
              Scroll to explore
            </span>
            <div className="relative">
              <ArrowRight className="rotate-90 w-4 h-4 text-purple-600 group-hover:text-violet-700 transition-colors duration-300" />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-sm group-hover:bg-purple-400/40 transition-all duration-300 animate-ping"></div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;
