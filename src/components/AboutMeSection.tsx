
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Calendar, Heart, Code, Briefcase } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import ResumeDownload from './ResumeDownload';

const AboutMeSection = () => {
  const personalTraits = [
    "Problem Solver", "Team Player", "Quick Learner", "Detail-Oriented"
  ];

  const interests = [
    "Gaming", "Fitness", "Technology Trends", "Continuous Learning"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient-purple">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollAnimation animation="fade-up" delay={200}>
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">My Story</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Hello! I'm <strong className="text-foreground">Jadidya</strong>, a passionate full-stack developer who recently graduated with a B.Tech in Computer Science. 
                      My journey into programming started with curiosity about how websites work, and it quickly became my greatest passion.
                    </p>
                    
                    <p>
                      I specialize in creating modern, responsive web applications using <strong className="text-foreground">React</strong> and <strong className="text-foreground">Node.js</strong>. 
                      What drives me is the challenge of turning complex problems into elegant, user-friendly solutions that make a real difference.
                    </p>
                    
                    <p>
                      When I'm not coding, you'll find me staying active through fitness, exploring new technologies, or enjoying gaming sessions that help me unwind and think creatively.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Professional Goals</h3>
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p><strong className="text-foreground">Short-term:</strong> Join a collaborative development team to build impactful applications while continuously learning and growing my technical skills.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p><strong className="text-foreground">Long-term:</strong> Evolve into a senior developer or technical lead role with deep expertise in system design, architecture, and DevOps practices.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <ScrollAnimation animation="fade-up" delay={400}>
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Quick Facts</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">B.Tech Graduate 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Full-Stack Developer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Problem Solving Enthusiast</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={500}>
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Personality</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {personalTraits.map((trait) => (
                      <Badge 
                        key={trait} 
                        variant="secondary" 
                        className="hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Interests</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge 
                        key={interest} 
                        variant="outline" 
                        className="hover:bg-accent/20 transition-colors cursor-default"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
        
        {/* Resume Download Section */}
        <div className="max-w-2xl mx-auto mt-12">
          <ResumeDownload />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
