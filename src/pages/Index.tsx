
import React from 'react';
import Hero from '@/components/Hero';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects: ProjectCardProps[] = [
  {
    title: "Weather Dashboard",
    description: "A React-based web app fetching weather data via OpenWeatherMap API to display current conditions and forecasts.",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80&w=1974",
    technologies: ["React", "JavaScript", "CSS", "APIs"],
    githubUrl: "https://github.com/",
    liveUrl: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "A showcase of my skills, projects, and achievements, featuring a contact form and social media integration.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=2036",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/",
    liveUrl: "#"
  }
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Featured Projects with enhanced animations */}
      <section className="py-16 section-gradient relative overflow-hidden">
        {/* Floating decoration elements */}
        <div className="absolute top-10 right-10 animate-float opacity-20">
          <Code className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute bottom-10 left-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Globe className="w-10 h-10 text-accent" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold group">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">Featured</span> Projects
            </h2>
            <Link to="/projects" className="group flex items-center text-accent mt-4 md:mt-0 hover:scale-105 transition-all duration-300">
              View all projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SkillsSection />
      
      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl hover:bg-white/80 transition-all duration-500 hover:scale-105 group">
            {/* Floating icons around the CTA */}
            <div className="absolute -top-4 -left-4 animate-bounce">
              <Database className="w-6 h-6 text-primary/60" />
            </div>
            <div className="absolute -top-4 -right-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Code className="w-6 h-6 text-accent/60" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              I'm currently available for freelance work and full-time positions. 
              If you're looking for a developer who is passionate about creating elegant solutions, let's talk!
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-accent/30 hover:scale-110 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
