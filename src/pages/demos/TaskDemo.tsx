
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Check, Trash2, Clock, User } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'completed';
  assignee: string;
  priority: 'low' | 'medium' | 'high';
}

const TaskDemo = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Design homepage mockup', status: 'completed', assignee: 'John Doe', priority: 'high' },
    { id: 2, title: 'Implement user authentication', status: 'in-progress', assignee: 'Jane Smith', priority: 'high' },
    { id: 3, title: 'Write API documentation', status: 'todo', assignee: 'Mike Johnson', priority: 'medium' },
    { id: 4, title: 'Setup deployment pipeline', status: 'todo', assignee: 'Sarah Wilson', priority: 'low' }
  ]);

  const [newTask, setNewTask] = useState('');
  const [newAssignee, setNewAssignee] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        title: newTask,
        status: 'todo',
        assignee: newAssignee || 'Unassigned',
        priority: 'medium'
      }]);
      setNewTask('');
      setNewAssignee('');
    }
  };

  const updateTaskStatus = (id: number, status: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Task Management Dashboard</h1>
          
          {/* Add New Task */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Task
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Task title..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="flex-1"
                />
                <Input
                  placeholder="Assignee..."
                  value={newAssignee}
                  onChange={(e) => setNewAssignee(e.target.value)}
                  className="w-48"
                />
                <Button onClick={addTask} className="bg-purple-500 hover:bg-purple-600">
                  Add Task
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Task Board */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* To Do Column */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  To Do ({todoTasks.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todoTasks.map(task => (
                  <div key={task.id} className="p-4 bg-gray-50 rounded-lg border">
                    <h3 className="font-semibold mb-2">{task.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {task.assignee}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => updateTaskStatus(task.id, 'in-progress')}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        Start
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => deleteTask(task.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* In Progress Column */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  In Progress ({inProgressTasks.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {inProgressTasks.map(task => (
                  <div key={task.id} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold mb-2">{task.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {task.assignee}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => updateTaskStatus(task.id, 'completed')}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        <Check className="w-4 h-4" />
                        Complete
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => deleteTask(task.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Completed Column */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Completed ({completedTasks.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedTasks.map(task => (
                  <div key={task.id} className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold mb-2 line-through text-gray-600">{task.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {task.assignee}
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => deleteTask(task.id)}
                    >
                      <Trash2 className="w-4 h-4" />
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
