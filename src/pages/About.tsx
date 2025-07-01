
import React from 'react';
import AboutMeSection from '@/components/AboutMeSection';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Enhanced About Me Section */}
      <AboutMeSection />
      
      {/* Education & Certifications */}
      <section className="py-16 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Education & <span className="text-gradient-purple">Certifications</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  My academic journey and professional development
                </p>
              </div>
            </ScrollAnimation>
            
            {/* Education */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education
                </h3>
                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">B.Tech in Computer Science</h4>
                        <p className="text-primary font-medium mb-2">Mallareddy College of Engineering</p>
                        <p className="text-muted-foreground">
                          Comprehensive study of computer science fundamentals including algorithms, 
                          data structures, software engineering, and modern programming languages.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <Badge variant="outline" className="text-lg px-3 py-1">2024</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
            
            {/* Certifications */}
            <ScrollAnimation animation="fade-up" delay={300}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline">2024</Badge>
                      </div>
                      <h4 className="font-semibold mb-2">Python Complete Course For Python Beginners</h4>
                      <p className="text-sm text-primary mb-2">Udemy</p>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive Python programming fundamentals, data structures, and practical applications.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline">2024</Badge>
                      </div>
                      <h4 className="font-semibold mb-2">Python Full Stack Development</h4>
                      <p className="text-sm text-accent mb-2">Offline Course</p>
                      <p className="text-sm text-muted-foreground">
                        Advanced full-stack development with Python, web frameworks, and database integration.
                      </p>
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
