import React from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import ScrollAnimation from '@/components/ScrollAnimation';

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
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              A collection of my recent work. Each project represents different challenges and learning experiences.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation 
                key={project.title} 
                animation="fade-up" 
                delay={100 + index * 150}
                className="hover-lift transition-all duration-500"
              >
                <div className="glass-effect rounded-2xl p-1 hover:purple-glow transition-all duration-300 hover:shadow-2xl hover:shadow-purple-300/50">
                  <ProjectCard {...project} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
