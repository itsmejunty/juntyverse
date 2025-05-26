
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
    liveUrl: "/demo/weather"
  },
  {
    title: "Personal Portfolio Website",
    description: "A showcase of my skills, projects, and achievements, featuring a contact form and social media integration.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=2036",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/",
    liveUrl: "/"
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-violet-50/50">
      <Hero />
      
      {/* Enhanced Featured Projects with purple theme */}
      <section className="py-20 section-gradient relative overflow-hidden">
        {/* Enhanced floating decoration elements */}
        <div className="absolute top-10 right-10 animate-float opacity-30">
          <Code className="w-12 h-12 text-purple-600" />
        </div>
        <div className="absolute bottom-10 left-10 animate-float opacity-30" style={{ animationDelay: '1s' }}>
          <Globe className="w-10 h-10 text-violet-600" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold group">
              <span className="text-gradient-purple group-hover:from-fuchsia-500 group-hover:to-purple-700 transition-all duration-500">Featured</span> Projects
            </h2>
            <Link to="/projects" className="group flex items-center text-purple-600 hover:text-violet-700 mt-4 md:mt-0 hover:scale-105 transition-all duration-300">
              View all projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={project.title} className="animate-fade-in hover-lift transition-all duration-500 group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="glass-effect rounded-2xl p-1 group-hover:purple-glow transition-all duration-300">
                  <ProjectCard {...project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SkillsSection />
      
      {/* Enhanced CTA Section with purple theme */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-white to-violet-50/30 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/15 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-violet-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto glass-effect p-12 rounded-3xl shadow-2xl border border-purple-200/50 hover:shadow-3xl hover:shadow-purple-200/30 transition-all duration-500 hover:scale-105 group purple-glow">
            {/* Enhanced floating icons */}
            <div className="absolute -top-6 -left-6 animate-bounce">
              <Database className="w-8 h-8 text-purple-500" />
            </div>
            <div className="absolute -top-6 -right-6 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Code className="w-8 h-8 text-violet-600" />
            </div>
            
            <h2 className="text-4xl font-bold mb-8 text-gradient-purple group-hover:from-fuchsia-500 group-hover:to-purple-700 transition-all duration-500">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              I'm currently available for freelance work and full-time positions. 
              If you're looking for a developer who is passionate about creating elegant solutions, let's talk!
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-110 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden px-10 py-7">
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 flex items-center gap-3 text-lg font-medium">
                    Get in Touch
                    <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
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
