
import React from 'react';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Star, TrendingUp, Award, Users } from 'lucide-react';

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Weather Dashboard",
      description: "A React-based web app fetching weather data via OpenWeatherMap API to display current conditions and forecasts. Features include location search, 5-day forecast, and responsive design for all device sizes.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1974",
      technologies: ["React", "JavaScript", "CSS", "OpenWeatherMap API"],
      liveUrl: "/demo/weather",
      projectCode: `import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await fetch(
        \`https://api.openweathermap.org/data/2.5/weather?q=\${cityName}&appid=YOUR_API_KEY&units=metric\`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Weather Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={() => fetchWeather(city)} disabled={loading}>
              {loading ? 'Loading...' : 'Search'}
            </Button>
          </div>
          
          {weather && (
            <div className="text-center">
              <h3 className="text-2xl font-bold">{weather.name}</h3>
              <p className="text-4xl">{Math.round(weather.main.temp)}°C</p>
              <p className="text-gray-600">{weather.weather[0].description}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherDashboard;`
    },
    {
      title: "Portfolio Builder",
      description: "An interactive portfolio website builder that helps users create professional portfolio websites. Features real-time preview, theme selection, content management, and code export functionality.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2069",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      liveUrl: "/demo/portfolio",
      projectCode: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  bio: string;
}

const PortfolioBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john@example.com',
    bio: 'Passionate developer with experience in modern web technologies.'
  });

  const [skills] = useState(['React', 'TypeScript', 'Node.js', 'Python']);
  const [previewMode, setPreviewMode] = useState(false);

  if (previewMode) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Button onClick={() => setPreviewMode(false)} className="mb-4">
          Exit Preview
        </Button>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{personalInfo.title}</p>
          <p className="text-gray-700">{personalInfo.bio}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Builder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
          />
          <Input
            placeholder="Professional Title"
            value={personalInfo.title}
            onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})}
          />
          <Textarea
            placeholder="Bio"
            value={personalInfo.bio}
            onChange={(e) => setPersonalInfo({...personalInfo, bio: e.target.value})}
          />
          <Button onClick={() => setPreviewMode(true)} className="w-full">
            Preview Portfolio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioBuilder;`
    },
    {
      title: "Task Management App",
      description: "A full-stack application for managing tasks and projects. Features include task creation, assignment, status tracking, and team collaboration tools.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=2070",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "/demo/tasks",
      projectCode: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2 } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const TaskManagement = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Design homepage', completed: false, priority: 'high' },
    { id: '2', title: 'Set up database', completed: true, priority: 'medium' },
    { id: '3', title: 'Write documentation', completed: false, priority: 'low' }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
        priority: 'medium'
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Task Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Add new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <Button onClick={addTask}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center gap-2 p-3 border rounded-lg">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                />
                <span className={\`flex-1 \${task.completed ? 'line-through text-gray-500' : ''}\`}>
                  {task.title}
                </span>
                <Badge className={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskManagement;`
    },
    {
      title: "E-commerce Store",
      description: "A fictional e-commerce platform with product listings, shopping cart, and checkout process. Integrated with mock payment processing and order management.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2070",
      technologies: ["React", "Redux", "CSS", "Firebase"],
      liveUrl: "/demo/ecommerce",
      projectCode: `import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const EcommerceStore = () => {
  const [products] = useState<Product[]>([
    { id: '1', name: 'Laptop', price: 999, image: '/api/placeholder/200/200', category: 'Electronics' },
    { id: '2', name: 'Headphones', price: 199, image: '/api/placeholder/200/200', category: 'Electronics' },
    { id: '3', name: 'Coffee Mug', price: 19, image: '/api/placeholder/200/200', category: 'Home' }
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: string, change: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (showCart) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Shopping Cart</CardTitle>
            <Button variant="outline" onClick={() => setShowCart(false)}>
              Back to Store
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">\${item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-3">{item.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Total: \${getTotalPrice()}</span>
                  </div>
                  <Button className="w-full">Checkout</Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">E-commerce Store</h1>
        <Button onClick={() => setShowCart(true)} className="relative">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart ({cart.length})
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="font-semibold">{product.name}</h3>
                <Badge variant="secondary">{product.category}</Badge>
                <p className="text-2xl font-bold">\${product.price}</p>
                <Button onClick={() => addToCart(product)} className="w-full">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EcommerceStore;`
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Featured Work</span>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                My Projects
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                A curated collection of my recent work showcasing different technologies, design patterns, and problem-solving approaches. Each project represents unique challenges and innovative solutions.
              </p>
            </ScrollAnimation>

            {/* Stats Section */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">4+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Live Projects</p>
                </div>
                
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-accent" />
                    <span className="text-2xl font-bold text-accent">1000+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Users Reached</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">10+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Technologies Used</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation 
                key={project.title} 
                animation="fade-up" 
                delay={100 + index * 150}
              >
                <div className="bg-background/95 rounded-2xl p-1 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="bg-gradient-to-br from-background to-secondary/30 rounded-xl overflow-hidden">
                    <ProjectCard {...project} />
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollAnimation animation="fade-up" delay={800} className="text-center mt-16">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm always excited to collaborate on new projects and bring innovative ideas to life.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform duration-300"
              >
                Get In Touch
                <Star className="w-4 h-4" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </main>
  );
};

export default Projects;
