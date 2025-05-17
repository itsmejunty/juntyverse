
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => {
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
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              GitHub
            </Button>
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="group">
              Live Demo
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
