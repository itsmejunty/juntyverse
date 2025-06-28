
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, User, Mail, Building, DollarSign, Calendar, Target, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ProjectDiscussionModalProps {
  children: React.ReactNode;
}

const ProjectDiscussionModal = ({ children }: ProjectDiscussionModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    projectTitle: '',
    problemDescription: '',
    currentChallenges: '',
    expectedOutcome: '',
    additionalInfo: ''
  });

  const technologies = [
    'React', 'Node.js', 'TypeScript', 'Python', 'Next.js', 'Vue.js', 'Angular',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTechnology = (tech: string) => {
    if (!selectedTechnologies.includes(tech)) {
      setSelectedTechnologies(prev => [...prev, tech]);
    }
  };

  const removeTechnology = (tech: string) => {
    setSelectedTechnologies(prev => prev.filter(t => t !== tech));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        from_name: formData.name,
        reply_to: formData.email,
        company: formData.company,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        project_title: formData.projectTitle,
        problem_description: formData.problemDescription,
        current_challenges: formData.currentChallenges,
        expected_outcome: formData.expectedOutcome,
        technologies: selectedTechnologies.join(', '),
        additional_info: formData.additionalInfo,
        subject: `New Project Discussion: ${formData.projectTitle}`,
        message: `
Project Discussion Request

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company}

Project Details:
- Type: ${formData.projectType}
- Title: ${formData.projectTitle}
- Budget Range: ${formData.budget}
- Timeline: ${formData.timeline}

Problem Description:
${formData.problemDescription}

Current Challenges:
${formData.currentChallenges}

Expected Outcome:
${formData.expectedOutcome}

Technologies: ${selectedTechnologies.join(', ')}

Additional Information:
${formData.additionalInfo}
        `
      };

      emailjs.init('gIFZN3uJWbJjIIXwC');
      
      await emailjs.send('service_vavsskp', 'template_2kd2n3r', emailData);

      toast({
        title: "Project submission received! 🚀",
        description: "Thank you for sharing your project details. I'll review and get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '', email: '', company: '', projectType: '', budget: '', timeline: '',
        projectTitle: '', problemDescription: '', currentChallenges: '', expectedOutcome: '', additionalInfo: ''
      });
      setSelectedTechnologies([]);
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to send project discussion:', error);
      toast({
        title: "Submission failed",
        description: "There was an issue submitting your project. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Discuss Your Project
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="ABC Corp"
                />
              </div>
              <div>
                <Label htmlFor="projectType">Project Type *</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-app">Web Application</SelectItem>
                    <SelectItem value="mobile-app">Mobile Application</SelectItem>
                    <SelectItem value="api-backend">API/Backend Development</SelectItem>
                    <SelectItem value="performance">Performance Optimization</SelectItem>
                    <SelectItem value="automation">Process Automation</SelectItem>
                    <SelectItem value="consulting">Technical Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Project Details
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="projectTitle">Project Title *</Label>
                <Input
                  id="projectTitle"
                  value={formData.projectTitle}
                  onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                  placeholder="E-commerce Platform Redesign"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                      <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                      <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                      <SelectItem value="over-50k">$50,000+</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Expected Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1-month">1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-months-plus">6+ months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Description */}
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Problem & Solution</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="problemDescription">Problem Description *</Label>
                <Textarea
                  id="problemDescription"
                  value={formData.problemDescription}
                  onChange={(e) => handleInputChange('problemDescription', e.target.value)}
                  placeholder="Describe the problem you're facing or the challenge you need to solve..."
                  rows={3}
                  required
                />
              </div>
              <div>
                <Label htmlFor="currentChallenges">Current Challenges</Label>
                <Textarea
                  id="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                  placeholder="What obstacles are you currently facing? What have you tried so far?"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="expectedOutcome">Expected Outcome *</Label>
                <Textarea
                  id="expectedOutcome"
                  value={formData.expectedOutcome}
                  onChange={(e) => handleInputChange('expectedOutcome', e.target.value)}
                  placeholder="What would success look like? What are your goals and objectives?"
                  rows={3}
                  required
                />
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Technologies & Additional Info</h3>
            <div className="space-y-4">
              <div>
                <Label>Preferred Technologies (Optional)</Label>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  {technologies.map((tech) => (
                    <Button
                      key={tech}
                      type="button"
                      variant={selectedTechnologies.includes(tech) ? "default" : "outline"}
                      size="sm"
                      onClick={() => selectedTechnologies.includes(tech) ? removeTechnology(tech) : addTechnology(tech)}
                      className="h-8"
                    >
                      {tech}
                      {selectedTechnologies.includes(tech) && <X className="w-3 h-3 ml-1" />}
                    </Button>
                  ))}
                </div>
                {selectedTechnologies.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {selectedTechnologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  placeholder="Any additional details, requirements, or questions you'd like to share..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Submit Project
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDiscussionModal;
