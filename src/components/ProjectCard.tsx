
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowUpRight, Code, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  projectCode?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, projectCode }: ProjectCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleLiveDemoClick = (e: React.MouseEvent) => {
    if (liveUrl?.startsWith('http')) {
      e.preventDefault();
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyCode = () => {
    if (projectCode) {
      navigator.clipboard.writeText(projectCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className="overflow-hidden border border-border/40 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground">
              {tech}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        {projectCode && (
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="transition-all duration-200 hover:scale-105 cursor-pointer"
                type="button"
              >
                <Code className="h-4 w-4 mr-1" />
                Project Code
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span>{title} - Project Code</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCode}
                    className="transition-all duration-200 hover:scale-105"
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    {copied ? 'Copied!' : 'Copy Code'}
                  </Button>
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[60vh] w-full">
                <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{projectCode}</code>
                </pre>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        )}
        {liveUrl && (
          liveUrl.startsWith('http') ? (
            <Button 
              size="sm" 
              className="group transition-all duration-200 hover:scale-105"
              onClick={handleLiveDemoClick}
              type="button"
            >
              Live Demo
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          ) : (
            <Link to={liveUrl}>
              <Button size="sm" className="group transition-all duration-200 hover:scale-105">
                Live Demo
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          )
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
