import React from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Weather Dashboard",
      description: "A React-based web app fetching weather data via OpenWeatherMap API to display current conditions and forecasts. Features include location search, 5-day forecast, and responsive design for all device sizes.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80&w=1974",
      technologies: ["React", "JavaScript", "CSS", "OpenWeatherMap API"],
      githubUrl: "https://github.com/",
      liveUrl: "/demo/weather"
    },
    {
      title: "Personal Portfolio Website",
      description: "A showcase of my skills, projects, and achievements, featuring a contact form and social media integration. Built with modern web technologies and focusing on accessibility and performance.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=2036",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      githubUrl: "https://github.com/",
      liveUrl: "/"
    },
    {
      title: "Task Management App",
      description: "A full-stack application for managing tasks and projects. Features include task creation, assignment, status tracking, and team collaboration tools.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=2070",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/",
      liveUrl: "/demo/tasks"
    },
    {
      title: "E-commerce Store",
      description: "A fictional e-commerce platform with product listings, shopping cart, and checkout process. Integrated with mock payment processing and order management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070",
      technologies: ["React", "Redux", "CSS", "Firebase"],
      githubUrl: "https://github.com/",
      liveUrl: "/demo/ecommerce"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            A collection of my recent work. Each project represents different challenges and learning experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
