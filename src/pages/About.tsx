
import React from 'react';
import AboutMeSection from '@/components/AboutMeSection';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, Sparkles, Trophy, Star, TrendingUp, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Enhanced About Me Section */}
      <AboutMeSection />
      
      {/* Professional Journey & Achievements */}
      <section className="py-20 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30 dark:from-purple-950/10 dark:via-pink-950/5 dark:to-blue-950/10 relative overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/15 to-blue-400/15 rounded-full blur-2xl animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-8 py-4 rounded-full mb-8 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600 animate-pulse" />
                  <span className="text-purple-600 font-bold text-lg">Professional Excellence</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Academic Foundation &<br />
                  <span className="relative">
                    Professional Growth
                    <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-60"></div>
                  </span>
                </h2>
                <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                  Building expertise through rigorous education and continuous professional development in cutting-edge technologies
                </p>
              </div>
            </ScrollAnimation>
            
            {/* Enhanced Education */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="mb-20">
                <div className="flex items-center justify-center gap-4 mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Academic Excellence
                  </h3>
                </div>
                
                <Card className="relative overflow-hidden border-2 border-purple-200/50 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 group bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30 transform hover:scale-[1.02]">
                  {/* Enhanced decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-bl-full opacity-60" />
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <CardContent className="p-12">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                      <div className="flex-1">
                        <h4 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                          Bachelor of Technology
                        </h4>
                        <p className="text-2xl text-purple-600 font-bold mb-2">
                          Computer Science Engineering
                        </p>
                        <p className="text-xl text-purple-500 font-semibold mb-6">
                          Mallareddy College of Engineering
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          Comprehensive curriculum covering advanced topics in computer science including 
                          <strong className="text-foreground"> software engineering principles</strong>, 
                          <strong className="text-foreground"> data structures & algorithms</strong>, 
                          <strong className="text-foreground"> database management systems</strong>, and 
                          <strong className="text-foreground"> modern web technologies</strong>. 
                          Specialized in full-stack development with hands-on project experience.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development', 'System Design', 'Programming Languages', 'Project Management'].map((subject) => (
                            <Badge key={subject} variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors justify-center py-2 font-medium">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-4">
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 px-8 py-4 rounded-2xl shadow-lg">
                          <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                          <Badge variant="outline" className="text-2xl px-6 py-3 font-bold border-purple-400 text-purple-700 bg-white/50">
                            2024
                          </Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">Graduation Year</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
            
            {/* Enhanced Certifications */}
            <ScrollAnimation animation="fade-up" delay={300}>
              <div>
                <div className="flex items-center justify-center gap-4 mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Professional Certifications
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <Card className="relative overflow-hidden border-2 border-blue-200/50 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 group bg-gradient-to-br from-white via-blue-50/40 to-purple-50/40 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-3xl" />
                    
                    <CardContent className="p-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 px-4 py-2 rounded-full shadow-md">
                          <Star className="w-5 h-5 text-blue-600" />
                          <Badge variant="outline" className="font-bold text-lg">2024</Badge>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white">
                        Python Complete Course For Python Beginners
                      </h4>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <p className="text-blue-600 font-bold text-lg">Udemy Certification</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        Comprehensive certification covering Python fundamentals, object-oriented programming, 
                        data structures, file handling, and practical application development with real-world projects.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {['Python Basics', 'OOP Concepts', 'Data Structures', 'File Handling', 'Error Handling', 'Project Development'].map((skill) => (
                          <Badge key={skill} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 transition-colors justify-center py-1.5">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="relative overflow-hidden border-2 border-purple-200/50 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 group bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-3xl" />
                    
                    <CardContent className="p-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 px-4 py-2 rounded-full shadow-md">
                          <Star className="w-5 h-5 text-purple-600" />
                          <Badge variant="outline" className="font-bold text-lg">2024</Badge>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white">
                        Python Full Stack Development
                      </h4>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <p className="text-purple-600 font-bold text-lg">Intensive Offline Course</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        Advanced full-stack development training covering Django, FastAPI, database integration, 
                        deployment strategies, and production-level application development with industry best practices.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {['Django Framework', 'FastAPI', 'Database Design', 'API Development', 'Deployment', 'Best Practices'].map((skill) => (
                          <Badge key={skill} variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors justify-center py-1.5">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
