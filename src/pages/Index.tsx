import React from 'react';
import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import ProblemSolvingShowcase from '@/components/ProblemSolvingShowcase';
import TestimonialsMetrics from '@/components/TestimonialsMetrics';
import AboutMeSection from '@/components/AboutMeSection';
import CollapsibleProjectDetails from '@/components/CollapsibleProjectDetails';
import EnhancedButton from '@/components/EnhancedButton';
import ScrollAnimation from '@/components/ScrollAnimation';
import { ArrowRight, Sparkles, Code, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: "Weather Dashboard",
    description: "A comprehensive React-based weather application that fetches real-time data via OpenWeatherMap API, featuring current conditions, 5-day forecasts, and location-based searches.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800&h=400",
    technologies: ["React", "JavaScript", "CSS", "OpenWeatherMap API", "Responsive Design"],
    liveUrl: "/demo/weather",
    context: "Built to showcase API integration skills and provide users with accurate, real-time weather information in an intuitive interface. The goal was to create a practical application that demonstrates proficiency in external API consumption and responsive design principles.",
    process: [
      "Researched and integrated OpenWeatherMap API for reliable weather data",
      "Designed responsive UI components using modern CSS techniques",
      "Implemented error handling for API failures and network issues",
      "Added location-based search functionality with user-friendly suggestions",
      "Optimized performance with efficient state management and data caching"
    ],
    outcome: [
      "Successfully deployed a fully functional weather application",
      "Achieved 100% responsive design across all device sizes",
      "Implemented robust error handling with 99% uptime reliability",
      "Gained deep understanding of RESTful API integration patterns"
    ],
    challenges: [
      "Handling API rate limits and implementing efficient caching strategies",
      "Managing different weather data formats and edge cases",
      "Creating smooth user experience during data loading states"
    ],
    learnings: [
      "Advanced API integration techniques and error handling patterns",
      "Performance optimization strategies for external data fetching",
      "User experience design principles for data-heavy applications"
    ]
  },
  {
    title: "Portfolio Builder",
    description: "An interactive portfolio website builder that enables users to create professional portfolio websites with real-time preview, customizable themes, and code export functionality.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800&h=400",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Context API", "Local Storage"],
    liveUrl: "/demo/portfolio",
    context: "Developed to solve the common problem of technical professionals needing quick, professional portfolio creation. The application demonstrates advanced React patterns, state management, and user experience design while providing real business value.",
    process: [
      "Architected component-based structure with reusable UI elements",
      "Implemented real-time preview system with instant visual feedback",
      "Built theme system with customizable color schemes and layouts",
      "Created form validation and data persistence using local storage",
      "Developed export functionality for generated portfolio code"
    ],
    outcome: [
      "Delivered a fully functional portfolio builder with 5+ customizable themes",
      "Achieved seamless real-time preview with zero-lag user experience",
      "Successfully implemented data persistence and export capabilities",
      "Demonstrated mastery of advanced React patterns and TypeScript"
    ],
    challenges: [
      "Building a real-time preview system without performance issues",
      "Managing complex state across multiple form components",
      "Creating a flexible theme system that works across all components"
    ],
    learnings: [
      "Advanced React patterns including compound components and render props",
      "TypeScript best practices for large-scale applications",
      "User experience design for complex interactive applications"
    ]
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-violet-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 transition-colors duration-300">
      <Hero />
      
      {/* About Me Section */}
      <AboutMeSection />
      
      {/* Problem Solving Showcase */}
      <ProblemSolvingShowcase />
      
      {/* Enhanced Featured Projects */}
      <section className="py-20 section-gradient relative overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        {/* Enhanced floating decoration elements */}
        <ScrollAnimation animation="fade-in" delay={200}>
          <div className="absolute top-10 right-10 animate-float opacity-30 hover:opacity-50 transition-opacity duration-500">
            <Code className="w-8 h-8 md:w-12 md:h-12 text-purple-600 dark:text-purple-400 animate-pulse" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in" delay={400}>
          <div className="absolute bottom-10 left-10 animate-float opacity-30 hover:opacity-50 transition-opacity duration-500" style={{ animationDelay: '1s' }}>
            <Globe className="w-8 h-8 md:w-10 md:h-10 text-violet-600 dark:text-violet-400 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in" delay={600}>
          <div className="absolute top-1/2 right-1/4 animate-bounce opacity-20">
            <Database className="w-6 h-6 md:w-8 md:h-8 text-purple-500 dark:text-purple-400" />
          </div>
        </ScrollAnimation>
        
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
              <h2 className="text-3xl md:text-4xl font-bold group text-gray-900 dark:text-white">
                <span className="text-gradient-purple group-hover:from-fuchsia-500 group-hover:to-purple-700 transition-all duration-500 hover:scale-105 inline-block">Featured</span> Projects
              </h2>
              <Link to="/projects" className="group flex items-center text-purple-600 dark:text-purple-400 hover:text-violet-700 dark:hover:text-violet-300 mt-4 md:mt-0 hover:scale-105 transition-all duration-300 hover:gap-4">
                View all projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
              </Link>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation 
                key={project.title} 
                animation="fade-up" 
                delay={200 + index * 200}
                className="hover-lift transition-all duration-500 group hover:scale-105"
              >
                <div className="glass-effect dark:glass-effect-dark rounded-2xl p-1 group-hover:purple-glow transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-300/50 dark:group-hover:shadow-purple-500/20">
                  <CollapsibleProjectDetails project={project} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      <ScrollAnimation animation="fade-up" delay={100}>
        <SkillsSection />
      </ScrollAnimation>
      
      {/* Testimonials and Metrics */}
      <TestimonialsMetrics />
      
      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-white to-violet-50/30 dark:from-gray-900/50 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <ScrollAnimation animation="fade-in" delay={100}>
            <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-purple-500/15 dark:bg-purple-400/10 rounded-full blur-xl animate-pulse hover:bg-purple-500/25 dark:hover:bg-purple-400/15 transition-colors duration-1000"></div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" delay={300}>
            <div className="absolute bottom-20 right-20 w-24 h-24 md:w-32 md:h-32 bg-violet-500/20 dark:bg-violet-400/15 rounded-full blur-lg animate-pulse hover:bg-violet-500/30 dark:hover:bg-violet-400/20 transition-colors duration-1000" style={{ animationDelay: '1s' }}></div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" delay={500}>
            <div className="absolute top-1/2 left-1/2 w-36 h-36 md:w-48 md:h-48 bg-fuchsia-500/10 dark:bg-fuchsia-400/5 rounded-full blur-2xl animate-float hover:bg-fuchsia-500/20 dark:hover:bg-fuchsia-400/10 transition-colors duration-1000"></div>
          </ScrollAnimation>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollAnimation animation="scale-up" delay={200}>
            <div className="max-w-4xl mx-auto glass-effect dark:glass-effect-dark p-8 md:p-12 rounded-3xl shadow-2xl border border-purple-200/50 dark:border-purple-800/50 hover:shadow-3xl hover:shadow-purple-200/30 dark:hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group purple-glow hover:border-purple-300/70 dark:hover:border-purple-600/70">
              
              <ScrollAnimation animation="fade-up" delay={400}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-purple group-hover:from-fuchsia-500 group-hover:to-purple-700 transition-all duration-500 hover:scale-105 cursor-pointer">
                  Let's Work Together
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={600}>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed hover:text-gray-500 dark:hover:text-gray-200 transition-colors duration-300">
                  I'm currently available for freelance work and full-time positions. 
                  If you're looking for a developer who is passionate about creating elegant solutions, let's talk!
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={800}>
                <Link to="/contact">
                  <EnhancedButton 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-110 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden px-8 md:px-10 py-6 md:py-7 text-white"
                    loadingDuration={1200}
                  >
                    <span className="relative z-10 flex items-center gap-3 text-base md:text-lg font-medium">
                      Get in Touch
                      <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </EnhancedButton>
                </Link>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default Index;
