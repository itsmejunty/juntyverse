
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Check, Trash2, Clock, User, Search, Filter, Calendar, Star, Users, Target, Zap } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'completed';
  assignee: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  dueDate?: string;
  category: string;
  tags: string[];
  progress: number;
  createdAt: string;
}

const TaskDemo = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { 
      id: 1, 
      title: 'Design homepage mockup', 
      description: 'Create responsive design mockups for the new homepage with modern UI elements',
      status: 'completed', 
      assignee: 'John Doe', 
      priority: 'high',
      dueDate: '2024-12-15',
      category: 'Design',
      tags: ['UI/UX', 'Frontend'],
      progress: 100,
      createdAt: '2024-12-01'
    },
    { 
      id: 2, 
      title: 'Implement user authentication', 
      description: 'Set up secure login/logout functionality with JWT tokens',
      status: 'in-progress', 
      assignee: 'Jane Smith', 
      priority: 'urgent',
      dueDate: '2024-12-20',
      category: 'Backend',
      tags: ['Security', 'API'],
      progress: 60,
      createdAt: '2024-12-03'
    },
    { 
      id: 3, 
      title: 'Write API documentation', 
      description: 'Comprehensive documentation for all REST API endpoints',
      status: 'todo', 
      assignee: 'Mike Johnson', 
      priority: 'medium',
      dueDate: '2024-12-25',
      category: 'Documentation',
      tags: ['API', 'Docs'],
      progress: 0,
      createdAt: '2024-12-05'
    },
    { 
      id: 4, 
      title: 'Setup deployment pipeline', 
      description: 'Configure CI/CD pipeline for automated deployment',
      status: 'todo', 
      assignee: 'Sarah Wilson', 
      priority: 'low',
      dueDate: '2024-12-30',
      category: 'DevOps',
      tags: ['CI/CD', 'Infrastructure'],
      progress: 0,
      createdAt: '2024-12-06'
    }
  ]);

  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newAssignee, setNewAssignee] = useState('');
  const [newPriority, setNewPriority] = useState<Task['priority']>('medium');
  const [newCategory, setNewCategory] = useState('General');
  const [newDueDate, setNewDueDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterAssignee, setFilterAssignee] = useState('all');

  // Filter tasks based on search and filters
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
      const matchesAssignee = filterAssignee === 'all' || task.assignee === filterAssignee;
      
      return matchesSearch && matchesPriority && matchesAssignee;
    });
  }, [tasks, searchTerm, filterPriority, filterAssignee]);

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        title: newTask,
        description: newDescription || undefined,
        status: 'todo',
        assignee: newAssignee || 'Unassigned',
        priority: newPriority,
        dueDate: newDueDate || undefined,
        category: newCategory,
        tags: [],
        progress: 0,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setNewDescription('');
      setNewAssignee('');
      setNewPriority('medium');
      setNewCategory('General');
      setNewDueDate('');
    }
  };

  const updateTaskStatus = (id: number, status: Task['status']) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const progress = status === 'completed' ? 100 : status === 'in-progress' ? 50 : 0;
        return { ...task, status, progress };
      }
      return task;
    }));
  };

  const updateTaskProgress = (id: number, progress: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        let status: Task['status'] = 'todo';
        if (progress === 100) status = 'completed';
        else if (progress > 0) status = 'in-progress';
        return { ...task, progress, status };
      }
      return task;
    }));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500 text-white animate-pulse';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Design': 'bg-purple-100 text-purple-800',
      'Backend': 'bg-indigo-100 text-indigo-800',
      'Frontend': 'bg-cyan-100 text-cyan-800',
      'Documentation': 'bg-amber-100 text-amber-800',
      'DevOps': 'bg-pink-100 text-pink-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.General;
  };

  const todoTasks = filteredTasks.filter(task => task.status === 'todo');
  const inProgressTasks = filteredTasks.filter(task => task.status === 'in-progress');
  const completedTasks = filteredTasks.filter(task => task.status === 'completed');

  const uniqueAssignees = [...new Set(tasks.map(task => task.assignee))];

  const isOverdue = (dueDate?: string) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  };

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with Stats */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-gradient-purple">Task Management Hub</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline your workflow with powerful task management features
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="glass-effect hover-lift">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    <span className="text-2xl font-bold text-purple-600">{tasks.length}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Total Tasks</p>
                </CardContent>
              </Card>
              <Card className="glass-effect hover-lift">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-2xl font-bold text-blue-600">{inProgressTasks.length}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </CardContent>
              </Card>
              <Card className="glass-effect hover-lift">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span className="text-2xl font-bold text-emerald-600">{completedTasks.length}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
              <Card className="glass-effect hover-lift">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-2xl font-bold text-orange-600">{uniqueAssignees.length}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Search and Filters */}
          <Card className="mb-8 glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search & Filter Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search tasks, descriptions, assignees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterPriority} onValueChange={setFilterPriority}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterAssignee} onValueChange={setFilterAssignee}>
                  <SelectTrigger>
                    <User className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by Assignee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Assignees</SelectItem>
                    {uniqueAssignees.map(assignee => (
                      <SelectItem key={assignee} value={assignee}>{assignee}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setFilterPriority('all');
                    setFilterAssignee('all');
                  }}
                  variant="outline"
                  className="hover:bg-purple-50"
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Enhanced Add New Task Form */}
          <Card className="mb-8 glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create New Task
              </CardTitle>
              <CardDescription>
                Add a new task with detailed information and assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <Input
                  placeholder="Task title..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="col-span-1 md:col-span-2"
                />
                <Input
                  placeholder="Assignee..."
                  value={newAssignee}
                  onChange={(e) => setNewAssignee(e.target.value)}
                />
                <Select value={newPriority} onValueChange={(value: Task['priority']) => setNewPriority(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">🔴 Urgent</SelectItem>
                    <SelectItem value="high">🟠 High</SelectItem>
                    <SelectItem value="medium">🟡 Medium</SelectItem>
                    <SelectItem value="low">🟢 Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Input
                  placeholder="Task description..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="md:col-span-2"
                />
                <Input
                  type="date"
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                  className="col-span-1"
                />
              </div>
              <div className="flex gap-4">
                <Select value={newCategory} onValueChange={setNewCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Design">🎨 Design</SelectItem>
                    <SelectItem value="Backend">⚙️ Backend</SelectItem>
                    <SelectItem value="Frontend">💻 Frontend</SelectItem>
                    <SelectItem value="Documentation">📚 Documentation</SelectItem>
                    <SelectItem value="DevOps">🚀 DevOps</SelectItem>
                    <SelectItem value="General">📋 General</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={addTask} 
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:scale-105 transition-all duration-300"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Task Board with improved animations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* To Do Column */}
            <Card className="glass-effect">
              <CardHeader className="bg-gradient-to-r from-slate-500 to-slate-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  To Do ({todoTasks.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6 min-h-[400px]">
                {todoTasks.map((task, index) => (
                  <div 
                    key={task.id} 
                    className="p-4 bg-gradient-to-br from-white to-slate-50 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{task.title}</h3>
                      {task.dueDate && isOverdue(task.dueDate) && (
                        <Badge className="bg-red-500 text-white animate-pulse">
                          Overdue
                        </Badge>
                      )}
                    </div>
                    {task.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{task.description}</p>
                    )}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge className={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {task.assignee}
                      </Badge>
                      {task.dueDate && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {task.dueDate}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => updateTaskStatus(task.id, 'in-progress')}
                        className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-200"
                      >
                        <Zap className="w-4 h-4 mr-1" />
                        Start
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => deleteTask(task.id)}
                        className="hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* In Progress Column */}
            <Card className="glass-effect">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  In Progress ({inProgressTasks.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6 min-h-[400px]">
                {inProgressTasks.map((task, index) => (
                  <div 
                    key={task.id} 
                    className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{task.title}</h3>
                      {task.dueDate && isOverdue(task.dueDate) && (
                        <Badge className="bg-red-500 text-white animate-pulse">
                          Overdue
                        </Badge>
                      )}
                    </div>
                    {task.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{task.description}</p>
                    )}
                    
                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge className={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {task.assignee}
                      </Badge>
                      {task.dueDate && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {task.dueDate}
                        </Badge>
                      )}
                    </div>

                    {/* Progress Controls */}
                    <div className="flex gap-1 mb-3">
                      {[25, 50, 75, 100].map(progress => (
                        <Button
                          key={progress}
                          size="sm"
                          variant={task.progress >= progress ? "default" : "outline"}
                          onClick={() => updateTaskProgress(task.id, progress)}
                          className="text-xs flex-1 hover:scale-105 transition-all duration-200"
                        >
                          {progress}%
                        </Button>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => updateTaskStatus(task.id, 'completed')}
                        className="bg-emerald-500 hover:bg-emerald-600 hover:scale-105 transition-all duration-200"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Complete
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => deleteTask(task.id)}
                        className="hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Completed Column */}
            <Card className="glass-effect">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Completed ({completedTasks.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6 min-h-[400px]">
                {completedTasks.map((task, index) => (
                  <div 
                    key={task.id} 
                    className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in opacity-80"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg line-through text-muted-foreground">{task.title}</h3>
                      <Badge className="bg-emerald-500 text-white">
                        <Check className="w-3 h-3 mr-1" />
                        Done
                      </Badge>
                    </div>
                    {task.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 line-through">{task.description}</p>
                    )}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge className={getCategoryColor(task.category)}>
                        {task.category}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {task.assignee}
                      </Badge>
                      {task.dueDate && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {task.dueDate}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Completion celebration */}
                    <div className="text-center py-2">
                      <Star className="w-6 h-6 text-yellow-500 mx-auto animate-pulse" />
                      <p className="text-xs text-emerald-600 font-medium">Task Completed! 🎉</p>
                    </div>

                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => deleteTask(task.id)}
                      className="w-full hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Task
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskDemo;
