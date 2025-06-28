
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Brain, 
  Target, 
  Zap, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Users, 
  Code,
  ArrowRight,
  Lightbulb,
  BarChart3,
  Settings
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
      title: 'E-commerce Site Performance Crisis',
      category: 'Performance Optimization',
      challenge: 'An e-commerce platform was experiencing 80% cart abandonment due to slow page loads (8+ seconds) and frequent crashes during peak traffic, resulting in $50K monthly revenue loss.',
      approach: [
        'Conducted comprehensive performance audit using Lighthouse and custom monitoring',
        'Analyzed database queries and identified N+1 query problems',
        'Implemented code splitting and lazy loading for critical components',
        'Optimized images with WebP format and responsive loading',
        'Set up Redis caching layer and CDN distribution',
        'Implemented database indexing and query optimization'
      ],
      solution: 'Reduced page load time from 8.2s to 1.4s through systematic optimization: eliminated 70% of unnecessary database calls, implemented smart caching strategies, and optimized the critical rendering path.',
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
      title: 'API Scalability for Growing Startup',
      category: 'System Architecture',
      challenge: 'A rapidly growing SaaS startup\'s API was failing under increased load (10K+ concurrent users), with response times reaching 15+ seconds and frequent 503 errors.',
      approach: [
        'Analyzed API bottlenecks using performance profiling tools',
        'Redesigned database schema with proper normalization',
        'Implemented horizontal scaling with load balancers',
        'Added request queuing system for resource-intensive operations',
        'Set up monitoring and alerting systems',
        'Created automated scaling policies based on traffic patterns'
      ],
      solution: 'Architected a microservices-based solution with intelligent load distribution, database optimization, and automated scaling that handles 50K+ concurrent users seamlessly.',
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
      title: 'Manual Process Automation',
      category: 'Process Optimization',
      challenge: 'A marketing team was spending 20+ hours weekly on manual data entry and report generation, leading to frequent errors and delayed decision-making.',
      approach: [
        'Mapped existing manual workflows and identified pain points',
        'Designed automated data pipeline connecting multiple APIs',
        'Built custom dashboard with real-time analytics',
        'Implemented error handling and data validation',
        'Created automated email reports and alerts',
        'Provided team training and documentation'
      ],
      solution: 'Developed an intelligent automation system that connects marketing tools, processes data in real-time, and generates actionable insights automatically.',
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
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const currentCase = problemCases.find(c => c.id === selectedCase) || problemCases[0];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 opacity-20 animate-float">
        <Brain className="w-16 h-16 text-purple-600" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-20 animate-bounce">
        <Lightbulb className="w-12 h-12 text-amber-500" />
      </div>

      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Problem Solving Excellence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              How I Solve Complex Problems
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real-world challenges I've tackled with systematic approaches, measurable results, and efficient solutions that drive business impact.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Case Selection Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-32 bg-white/80 backdrop-blur-sm border-purple-200/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Settings className="w-5 h-5 text-purple-600" />
                      Case Studies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {problemCases.map((case_) => (
                      <button
                        key={case_.id}
                        onClick={() => setSelectedCase(case_.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 border-2 ${
                          selectedCase === case_.id
                            ? 'bg-purple-50 border-purple-300 shadow-md'
                            : 'bg-white/50 border-gray-200 hover:border-purple-200 hover:bg-purple-25'
                        }`}
                      >
                        <div className="font-medium text-sm text-gray-800 mb-1">
                          {case_.title}
                        </div>
                        <div className="text-xs text-purple-600 font-medium">
                          {case_.category}
                        </div>
                        <Badge 
                          className={`mt-2 text-xs ${getComplexityColor(case_.complexity)}`}
                          variant="outline"
                        >
                          {case_.complexity} Complexity
                        </Badge>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="bg-white/90 backdrop-blur-sm border-purple-200/50 shadow-xl">
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl text-gray-800 mb-2">
                          {currentCase.title}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600">
                          {currentCase.category}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                          <Clock className="w-3 h-3 mr-1" />
                          {currentCase.timeframe}
                        </Badge>
                        <Badge className={getComplexityColor(currentCase.complexity)} variant="outline">
                          {currentCase.complexity}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Tabs defaultValue="challenge" className="w-full">
                      <TabsList className="grid w-full grid-cols-4 mb-8">
                        <TabsTrigger value="challenge" className="flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Challenge
                        </TabsTrigger>
                        <TabsTrigger value="approach" className="flex items-center gap-2">
                          <Brain className="w-4 h-4" />
                          Approach
                        </TabsTrigger>
                        <TabsTrigger value="solution" className="flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Solution
                        </TabsTrigger>
                        <TabsTrigger value="impact" className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4" />
                          Impact
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="challenge" className="space-y-4">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                          <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5" />
                            The Problem
                          </h3>
                          <p className="text-red-700 leading-relaxed">
                            {currentCase.challenge}
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="approach" className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                            <Brain className="w-5 h-5" />
                            My Systematic Approach
                          </h3>
                          <div className="space-y-3">
                            {currentCase.approach.map((step, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                  {index + 1}
                                </div>
                                <p className="text-blue-700 leading-relaxed">
                                  {step}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="solution" className="space-y-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                          <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            The Solution
                          </h3>
                          <p className="text-green-700 leading-relaxed mb-4">
                            {currentCase.solution}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {currentCase.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                                <Code className="w-3 h-3 mr-1" />
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="impact" className="space-y-4">
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                          <h3 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Measurable Impact
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentCase.impact.map((metric, index) => (
                              <div key={index} className="bg-white rounded-lg p-4 border border-purple-200">
                                <div className="text-2xl font-bold text-purple-600 mb-1">
                                  {metric.value}
                                </div>
                                <div className="font-medium text-gray-800 mb-1">
                                  {metric.metric}
                                </div>
                                <div className="text-sm text-gray-600">
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

          {/* Call to Action */}
          <ScrollAnimation animation="fade-up" delay={400} className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Ready to Solve Your Next Challenge?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I bring systematic thinking, proven methodologies, and measurable results to every problem I tackle.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                Let's Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvingShowcase;
