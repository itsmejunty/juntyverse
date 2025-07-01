
import React from 'react';
import AboutMeSection from '@/components/AboutMeSection';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, Sparkles, Trophy, Star } from 'lucide-react';

const About = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Enhanced About Me Section */}
      <AboutMeSection />
      
      {/* Enhanced Education & Certifications */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-blue-950/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-20 animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full mb-6">
                  <Sparkles className="w-5 h-5 text-purple-600 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="text-purple-600 font-semibold">Academic Excellence</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Education & Certifications
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Building expertise through continuous learning and professional development
                </p>
              </div>
            </ScrollAnimation>
            
            {/* Enhanced Education */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                
                <Card className="relative overflow-hidden border-2 border-purple-200/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30">
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                          B.Tech in Computer Science
                        </h4>
                        <p className="text-purple-600 font-semibold text-lg mb-4">
                          Mallareddy College of Engineering
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          Comprehensive study of computer science fundamentals including algorithms, 
                          data structures, software engineering, and modern programming languages. 
                          Specialized in full-stack development and emerging technologies.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'].map((skill) => (
                            <Badge key={skill} variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <Badge variant="outline" className="text-lg px-4 py-2 font-semibold border-purple-300 text-purple-700">
                          2024
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
            
            {/* Enhanced Certifications */}
            <ScrollAnimation animation="fade-up" delay={300}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Certifications
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="relative overflow-hidden border-2 border-blue-200/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-3xl" />
                    
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 text-blue-600" />
                          <Badge variant="outline" className="font-semibold">2024</Badge>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                        Python Complete Course For Python Beginners
                      </h4>
                      <p className="text-blue-600 font-semibold mb-3 text-lg">Udemy</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Comprehensive Python programming fundamentals, data structures, and practical applications 
                        with hands-on projects and real-world scenarios.
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {['Python', 'Data Structures', 'OOP', 'Projects'].map((skill) => (
                          <Badge key={skill} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="relative overflow-hidden border-2 border-purple-200/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 group bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-3xl" />
                    
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 text-purple-600" />
                          <Badge variant="outline" className="font-semibold">2024</Badge>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                        Python Full Stack Development
                      </h4>
                      <p className="text-purple-600 font-semibold mb-3 text-lg">Offline Course</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Advanced full-stack development with Python, web frameworks, database integration, 
                        and deployment strategies for production applications.
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {['Django', 'FastAPI', 'Database', 'Deployment'].map((skill) => (
                          <Badge key={skill} variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors">
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
