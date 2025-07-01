
import React from 'react';
import { Star, Quote, Users, Code, CheckCircle, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from './ScrollAnimation';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer",
    company: "TechCorp Solutions",
    content: "Jadidya's attention to detail and problem-solving skills are exceptional. The React components he built were clean, reusable, and performed flawlessly across all devices.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    company: "Digital Innovations",
    content: "Working with Jadidya was a pleasure. He delivered high-quality code on time and was always proactive in suggesting improvements. His Node.js backend solutions were robust and scalable.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Tech Lead",
    company: "StartupHub",
    content: "Jadidya quickly understood our requirements and delivered beyond expectations. His full-stack expertise helped us launch our MVP 2 weeks ahead of schedule.",
    rating: 5,
    avatar: "ER"
  }
];

const metrics: Metric[] = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    value: "12+",
    label: "Projects Completed",
    description: "Successfully delivered web applications"
  },
  {
    icon: <Code className="w-6 h-6" />,
    value: "15k+",
    label: "Lines of Code",
    description: "Clean, maintainable code written"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "8+",
    label: "Happy Clients",
    description: "Satisfied clients and collaborators"
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "100%",
    label: "Success Rate",
    description: "Projects delivered on time"
  }
];

const TestimonialsMetrics = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/50 via-white to-violet-50/30 dark:from-gray-900/50 dark:via-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        {/* Metrics Section */}
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Impact & <span className="text-gradient-purple">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect my commitment to delivering quality solutions
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {metrics.map((metric, index) => (
              <ScrollAnimation key={metric.label} animation="scale-up" delay={300 + index * 100}>
                <Card className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-purple-200/50 dark:border-purple-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="text-purple-600 dark:text-purple-400 mb-3 flex justify-center">
                      {metric.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>

        {/* Testimonials Section */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Others <span className="text-gradient-purple">Say</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Testimonials from colleagues, mentors, and clients I've worked with
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={testimonial.name} animation="fade-up" delay={500 + index * 150}>
              <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-purple-200/50 dark:border-purple-800/50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-purple-300 dark:hover:border-purple-600">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4 opacity-60" />
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Ready to work together?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Let's Connect
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsMetrics;
