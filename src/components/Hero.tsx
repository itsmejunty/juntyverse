
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Star, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import EnhancedButton from './EnhancedButton';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Next.js'];

  useEffect(() => {
    setIsVisible(true);
    
    // Skill rotation animation
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => {
      clearInterval(skillInterval);
    };
  }, []);

  // Reduced floating icons for better performance
  const floatingIcons = [
    { Icon: Code, position: { top: '20%', left: '10%' }, delay: '0s', color: 'text-purple-600' },
    { Icon: Palette, position: { top: '30%', right: '15%' }, delay: '1s', color: 'text-violet-600' },
    { Icon: Zap, position: { bottom: '30%', left: '15%' }, delay: '2s', color: 'text-purple-700' }
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>
      
      {/* Simplified Floating Tech Icons */}
      {floatingIcons.map(({ Icon, position, delay, color }, index) => (
        <div
          key={index}
          className={`absolute animate-float opacity-30 ${color}`}
          style={{ 
            ...position, 
            animationDelay: delay,
            animationDuration: '6s'
          }}
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Simplified Avatar */}
          <ScrollAnimation animation="scale-up" delay={200} className="mb-8 md:mb-0 order-1 md:order-2">
            <div className="p-2 bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 rounded-full">
              <Avatar className="w-52 h-52 border-4 border-white shadow-xl">
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
          </ScrollAnimation>

          <div className="flex flex-col items-start space-y-8 max-w-3xl order-2 md:order-1">
            {/* Status Badge */}
            <ScrollAnimation animation="slide-right" delay={100}>
              <Badge 
                variant="outline" 
                className="py-3 px-6 gap-3 text-sm border-purple-200"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
                </span>
                Available for new opportunities
              </Badge>
            </ScrollAnimation>
            
            {/* Typography */}
            <div className="space-y-6">
              <ScrollAnimation animation="fade-up" delay={200}>
                <h1 className="font-bold text-5xl md:text-7xl leading-tight tracking-tight">
                  Hey, I'm <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    Jadidya
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={400}>
                <h2 className="text-3xl md:text-5xl font-light text-foreground/90 tracking-tight">
                  Front-end & <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Full-Stack</span> Developer
                </h2>
              </ScrollAnimation>
            </div>
            
            {/* Description */}
            <ScrollAnimation animation="fade-up" delay={600}>
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl leading-relaxed">
                A recent B.Tech graduate in Computer Science specializing in crafting
                <span className="text-purple-600 font-medium"> exceptional web experiences </span> 
                with React and Node.js. I build elegant, responsive solutions that combine 
                <span className="text-purple-600 font-medium"> aesthetics with performance</span>.
              </p>
            </ScrollAnimation>
            
            {/* Buttons */}
            <ScrollAnimation animation="fade-up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Link to="/projects">
                  <EnhancedButton
                    size="lg"
                    className="px-8 py-6 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                    loadingDuration={300}
                  >
                    <span className="flex items-center gap-3 text-base font-medium">
                      View my projects
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </EnhancedButton>
                </Link>
                <Link to="/contact">
                  <EnhancedButton
                    size="lg"
                    variant="outline"
                    className="border-purple-300 hover:border-violet-400 px-8 py-6"
                    loadingDuration={300}
                  >
                    <span className="flex items-center gap-3 text-base font-medium text-purple-700">
                      Get in touch
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </EnhancedButton>
                </Link>
              </div>
            </ScrollAnimation>

            {/* Skills Preview */}
            <ScrollAnimation animation="fade-up" delay={1000}>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Currently working with:</span>
                  <Badge className="px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700">
                    {skills[currentSkill]}
                  </Badge>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
