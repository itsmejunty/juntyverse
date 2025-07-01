
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, ExternalLink, Code, Lightbulb, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectDetails {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  context: string;
  process: string[];
  outcome: string[];
  challenges: string[];
  learnings: string[];
}

interface CollapsibleProjectDetailsProps {
  project: ProjectDetails;
}

const CollapsibleProjectDetails = ({ project }: CollapsibleProjectDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{project.title}</span>
          {project.liveUrl && (
            <Link to={project.liveUrl}>
              <Button size="sm" variant="outline" className="hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </Button>
            </Link>
          )}
        </CardTitle>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="hover:bg-primary/20 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between hover:bg-primary/10 transition-colors">
              <span className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                View Project Details
              </span>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 mt-4 animate-accordion-down">
            {/* Context */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Context & Goals
              </h4>
              <p className="text-sm text-muted-foreground">{project.context}</p>
            </div>
            
            {/* Process */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                Development Process
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Challenges */}
            {project.challenges.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  Key Challenges
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Outcomes */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-green-500" />
                Results & Impact
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {project.outcome.map((result, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Learnings */}
            {project.learnings.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-500" />
                  Key Learnings
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default CollapsibleProjectDetails;
