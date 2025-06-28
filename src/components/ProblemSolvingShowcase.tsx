
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScrollAnimation from '@/components/ScrollAnimation';
import ProjectDiscussionModal from '@/components/ProjectDiscussionModal';
import { 
  Brain, 
  Target, 
  Zap, 
  TrendingUp, 
  Clock, 
  Code,
  ArrowRight,
  Lightbulb,
  BarChart3,
  Settings,
  CheckCircle2,
  Award
} from 'lucide-react';

interface ProblemCase {
  id: string;
  title: string;
  category: string;
  challenge: string;
  approach: string[];
  solution: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  timeframe: string;
  complexity: 'High' | 'Medium' | 'Low';
}

const ProblemSolvingShowcase = () => {
  const [selectedCase, setSelectedCase] = useState<string>('performance');

  const problemCases: ProblemCase[] = [
    {
      id: 'performance',
      title: 'E-commerce Performance Crisis',
      category: 'Performance Optimization',
      challenge: 'An e-commerce platform experiencing 80% cart abandonment due to slow page loads (8+ seconds) and frequent crashes during peak traffic, resulting in $50K monthly revenue loss.',
      approach: [
        'Conducted comprehensive performance audit using Lighthouse and custom monitoring tools',
        'Analyzed database queries and identified N+1 query problems affecting load times',
        'Implemented strategic code splitting and lazy loading for critical components',
        'Optimized images with WebP format and responsive loading techniques',
        'Deployed Redis caching layer and CDN distribution network',
        'Enhanced database indexing and query optimization strategies'
      ],
      solution: 'Reduced page load time from 8.2s to 1.4s through systematic optimization: eliminated 70% of unnecessary database calls, implemented intelligent caching strategies, and optimized the critical rendering path.',
      impact: [
        { metric: 'Page Load Time', value: '83% ↓', description: 'From 8.2s to 1.4s' },
        { metric: 'Cart Abandonment', value: '65% ↓', description: 'From 80% to 28%' },
        { metric: 'Revenue Recovery', value: '$42K/month', description: 'Direct impact' },
        { metric: 'User Satisfaction', value: '4.1 → 4.8', description: 'App store rating' }
      ],
      technologies: ['React', 'Node.js', 'Redis', 'PostgreSQL', 'CDN', 'Webpack'],
      timeframe: '2 weeks',
      complexity: 'High'
    },
    {
      id: 'scalability',
      title: 'API Scalability Architecture',
      category: 'System Architecture',
      challenge: 'A rapidly growing SaaS startup\'s API was failing under increased load (10K+ concurrent users), with response times reaching 15+ seconds and frequent 503 errors during peak usage.',
      approach: [
        'Performed comprehensive API bottleneck analysis using advanced profiling tools',
        'Redesigned database schema with proper normalization and optimization',
        'Implemented horizontal scaling architecture with intelligent load balancers',
        'Developed request queuing system for resource-intensive operations',
        'Established comprehensive monitoring and alerting infrastructure',
        'Created automated scaling policies based on real-time traffic patterns'
      ],
      solution: 'Architected a robust microservices-based solution with intelligent load distribution, database optimization, and automated scaling that seamlessly handles 50K+ concurrent users.',
      impact: [
        { metric: 'Concurrent Users', value: '500% ↑', description: 'From 10K to 50K+' },
        { metric: 'Response Time', value: '92% ↓', description: 'From 15s to 1.2s' },
        { metric: 'Uptime', value: '99.9%', description: 'From 94% to 99.9%' },
        { metric: 'Infrastructure Cost', value: '30% ↓', description: 'Through optimization' }
      ],
      technologies: ['Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS', 'Nginx'],
      timeframe: '3 weeks',
      complexity: 'High'
    },
    {
      id: 'automation',
      title: 'Marketing Process Automation',
      category: 'Process Optimization',
      challenge: 'A marketing team spending 20+ hours weekly on manual data entry and report generation, leading to frequent errors, delayed decision-making, and reduced productivity.',
      approach: [
        'Mapped existing manual workflows and identified critical pain points',
        'Designed automated data pipeline connecting multiple marketing APIs',
        'Built custom analytics dashboard with real-time insights and metrics',
        'Implemented robust error handling and data validation systems',
        'Created automated email reports and intelligent alert systems',
        'Provided comprehensive team training and detailed documentation'
      ],
      solution: 'Developed an intelligent automation system that seamlessly connects marketing tools, processes data in real-time, and generates actionable insights automatically.',
      impact: [
        { metric: 'Time Saved', value: '18 hrs/week', description: 'From manual tasks' },
        { metric: 'Data Accuracy', value: '99.2%', description: 'Eliminated human errors' },
        { metric: 'Decision Speed', value: '75% ↑', description: 'Real-time insights' },
        { metric: 'Team Productivity', value: '3x ↑', description: 'Focus on strategy' }
      ],
      technologies: ['Python', 'APIs', 'PostgreSQL', 'React', 'Cron Jobs', 'Docker'],
      timeframe: '1.5 weeks',
      complexity: 'Medium'
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'High': return 'bg-red-50 text-red-700 border-red-200';
      case 'Medium': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Low': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const currentCase = problemCases.find(c => c.id === selectedCase) || problemCases[0];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-10 right-10 opacity-10 animate-float">
        <Brain className="w-20 h-20 text-blue-600" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 animate-bounce">
        <Lightbulb className="w-16 h-16 text-amber-500" />
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full mb-8 shadow-sm">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Problem Solving Excellence</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Systematic Problem Solving
            </h2>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Real-world challenges solved with proven methodologies, data-driven approaches, and measurable business impact. 
              Each solution demonstrates technical excellence and strategic thinking.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Professional Case Selection */}
              <div className="lg:col-span-1">
                <Card className="sticky top-32 bg-white/95 backdrop-blur-sm border-slate-200 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-2 text-slate-800">
                      <Settings className="w-5 h-5 text-blue-600" />
                      Case Studies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {problemCases.map((case_) => (
                      <button
                        key={case_.id}
                        onClick={() => setSelectedCase(case_.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 group ${
                          selectedCase === case_.id
                            ? 'bg-blue-50 border-blue-300 shadow-md'
                            : 'bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-25 hover:shadow-sm'
                        }`}
                      >
                        <div className="font-semibold text-sm text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                          {case_.title}
                        </div>
                        <div className="text-xs text-blue-600 font-medium mb-3">
                          {case_.category}
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge 
                            className={`text-xs font-medium ${getComplexityColor(case_.complexity)}`}
                            variant="outline"
                          >
                            {case_.complexity}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="w-3 h-3" />
                            {case_.timeframe}
                          </div>
                        </div>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Professional Main Content */}
              <div className="lg:col-span-3">
                <Card className="bg-white/95 backdrop-blur-sm border-slate-200 shadow-xl">
                  <CardHeader className="pb-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <CardTitle className="text-3xl text-slate-800 mb-3 font-bold">
                          {currentCase.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-slate-600 font-medium">
                          {currentCase.category}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-3 ml-6">
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {currentCase.timeframe}
                        </Badge>
                        <Badge className={`px-3 py-1 ${getComplexityColor(currentCase.complexity)}`} variant="outline">
                          {currentCase.complexity} Complexity
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Tabs defaultValue="challenge" className="w-full">
                      <TabsList className="grid w-full grid-cols-4 mb-10 bg-slate-100">
                        <TabsTrigger value="challenge" className="flex items-center gap-2 data-[state=active]:bg-white">
                          <Target className="w-4 h-4" />
                          Challenge
                        </TabsTrigger>
                        <TabsTrigger value="approach" className="flex items-center gap-2 data-[state=active]:bg-white">
                          <Brain className="w-4 h-4" />
                          Approach
                        </TabsTrigger>
                        <TabsTrigger value="solution" className="flex items-center gap-2 data-[state=active]:bg-white">
                          <Zap className="w-4 h-4" />
                          Solution
                        </TabsTrigger>
                        <TabsTrigger value="impact" className="flex items-center gap-2 data-[state=active]:bg-white">
                          <BarChart3 className="w-4 h-4" />
                          Impact
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="challenge" className="space-y-6">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                          <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
                            <Target className="w-5 h-5" />
                            Business Challenge
                          </h3>
                          <p className="text-red-700 leading-relaxed text-base">
                            {currentCase.challenge}
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="approach" className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                          <h3 className="font-bold text-blue-800 mb-6 flex items-center gap-2 text-lg">
                            <Brain className="w-5 h-5" />
                            Strategic Approach
                          </h3>
                          <div className="space-y-4">
                            {currentCase.approach.map((step, index) => (
                              <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                  {index + 1}
                                </div>
                                <p className="text-blue-700 leading-relaxed text-base pt-1">
                                  {step}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="solution" className="space-y-6">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                          <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
                            <Zap className="w-5 h-5" />
                            Implemented Solution
                          </h3>
                          <p className="text-green-700 leading-relaxed mb-6 text-base">
                            {currentCase.solution}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {currentCase.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
                                <Code className="w-3 h-3 mr-1" />
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="impact" className="space-y-6">
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                          <h3 className="font-bold text-purple-800 mb-6 flex items-center gap-2 text-lg">
                            <TrendingUp className="w-5 h-5" />
                            Measurable Business Impact
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {currentCase.impact.map((metric, index) => (
                              <div key={index} className="bg-white rounded-xl p-6 border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-bold text-purple-600 mb-2">
                                  {metric.value}
                                </div>
                                <div className="font-semibold text-slate-800 mb-2">
                                  {metric.metric}
                                </div>
                                <div className="text-sm text-slate-600">
                                  {metric.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>

          {/* Professional CTA Section */}
          <ScrollAnimation animation="fade-up" delay={400} className="text-center mt-20">
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-12 border border-slate-200 shadow-xl max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-3xl font-bold text-slate-800">
                  Ready to Solve Your Challenge?
                </h3>
              </div>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                I bring systematic thinking, proven methodologies, and measurable results to every problem. 
                Let's discuss how I can help transform your challenges into opportunities.
              </p>
              <ProjectDiscussionModal>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                  Let's Discuss Your Project
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </ProjectDiscussionModal>
              <p className="text-sm text-slate-500 mt-4">
                Free consultation • Response within 24 hours • No obligation
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingShowcase;
