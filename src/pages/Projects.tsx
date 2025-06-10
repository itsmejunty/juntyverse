
import React from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Star, TrendingUp, Award, Users } from 'lucide-react';

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Weather Dashboard",
      description: "A React-based web app fetching weather data via OpenWeatherMap API to display current conditions and forecasts. Features include location search, 5-day forecast, and responsive design for all device sizes.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1974",
      technologies: ["React", "JavaScript", "CSS", "OpenWeatherMap API"],
      githubUrl: "https://github.com/",
      liveUrl: "/demo/weather"
    },
    {
      title: "Portfolio Builder",
      description: "An interactive portfolio website builder that helps users create professional portfolio websites. Features real-time preview, theme selection, content management, and code export functionality.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2069",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      githubUrl: "https://github.com/",
      liveUrl: "/demo/portfolio"
    },
    {
      title: "Task Management App",
      description: "A full-stack application for managing tasks and projects. Features include task creation, assignment, status tracking, and team collaboration tools.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=2070",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/",
      liveUrl: "/demo/tasks"
    },
    {
      title: "E-commerce Store",
      description: "A fictional e-commerce platform with product listings, shopping cart, and checkout process. Integrated with mock payment processing and order management.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2070",
      technologies: ["React", "Redux", "CSS", "Firebase"],
      githubUrl: "https://github.com/",
      liveUrl: "/demo/ecommerce"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Featured Work</span>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                My Projects
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                A curated collection of my recent work showcasing different technologies, design patterns, and problem-solving approaches. Each project represents unique challenges and innovative solutions.
              </p>
            </ScrollAnimation>

            {/* Stats Section */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">4+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Live Projects</p>
                </div>
                
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-accent" />
                    <span className="text-2xl font-bold text-accent">1000+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Users Reached</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">10+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Technologies Used</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation 
                key={project.title} 
                animation="fade-up" 
                delay={100 + index * 150}
                className="group"
              >
                <div className="relative">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />
                  
                  {/* Project Card */}
                  <div className="relative bg-background/95 backdrop-blur-xl rounded-2xl p-1 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group-hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-background to-secondary/30 rounded-xl overflow-hidden">
                      <ProjectCard {...project} />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" />
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollAnimation animation="fade-up" delay={800} className="text-center mt-16">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm always excited to collaborate on new projects and bring innovative ideas to life.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                Get In Touch
                <Star className="w-4 h-4" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </main>
  );
};

export default Projects;
