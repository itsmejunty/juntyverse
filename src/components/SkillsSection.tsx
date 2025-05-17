
import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div 
            key={skill} 
            className="px-4 py-2 bg-secondary rounded-md text-secondary-foreground transition-all hover:bg-primary/10 hover:text-primary"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillsData = [
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Django", "Express.js"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Figma", "npm"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Time Management", "Communication"]
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
