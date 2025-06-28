
import React from 'react';
import Hero from '@/components/Hero';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import ProblemSolvingShowcase from '@/components/ProblemSolvingShowcase';
import EnhancedButton from '@/components/EnhancedButton';
import ScrollAnimation from '@/components/ScrollAnimation';
import { ArrowRight, Sparkles, Code, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects: ProjectCardProps[] = [
  {
    title: "Portfolio Builder",
    description: "An interactive portfolio website builder that helps users create professional portfolio websites with real-time preview and code export.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2069",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    liveUrl: "/demo/portfolio",
    projectCode: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}

const PortfolioBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'John Doe',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with experience in modern web technologies.'
  });

  const [previewMode, setPreviewMode] = useState(false);

  if (previewMode) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Button onClick={() => setPreviewMode(false)} className="mb-4">
          Exit Preview
        </Button>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{personalInfo.title}</p>
          <p className="text-gray-700">{personalInfo.bio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Builder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
          />
          <Input
            placeholder="Professional Title"
            value={personalInfo.title}
            onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})}
          />
          <Textarea
            placeholder="Bio"
            value={personalInfo.bio}
            onChange={(e) => setPersonalInfo({...personalInfo, bio: e.target.value})}
          />
          <Button onClick={() => setPreviewMode(true)} className="w-full">
            Preview Portfolio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};`
  },
  {
    title: "Weather Dashboard",
    description: "A React-based web app fetching weather data via OpenWeatherMap API to display current conditions and forecasts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1974",
    technologies: ["React", "JavaScript", "CSS", "APIs"],
    liveUrl: "/demo/weather",
    projectCode: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await fetch(
        \`https://api.openweathermap.org/data/2.5/weather?q=\${cityName}&appid=YOUR_API_KEY&units=metric\`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Weather Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={() => fetchWeather(city)} disabled={loading}>
              {loading ? 'Loading...' : 'Search'}
            </Button>
          </div>
          
          {weather && (
            <div className="text-center">
              <h3 className="text-2xl font-bold">{weather.name}</h3>
              <p className="text-4xl">{Math.round(weather.main.temp)}°C</p>
              <p className="text-gray-600">{weather.weather[0].description}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};`
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-violet-50/50">
      <Hero />
      
      {/* Problem Solving Showcase - New section */}
      <ProblemSolvingShowcase />
      
      {/* Enhanced Featured Projects with purple theme */}
      <section className="py-20 section-gradient relative overflow-hidden">
        {/* Enhanced floating decoration elements */}
        <ScrollAnimation animation="fade-in" delay={200}>
          <div className="absolute top-10 right-10 animate-float opacity-30 hover:opacity-50 transition-opacity duration-500">
            <Code className="w-12 h-12 text-purple-600 animate-pulse" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in" delay={400}>
          <div className="absolute bottom-10 left-10 animate-float opacity-30 hover:opacity-50 transition-opacity duration-500" style={{ animationDelay: '1s' }}>
            <Globe className="w-10 h-10 text-violet-600 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in" delay={600}>
          <div className="absolute top-1/2 right-1/4 animate-bounce opacity-20">
            <Database className="w-8 h-8 text-purple-500" />
          </div>
        </ScrollAnimation>
        
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
              <h2 className="text-4xl font-bold group">
                <span className="text-gradient-purple group-hover:from-fuchsia-500 group-hover:to-purple-700 transition-all duration-500 hover:scale-105 inline-block">Featured</span> Projects
              </h2>
              <Link to="/projects" className="group flex items-center text-purple-600 hover:text-violet-700 mt-4 md:mt-0 hover:scale-105 transition-all duration-300 hover:gap-4">
                View all projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
              </Link>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ScrollAnimation 
                key={project.title} 
                animation="fade-up" 
                delay={200 + index * 200}
                className="hover-lift transition-all duration-500 group hover:scale-105"
              >
                <div className="glass-effect rounded-2xl p-1 group-hover:purple-glow transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-300/50">
                  <ProjectCard {...project} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      <ScrollAnimation animation="fade-up" delay={100}>
        <SkillsSection />
      </ScrollAnimation>
      
      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-white to-violet-50/30 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <ScrollAnimation animation="fade-in" delay={100}>
            <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/15 rounded-full blur-xl animate-pulse hover:bg-purple-500/25 transition-colors duration-1000"></div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" delay={300}>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-violet-500/20 rounded-full blur-lg animate-pulse hover:bg-violet-500/30 transition-colors duration-1000" style={{ animationDelay: '1s' }}></div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" delay={500}>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-2xl animate-float hover:bg-fuchsia-500/20 transition-colors duration-1000"></div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" delay={700}>
            <div className="absolute top-10 right-1/4 w-24 h-24 bg-purple-400/15 rounded-full blur-xl animate-bounce opacity-60 hover:opacity-80 transition-opacity duration-500"></div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" delay={900}>
            <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-violet-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </ScrollAnimation>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollAnimation animation="scale-up" delay={200}>
            <div className="max-w-4xl mx-auto glass-effect p-12 rounded-3xl shadow-2xl border border-purple-200/50 hover:shadow-3xl hover:shadow-purple-200/30 transition-all duration-500 hover:scale-105 group purple-glow hover:border-purple-300/70">
              {/* Enhanced floating icons */}
              <div className="absolute -top-6 -left-6 animate-bounce hover:animate-spin transition-all duration-300">
                <Database className="w-8 h-8 text-purple-500" />
              </div>
              <div className="absolute -top-6 -right-6 animate-bounce hover:animate-spin transition-all duration-300" style={{ animationDelay: '0.5s' }}>
                <Code className="w-8 h-8 text-violet-600" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-pulse hover:animate-bounce transition-all duration-300">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              
              <ScrollAnimation animation="fade-up" delay={400}>
                <h2 className="text-4xl font-bold mb-8 text-gradient-purple group-hover:from-fuchsia-500 group-hover:to-purple-700 transition-all duration-500 hover:scale-105 cursor-pointer">
                  Let's Work Together
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={600}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed hover:text-muted-foreground/80 transition-colors duration-300">
                  I'm currently available for freelance work and full-time positions. 
                  If you're looking for a developer who is passionate about creating elegant solutions, let's talk!
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={800}>
                <Link to="/contact">
                  <EnhancedButton 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-110 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden px-10 py-7"
                    loadingDuration={1200}
                  >
                    <span className="relative z-10 flex items-center gap-3 text-lg font-medium">
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
