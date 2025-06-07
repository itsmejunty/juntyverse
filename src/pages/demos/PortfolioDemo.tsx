
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
  ExternalLink, Save, RefreshCw
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
    name: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate full-stack developer with 3+ years of experience building modern web applications. I love creating elegant solutions to complex problems.',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  });

  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    website: 'https://johndoe.dev',
    twitter: 'https://twitter.com/johndoe'
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/ecommerce',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400'
    }
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      duration: '2022 - Present',
      description: 'Lead development of user interfaces for web applications using React and TypeScript.',
      location: 'San Francisco, CA'
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Computer Science',
      year: '2019',
      gpa: '3.8'
    }
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' }
  ]);

  const [selectedTheme, setSelectedTheme] = useState('modern');
  const previewRef = useRef<HTMLDivElement>(null);

  const themes = [
    { id: 'modern', name: 'Modern', colors: 'from-blue-500 to-purple-600' },
    { id: 'minimal', name: 'Minimal', colors: 'from-gray-800 to-gray-600' },
    { id: 'creative', name: 'Creative', colors: 'from-pink-500 to-orange-500' },
    { id: 'professional', name: 'Professional', colors: 'from-green-600 to-blue-600' }
  ];

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Project description',
      technologies: ['React'],
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
      description: 'Job description and responsibilities',
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
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Beginner': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const generatePortfolioCode = () => {
    return `// Your Generated Portfolio Code
import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br ${themes.find(t => t.id === selectedTheme)?.colors}">
      {/* Header */}
      <header className="text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <img src="${personalInfo.profileImage}" alt="${personalInfo.name}" className="w-32 h-32 rounded-full mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-2">${personalInfo.name}</h1>
          <p className="text-xl mb-4">${personalInfo.title}</p>
          <p className="max-w-2xl mx-auto">${personalInfo.bio}</p>
        </div>
      </header>
      
      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${projects.map(project => `
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="${project.image}" alt="${project.title}" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">${project.title}</h3>
                <p className="text-gray-600 mb-4">${project.description}</p>
                <div className="flex flex-wrap gap-2">
                  ${project.technologies.map(tech => `<span className="px-2 py-1 bg-gray-200 rounded text-sm">${tech}</span>`).join('')}
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
    const themeClasses = themes.find(t => t.id === selectedTheme);
    
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className={`bg-gradient-to-r ${themeClasses?.colors} text-white py-20`}>
          <div className="container mx-auto px-4 text-center">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-white shadow-lg">
              <AvatarImage src={personalInfo.profileImage} alt={personalInfo.name} />
              <AvatarFallback className="text-4xl">{personalInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">{personalInfo.title}</p>
            <p className="max-w-2xl mx-auto text-lg opacity-80 mb-6">{personalInfo.bio}</p>
            
            <div className="flex justify-center gap-4 mb-6">
              {socialLinks.github && (
                <a href={socialLinks.github} className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socialLinks.website && (
                <a href={socialLinks.website} className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              )}
            </div>
            
            <div className="flex justify-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </span>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="font-semibold mb-2">{skill.name}</div>
                  <Badge className={`${getLevelColor(skill.level)} text-white`}>
                    {skill.level}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden border">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4 mr-1" />
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                  <p className="text-lg text-gray-600 mb-2">{exp.company} • {exp.location}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <Badge variant="outline">{edu.year}</Badge>
                  </div>
                  <p className="text-lg text-gray-600">{edu.institution}</p>
                  {edu.gpa && <p className="text-gray-700">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio Builder
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create your professional portfolio website in minutes. Customize every detail and download the code when you're ready.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg border">
            <Button
              variant={activeTab === 'edit' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('edit')}
              className="gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit Content
            </Button>
            <Button
              variant={activeTab === 'preview' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('preview')}
              className="gap-2"
            >
              <Eye className="w-4 h-4" />
              Preview
            </Button>
            <Button
              variant={activeTab === 'code' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('code')}
              className="gap-2"
            >
              <Code className="w-4 h-4" />
              Export Code
            </Button>
          </div>
        </div>

        {activeTab === 'edit' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Social Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">GitHub</label>
                  <Input
                    value={socialLinks.github}
                    onChange={(e) => setSocialLinks({...socialLinks, github: e.target.value})}
                    placeholder="https://github.com/username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">LinkedIn</label>
                  <Input
                    value={socialLinks.linkedin}
                    onChange={(e) => setSocialLinks({...socialLinks, linkedin: e.target.value})}
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Website</label>
                  <Input
                    value={socialLinks.website}
                    onChange={(e) => setSocialLinks({...socialLinks, website: e.target.value})}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Twitter</label>
                  <Input
                    value={socialLinks.twitter}
                    onChange={(e) => setSocialLinks({...socialLinks, twitter: e.target.value})}
                    placeholder="https://twitter.com/username"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Theme Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Theme Selection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedTheme === theme.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-full h-8 rounded bg-gradient-to-r ${theme.colors} mb-2`}></div>
                      <div className="font-medium">{theme.name}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <Input
                        value={skill.name}
                        onChange={(e) => updateSkill(index, { name: e.target.value })}
                        className="flex-1"
                      />
                      <select
                        value={skill.level}
                        onChange={(e) => updateSkill(index, { level: e.target.value as Skill['level'] })}
                        className="px-3 py-2 border rounded-md"
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
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button onClick={addSkill} variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'preview' && (
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-600">Portfolio Preview</div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveTab('code')}
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
            <div ref={previewRef} className="max-h-[80vh] overflow-y-auto">
              {renderPreview()}
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Generated Portfolio Code
              </CardTitle>
              <CardDescription>
                Copy this code to create your portfolio website. You can customize it further or deploy it to any hosting platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{generatePortfolioCode()}</code>
                </pre>
              </div>
              <div className="mt-4 flex gap-2">
                <Button onClick={() => navigator.clipboard.writeText(generatePortfolioCode())}>
                  <Save className="w-4 h-4 mr-2" />
                  Copy Code
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Files
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Demo Notice */}
        <Alert className="mt-8 border-purple-200 bg-purple-50">
          <Code className="h-4 w-4" />
          <AlertDescription>
            <strong>Portfolio Builder Demo:</strong> This is a fully functional portfolio builder. 
            You can customize all sections, preview your changes in real-time, and export the generated code. 
            The exported code includes modern React components with Tailwind CSS styling.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default PortfolioDemo;
