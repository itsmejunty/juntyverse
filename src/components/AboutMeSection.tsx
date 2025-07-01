
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Calendar, Heart, Code, Briefcase, Target, Lightbulb } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import ResumeDownload from './ResumeDownload';

const AboutMeSection = () => {
  const coreSkills = [
    "Full-Stack Development", "Problem Solving", "System Design", "API Integration"
  ];

  const softSkills = [
    "Team Collaboration", "Agile Methodology", "Project Management", "Client Communication"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full mb-6">
              <User className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">Professional Profile</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              About <span className="relative">Me<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div></span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate Full-Stack Developer with expertise in modern web technologies and a commitment to delivering exceptional user experiences
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Professional Summary */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollAnimation animation="fade-up" delay={200}>
              <Card className="border-2 border-purple-200/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/20 dark:to-pink-950/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Professional Summary
                    </h3>
                  </div>
                  
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      I am <strong className="text-foreground font-semibold">Jadidya</strong>, a dedicated Full-Stack Developer with a fresh B.Tech in Computer Science and a passion for creating innovative digital solutions. My expertise spans across modern web technologies including <strong className="text-purple-600">React</strong>, <strong className="text-blue-600">Node.js</strong>, and <strong className="text-green-600">Python</strong>.
                    </p>
                    
                    <p className="text-lg">
                      With comprehensive training in both frontend and backend development, I excel at building scalable, user-centric applications that solve real-world problems. My approach combines technical precision with creative problem-solving to deliver solutions that exceed expectations.
                    </p>
                    
                    <p className="text-lg">
                      I thrive in collaborative environments and am committed to continuous learning, staying current with emerging technologies and industry best practices to deliver cutting-edge solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <Card className="border-2 border-blue-200/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Career Objectives
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Immediate Goals
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Join a dynamic development team as a Junior/Mid-level Full-Stack Developer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Contribute to high-impact projects using modern technologies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Expand expertise in cloud technologies and DevOps practices</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Long-term Vision
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Advance to Senior Developer/Technical Lead role</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Specialize in system architecture and scalable solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Mentor junior developers and drive technical innovation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Professional Sidebar */}
          <div className="space-y-6">
            <ScrollAnimation animation="fade-up" delay={400}>
              <Card className="border-2 border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30 dark:from-gray-900 dark:via-green-950/20 dark:to-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">Professional Info</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="text-muted-foreground">B.Tech Graduate - 2024</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                      <Code className="w-4 h-4 text-blue-600" />
                      <span className="text-muted-foreground">Full-Stack Developer</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
                      <Heart className="w-4 h-4 text-purple-600" />
                      <span className="text-muted-foreground">Innovation Enthusiast</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={500}>
              <Card className="border-2 border-purple-200/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/20 dark:to-pink-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">Core Expertise</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Technical Skills</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {coreSkills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Professional Skills</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {softSkills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline" 
                            className="text-xs border-purple-300 text-purple-700 hover:bg-purple-50 transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <Card className="border-2 border-pink-200/50 hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 dark:from-gray-900 dark:via-pink-950/20 dark:to-purple-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">Professional Values</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span><strong className="text-foreground">Quality First:</strong> Committed to writing clean, maintainable code</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span><strong className="text-foreground">Continuous Learning:</strong> Always exploring new technologies</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span><strong className="text-foreground">User-Centric:</strong> Focused on exceptional user experiences</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
        
        {/* Professional Resume Download Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <ResumeDownload />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
