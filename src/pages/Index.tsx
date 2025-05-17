
import React from 'react';
import Hero from '@/components/Hero';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      
      {/* Featured Projects */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured</span> Projects
            </h2>
            <Link to="/projects" className="group flex items-center text-accent mt-4 md:mt-0">
              View all projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      <SkillsSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm currently available for freelance work and full-time positions. 
              If you're looking for a developer who is passionate about creating elegant solutions, let's talk!
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/20">
                <span className="flex items-center gap-2">
                  Get in Touch
                  <Sparkles className="h-4 w-4" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
