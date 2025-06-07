
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  User, Mail, Phone, MapPin, Globe, Github, Linkedin, 
  Code, Briefcase, GraduationCap, Award, Download, 
  Eye, Edit3, Save, X, Plus, Trash2, Star, ExternalLink,
  Palette, Type, Layout, Sparkles
} from 'lucide-react';

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  bio: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description: string;
}

const PortfolioDemo = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'Alex Johnson',
    title: 'Full Stack Developer',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'www.alexjohnson.dev',
    github: 'github.com/alexjohnson',
    linkedin: 'linkedin.com/in/alexjohnson',
    bio: 'Passionate full-stack developer with 5+ years of experience creating scalable web applications and user-friendly interfaces.'
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    }
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      duration: '2022 - Present',
      description: 'Led development of customer-facing applications using React and TypeScript'
    },
    {
      id: '2',
      company: 'Digital Agency',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      description: 'Developed and maintained multiple client websites and web applications'
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Computer Science',
      year: '2020',
      description: 'Graduated with honors, specialized in web development and software engineering'
    }
  ]);

  const [skills] = useState(['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL']);

  const TabButton = ({ id, label, icon: Icon }: { id: string; label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
        activeTab === id
          ? 'bg-slate-100 text-slate-900 shadow-sm'
          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="font-medium">{label}</span>
    </button>
  );

  const renderPersonalInfoTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          size="sm"
          className="transition-all duration-200 hover:scale-105"
        >
          {isEditing ? <Save className="h-4 w-4 mr-1" /> : <Edit3 className="h-4 w-4 mr-1" />}
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <Input
            value={personalInfo.name}
            onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
            disabled={!isEditing}
            className="transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Professional Title</label>
          <Input
            value={personalInfo.title}
            onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})}
            disabled={!isEditing}
            className="transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <Input
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
            disabled={!isEditing}
            className="transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
          <Input
            value={personalInfo.phone}
            onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
            disabled={!isEditing}
            className="transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
          <Input
            value={personalInfo.location}
            onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
            disabled={!isEditing}
            className="transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
          <Input
            value={personalInfo.website}
            onChange={(e) => setPersonalInfo({...personalInfo, website: e.target.value})}
            disabled={!isEditing}
            className="transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
        <Textarea
          value={personalInfo.bio}
          onChange={(e) => setPersonalInfo({...personalInfo, bio: e.target.value})}
          disabled={!isEditing}
          rows={4}
          className="transition-all duration-200"
        />
      </div>
    </div>
  );

  const renderProjectsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Projects</h3>
        <Button size="sm" className="bg-slate-800 hover:bg-slate-700 transition-all duration-200 hover:scale-105">
          <Plus className="h-4 w-4 mr-1" />
          Add Project
        </Button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-slate-200">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-slate-800 flex items-center gap-2">
                    {project.title}
                    {project.featured && (
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-slate-600 mt-1">
                    {project.description}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
                  <Edit3 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="transition-all duration-200 hover:scale-105">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="transition-all duration-200 hover:scale-105">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderExperienceTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Work Experience</h3>
        <Button size="sm" className="bg-slate-800 hover:bg-slate-700 transition-all duration-200 hover:scale-105">
          <Plus className="h-4 w-4 mr-1" />
          Add Experience
        </Button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card key={exp.id} className="transition-all duration-300 hover:shadow-md border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-slate-800">{exp.position}</h4>
                  <p className="text-slate-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-slate-500">{exp.duration}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
                  <Edit3 className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-slate-700">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSkillsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Skills & Technologies</h3>
        <Button size="sm" className="bg-slate-800 hover:bg-slate-700 transition-all duration-200 hover:scale-105">
          <Plus className="h-4 w-4 mr-1" />
          Add Skill
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="group p-3 bg-slate-50 rounded-lg border border-slate-200 text-center transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-slate-100"
          >
            <span className="font-medium text-slate-800">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (previewMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Preview Portfolio */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-6">
              <Button onClick={() => setPreviewMode(false)} variant="outline">
                <X className="h-4 w-4 mr-2" />
                Exit Preview
              </Button>
            </div>
            
            {/* Portfolio Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{personalInfo.name}</h1>
              <p className="text-xl text-slate-600 mb-6">{personalInfo.title}</p>
              <p className="text-slate-700 max-w-2xl mx-auto leading-relaxed">{personalInfo.bio}</p>
              
              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline" size="sm" className="transition-all duration-200 hover:scale-105">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="transition-all duration-200 hover:scale-105">
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>

            {/* Featured Projects */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.filter(p => p.featured).map((project) => (
                  <Card key={project.id} className="transition-all duration-300 hover:shadow-xl border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-slate-800">{project.title}</CardTitle>
                      <CardDescription className="text-slate-600">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Portfolio Builder
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Create a professional portfolio website with our intuitive builder. 
            Customize your content, preview your changes, and export your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-32 shadow-lg border-slate-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <Layout className="h-5 w-5" />
                  Builder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <TabButton id="personal" label="Personal Info" icon={User} />
                <TabButton id="projects" label="Projects" icon={Code} />
                <TabButton id="experience" label="Experience" icon={Briefcase} />
                <TabButton id="skills" label="Skills" icon={Award} />
                
                <Separator className="my-4" />
                
                <Button 
                  onClick={() => setPreviewMode(true)}
                  className="w-full bg-slate-800 hover:bg-slate-700 transition-all duration-200 hover:scale-105"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview Portfolio
                </Button>
                
                <Button variant="outline" className="w-full transition-all duration-200 hover:scale-105">
                  <Download className="h-4 w-4 mr-2" />
                  Export Code
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg border-slate-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="animate-fade-in">
                  {activeTab === 'personal' && renderPersonalInfoTab()}
                  {activeTab === 'projects' && renderProjectsTab()}
                  {activeTab === 'experience' && renderExperienceTab()}
                  {activeTab === 'skills' && renderSkillsTab()}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Notice */}
        <Alert className="mt-8 border-slate-200 bg-slate-50/80">
          <Sparkles className="h-4 w-4" />
          <AlertDescription className="text-slate-700">
            <strong>Portfolio Builder Demo:</strong> This is a professional portfolio builder with refined colors and smooth animations. 
            Create, edit, and preview your portfolio with our intuitive interface. All changes are saved locally for this demo.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default PortfolioDemo;
