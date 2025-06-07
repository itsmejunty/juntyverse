import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  User, Mail, Phone, Github, Linkedin, Globe, Plus, X, Download, 
  Eye, Edit, Palette, Code, Briefcase, GraduationCap, Award,
  ExternalLink, Save, RefreshCw, Sparkles, Zap, Star, Rocket
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  profileImage: string;
}

interface SocialLinks {
  github: string;
  linkedin: string;
  website: string;
  twitter: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  location: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  gpa: string;
}

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const PortfolioDemo = () => {
  const [activeTab, setActiveTab] = useState('preview');
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'Alexandra Chen',
    title: 'Senior Full Stack Engineer & UI/UX Designer',
    email: 'alexandra.chen@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate full-stack engineer with 5+ years of experience crafting beautiful, scalable web applications. I specialize in React, TypeScript, and modern design systems, with a keen eye for user experience and performance optimization.',
    profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=400'
  });

  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    github: 'https://github.com/alexandra-chen',
    linkedin: 'https://linkedin.com/in/alexandra-chen',
    website: 'https://alexandra-chen.dev',
    twitter: 'https://twitter.com/alexandra_codes'
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'AI-Powered E-commerce Platform',
      description: 'A next-generation e-commerce platform with AI-driven product recommendations, real-time inventory management, and seamless payment processing.',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'OpenAI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/alexandra-chen/ai-ecommerce',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '2',
      title: 'Real-time Collaboration Tool',
      description: 'A modern team collaboration platform with real-time messaging, video calls, file sharing, and project management capabilities.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
      liveUrl: 'https://collab-tool.com',
      githubUrl: 'https://github.com/alexandra-chen/collab-tool',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600'
    }
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Engineer',
      duration: '2022 - Present',
      description: 'Lead development of enterprise-scale web applications, mentor junior developers, and architect scalable cloud solutions serving 100K+ users.',
      location: 'San Francisco, CA'
    },
    {
      id: '2',
      company: 'InnovateLab',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      description: 'Developed responsive web applications using React and TypeScript, implemented design systems, and improved performance by 40%.',
      location: 'San Francisco, CA'
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: '1',
      institution: 'Stanford University',
      degree: 'Master of Computer Science',
      year: '2020',
      gpa: '3.9'
    },
    {
      id: '2',
      institution: 'UC Berkeley',
      degree: 'Bachelor of Computer Science',
      year: '2018',
      gpa: '3.8'
    }
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { name: 'JavaScript/TypeScript', level: 'Expert' },
    { name: 'React/Next.js', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'AWS/Cloud', level: 'Advanced' },
    { name: 'UI/UX Design', level: 'Intermediate' }
  ]);

  const [selectedTheme, setSelectedTheme] = useState('aurora');

  const themes = [
    { id: 'aurora', name: 'Aurora', colors: 'from-purple-600 via-pink-500 to-orange-400', accent: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'ocean', name: 'Ocean', colors: 'from-blue-600 via-cyan-500 to-teal-400', accent: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { id: 'sunset', name: 'Sunset', colors: 'from-orange-500 via-red-500 to-pink-500', accent: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { id: 'forest', name: 'Forest', colors: 'from-green-600 via-emerald-500 to-teal-500', accent: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { id: 'cosmic', name: 'Cosmic', colors: 'from-indigo-600 via-purple-600 to-pink-600', accent: 'bg-gradient-to-r from-indigo-500 to-purple-500' }
  ];

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Describe your amazing project here...',
      technologies: ['React', 'TypeScript'],
      liveUrl: '',
      githubUrl: '',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400'
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: 'Company Name',
      position: 'Job Title',
      duration: '2023 - Present',
      description: 'Describe your role and achievements...',
      location: 'Location'
    };
    setExperiences([...experiences, newExperience]);
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    setExperiences(experiences.map(e => e.id === id ? { ...e, ...updates } : e));
  };

  const deleteExperience = (id: string) => {
    setExperiences(experiences.filter(e => e.id !== id));
  };

  const addSkill = () => {
    const newSkill: Skill = {
      name: 'New Skill',
      level: 'Beginner'
    };
    setSkills([...skills, newSkill]);
  };

  const updateSkill = (index: number, updates: Partial<Skill>) => {
    setSkills(skills.map((s, i) => i === index ? { ...s, ...updates } : s));
  };

  const deleteSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'Advanced': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'Intermediate': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'Beginner': return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const generatePortfolioCode = () => {
    const selectedThemeData = themes.find(t => t.id === selectedTheme);
    return `// Professional Portfolio - Generated by Lovable Portfolio Builder
import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br ${selectedThemeData?.colors}">
      {/* Animated Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <img 
              src="${personalInfo.profileImage}" 
              alt="${personalInfo.name}" 
              className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-500 hover:shadow-3xl" 
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              ${personalInfo.name}
            </h1>
            <p className="text-xl md:text-3xl mb-6 text-white/90">${personalInfo.title}</p>
            <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">${personalInfo.bio}</p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-32 w-24 h-24 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </header>
      
      {/* Skills Section */}
      <section className="py-20 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            ${skills.map(skill => `
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="font-bold text-lg mb-3 text-gray-800">${skill.name}</div>
                <div className="${getLevelColor(skill.level)} px-3 py-1 rounded-full text-sm font-medium">
                  ${skill.level}
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            ${projects.map((project, index) => `
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100" style="animation-delay: ${index * 0.2}s">
              <div className="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">${project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">${project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  ${project.technologies.map(tech => `<span className="px-3 py-1 bg-gradient-to-r ${selectedThemeData?.accent} text-white rounded-full text-sm font-medium">${tech}</span>`).join('')}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r ${selectedThemeData?.accent} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    View Live
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors">
                    Code
                  </button>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;`;
  };

  const renderPreview = () => {
    const themeData = themes.find(t => t.id === selectedTheme);
    
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section with Advanced Animations */}
        <header className={`relative min-h-screen bg-gradient-to-br ${themeData?.colors} text-white overflow-hidden`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute top-40 right-32 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 left-32 w-24 h-24 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-4 text-center">
              <div className="animate-fade-in">
                <div className="relative inline-block mb-8">
                  <Avatar className="w-40 h-40 mx-auto border-4 border-white/30 shadow-2xl hover:scale-110 transition-all duration-500 hover:shadow-3xl">
                    <AvatarImage src={personalInfo.profileImage} alt={personalInfo.name} />
                    <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-500 to-pink-500">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 animate-slide-up">
                  {personalInfo.name}
                </h1>
                
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Rocket className="w-6 h-6 text-white/80" />
                  <p className="text-xl md:text-3xl text-white/90 font-medium">{personalInfo.title}</p>
                  <Star className="w-6 h-6 text-white/80" />
                </div>
                
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  {personalInfo.bio}
                </p>
                
                <div className="flex justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '1s' }}>
                  {socialLinks.github && (
                    <a href={socialLinks.github} className="group bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} className="group bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                  {socialLinks.website && (
                    <a href={socialLinks.website} className="group bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                      <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                </div>
                
                <div className="flex justify-center gap-8 text-sm animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Mail className="w-4 h-4" />
                    {personalInfo.email}
                  </span>
                  <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Phone className="w-4 h-4" />
                    {personalInfo.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Skills Section with Enhanced Design */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                <p className="text-lg text-gray-600">Technologies I'm passionate about</p>
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-center">
                    <div className="font-bold text-lg mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      {skill.name}
                    </div>
                    <Badge className={`${getLevelColor(skill.level)} border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                      {skill.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Showcasing innovative solutions and cutting-edge technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div key={project.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-gray-100/50 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className={`${themeData?.accent} text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button className={`flex-1 ${themeData?.accent} text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0`}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" className="hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 text-purple-600 border-purple-200 bg-purple-50">
                      {exp.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Education
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu, index) => (
                <div key={edu.id} className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium">{edu.institution}</p>
                      {edu.gpa && (
                        <p className="text-gray-500 mt-1">GPA: {edu.gpa}/4.0</p>
                      )}
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 text-blue-600 border-blue-200 bg-blue-50">
                      {edu.year}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Portfolio Studio
            </h1>
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create stunning, professional portfolio websites with cutting-edge design, vibrant animations, 
            and modern aesthetics. Build your digital presence in minutes.
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200/50">
            <Button
              variant={activeTab === 'edit' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('edit')}
              className={`gap-2 rounded-xl transition-all duration-300 ${
                activeTab === 'edit' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <Edit className="w-4 h-4" />
              Edit Content
            </Button>
            <Button
              variant={activeTab === 'preview' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('preview')}
              className={`gap-2 rounded-xl transition-all duration-300 ${
                activeTab === 'preview' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <Eye className="w-4 h-4" />
              Preview
            </Button>
            <Button
              variant={activeTab === 'code' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('code')}
              className={`gap-2 rounded-xl transition-all duration-300 ${
                activeTab === 'code' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <Code className="w-4 h-4" />
              Export Code
            </Button>
          </div>
        </div>

        {activeTab === 'edit' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input
                      value={personalInfo.name}
                      onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Professional Title</label>
                    <Input
                      value={personalInfo.title}
                      onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <Input
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <Input
                    value={personalInfo.location}
                    onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Bio</label>
                  <Textarea
                    rows={3}
                    value={personalInfo.bio}
                    onChange={(e) => setPersonalInfo({...personalInfo, bio: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Profile Image URL</label>
                  <Input
                    value={personalInfo.profileImage}
                    onChange={(e) => setPersonalInfo({...personalInfo, profileImage: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Theme Selection */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Theme Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`group p-6 rounded-xl border-2 transition-all duration-500 hover:scale-105 ${
                        selectedTheme === theme.id 
                          ? 'border-purple-500 bg-purple-50 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <div className={`w-full h-12 rounded-lg bg-gradient-to-r ${theme.colors} mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}></div>
                      <div className="font-bold text-lg text-gray-800">{theme.name}</div>
                      <div className="text-sm text-gray-600 mt-1">Professional & Modern</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex gap-3 items-center p-4 bg-gray-50/80 rounded-lg hover:bg-gray-100/80 transition-colors duration-300">
                      <Input
                        value={skill.name}
                        onChange={(e) => updateSkill(index, { name: e.target.value })}
                        className="flex-1 border-0 bg-white/50"
                        placeholder="Skill name"
                      />
                      <select
                        value={skill.level}
                        onChange={(e) => updateSkill(index, { level: e.target.value as Skill['level'] })}
                        className="px-3 py-2 border border-gray-200 rounded-md bg-white/50"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteSkill(index)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button onClick={addSkill} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg transition-all duration-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Projects Management */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Projects Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {projects.map((project) => (
                    <div key={project.id} className="p-4 bg-gray-50/80 rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <Input
                          value={project.title}
                          onChange={(e) => updateProject(project.id, { title: e.target.value })}
                          className="flex-1 mr-2 font-semibold border-0 bg-white/50"
                          placeholder="Project title"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteProject(project.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, { description: e.target.value })}
                        placeholder="Project description"
                        rows={2}
                        className="border-0 bg-white/50"
                      />
                      <Input
                        value={project.technologies.join(', ')}
                        onChange={(e) => updateProject(project.id, { technologies: e.target.value.split(', ').filter(Boolean) })}
                        placeholder="Technologies (comma separated)"
                        className="border-0 bg-white/50"
                      />
                    </div>
                  ))}
                  <Button onClick={addProject} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg transition-all duration-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'preview' && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm font-medium text-gray-600">Portfolio Preview - {themes.find(t => t.id === selectedTheme)?.name} Theme</div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveTab('code')}
                className="hover:bg-gray-100 transition-colors duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="max-h-[80vh] overflow-y-auto">
              {renderPreview()}
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Generated Portfolio Code
              </CardTitle>
              <CardDescription className="text-gray-300">
                Professional, production-ready React code with modern styling and animations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gray-900 text-green-400 p-6 overflow-x-auto font-mono text-sm">
                <pre>
                  <code>{generatePortfolioCode()}</code>
                </pre>
              </div>
              <div className="p-6 bg-gray-50 flex gap-3">
                <Button 
                  onClick={() => navigator.clipboard.writeText(generatePortfolioCode())}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all duration-300"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Copy Code
                </Button>
                <Button variant="outline" className="hover:bg-gray-100 transition-colors duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download Files
                </Button>
                <Button variant="outline" className="hover:bg-gray-100 transition-colors duration-300">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Enhanced Demo Notice */}
        <Alert className="mt-12 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg">
          <Sparkles className="h-5 w-5 text-purple-600" />
          <AlertDescription className="text-gray-700">
            <strong>Professional Portfolio Studio:</strong> This is a fully-featured portfolio builder with modern design systems, 
            advanced animations, vibrant color schemes, and professional layouts. Create stunning portfolios that stand out 
            with responsive design, smooth transitions, and cutting-edge styling.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default PortfolioDemo;
