
import React from 'react';
import { Calendar, Clock, User, ArrowRight, Code, BookOpen, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '@/components/ScrollAnimation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization: 5 Key Strategies I Learned',
    excerpt: 'Discover the performance optimization techniques that helped me reduce loading times by 40% in my recent projects.',
    content: `# React Performance Optimization: 5 Key Strategies I Learned

After working on several React projects, I've discovered some game-changing performance optimization techniques that significantly improved my applications' speed and user experience.

## 1. Implementing React.memo and useMemo Strategically

One of the biggest wins came from properly implementing React.memo for components that receive the same props frequently:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data, config }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveCalculation(item));
  }, [data]);

  return <div>{/* render processedData */}</div>;
});
\`\`\`

## 2. Code Splitting with React.lazy

Implementing route-based code splitting reduced my initial bundle size by 60%:

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Key Takeaways

- Always measure before optimizing
- Focus on the biggest bottlenecks first
- User experience should drive optimization decisions

These strategies helped me achieve a 40% improvement in loading times across my projects.`,
    date: '2024-06-15',
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'Performance', 'Optimization'],
    featured: true
  },
  {
    id: 'nodejs-api-best-practices',
    title: 'Node.js API Development: Lessons from Building Scalable Backends',
    excerpt: 'Best practices and patterns I discovered while building RESTful APIs that handle thousands of requests.',
    content: `# Node.js API Development: Lessons from Building Scalable Backends

Building scalable Node.js APIs taught me valuable lessons about architecture, error handling, and performance optimization.

## 1. Error Handling Strategy

Centralized error handling made debugging much easier:

\`\`\`javascript
// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  res.status(500).json({ error: 'Something went wrong!' });
};

app.use(errorHandler);
\`\`\`

## 2. Request Validation with Joi

Input validation prevented many security issues:

\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
\`\`\`

## Results

These practices helped me build APIs that consistently handle 1000+ concurrent requests with 99.9% uptime.`,
    date: '2024-06-08',
    readTime: '6 min read',
    category: 'Backend',
    tags: ['Node.js', 'API', 'Backend', 'Best Practices']
  },
  {
    id: 'responsive-design-mastery',
    title: 'Mastering Responsive Design with Tailwind CSS',
    excerpt: 'How I create pixel-perfect responsive designs that work seamlessly across all devices using Tailwind CSS.',
    content: `# Mastering Responsive Design with Tailwind CSS

Creating responsive designs that work perfectly across all devices was challenging until I mastered these Tailwind CSS techniques.

## Mobile-First Approach

Starting with mobile design and scaling up proved more effective:

\`\`\`jsx
<div className="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
  xl:grid-cols-4
">
  {/* Grid items */}
</div>
\`\`\`

## Custom Breakpoints

Sometimes default breakpoints aren't enough:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}
\`\`\`

## Results

These techniques helped me create designs that look perfect on every device, reducing user bounce rates by 25%.`,
    date: '2024-05-28',
    readTime: '5 min read',
    category: 'Frontend',
    tags: ['CSS', 'Tailwind', 'Responsive Design', 'UI/UX']
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-white via-purple-50/30 to-violet-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Learning <span className="text-gradient-purple">Journey</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Sharing insights, code walkthroughs, and lessons learned from building modern web applications
            </p>
          </div>
        </ScrollAnimation>

        {/* Featured Post */}
        {featuredPost && (
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                Featured Post
              </Badge>
              <Card className="overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200 dark:border-purple-800">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-3 text-gray-900 dark:text-white">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      {featuredPost.category}
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        )}

        {/* Regular Posts Grid */}
        <ScrollAnimation animation="fade-up" delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post, index) => (
              <ScrollAnimation key={post.id} animation="fade-up" delay={400 + index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl mb-2 text-gray-900 dark:text-white">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>

        {/* Learning Stats */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="mt-20 text-center">
            <div className="flex justify-center items-center gap-3 mb-8">
              <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Continuous Learning
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Technical Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Code Samples Shared</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
                <div className="text-gray-600 dark:text-gray-300">Hours of Learning</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
};

export default Blog;
