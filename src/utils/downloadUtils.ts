
import jsPDF from 'jspdf';

export const downloadResume = async () => {
  try {
    // Check if PDF already exists first
    const response = await fetch('/Jadidya_Resume.pdf', { method: 'HEAD' });
    
    if (response.ok) {
      // If PDF exists, download it
      const link = document.createElement('a');
      link.href = '/Jadidya_Resume.pdf';
      link.download = 'Jadidya_Resume.pdf';
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
      
      return;
    }

    // Generate professional PDF resume
    generateProfessionalPDF();
    
  } catch (error) {
    console.error('Download failed:', error);
    generateProfessionalPDF();
  }
};

const generateProfessionalPDF = () => {
  const doc = new jsPDF();
  
  // Professional color scheme - Navy blue, gray, and white
  const primaryBlue = [34, 67, 120]; // Professional navy blue
  const lightBlue = [70, 130, 180]; // Steel blue for accents
  const darkGray = [64, 64, 64]; // Professional dark gray
  const mediumGray = [102, 102, 102]; // Medium gray for secondary text
  const lightGray = [128, 128, 128]; // Light gray for subtle elements
  
  // Helper function for consistent text styling
  const addText = (text: string, x: number, y: number, options: {
    fontSize?: number;
    fontStyle?: string;
    color?: number[];
    align?: string;
  } = {}) => {
    const { fontSize = 10, fontStyle = 'normal', color = [0, 0, 0], align = 'left' } = options;
    doc.setTextColor(color[0], color[1], color[2]);
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    if (align === 'center') {
      doc.text(text, x, y, { align: 'center' });
    } else {
      doc.text(text, x, y);
    }
  };
  
  // Professional header section
  doc.setFillColor(34, 67, 120);
  doc.rect(0, 0, 210, 45, 'F');
  
  // Name - Large and prominent
  addText('JADIDYA', 105, 20, {
    fontSize: 32,
    fontStyle: 'bold',
    color: [255, 255, 255],
    align: 'center'
  });
  
  // Professional title
  addText('Full-Stack Developer', 105, 32, {
    fontSize: 14,
    fontStyle: 'normal',
    color: [255, 255, 255],
    align: 'center'
  });
  
  // Contact information in header
  addText('juntyhoney2015@gmail.com', 105, 40, {
    fontSize: 10,
    color: [255, 255, 255],
    align: 'center'
  });
  
  let currentY = 55;
  
  // Contact details section
  addText('CONTACT INFORMATION', 20, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  
  // Underline for section headers
  doc.setDrawColor(34, 67, 120);
  doc.setLineWidth(1);
  doc.line(20, currentY + 2, 85, currentY + 2);
  
  currentY += 10;
  addText('Phone: +91-7286820026', 20, currentY, { fontSize: 10, color: darkGray });
  currentY += 5;
  addText('Email: juntyhoney2015@gmail.com', 20, currentY, { fontSize: 10, color: darkGray });
  currentY += 5;
  addText('Location: India', 20, currentY, { fontSize: 10, color: darkGray });
  
  currentY += 15;
  
  // Professional Summary
  addText('PROFESSIONAL SUMMARY', 20, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(20, currentY + 2, 95, currentY + 2);
  
  currentY += 10;
  const summaryText = `Recent B.Tech Computer Science graduate with comprehensive expertise in full-stack web development. 
Proficient in modern technologies including React.js, Node.js, Python, and database management systems. 
Demonstrated ability to develop end-to-end web applications with focus on user experience and performance 
optimization. Strong foundation in software engineering principles with practical project experience.`;
  
  const summaryLines = doc.splitTextToSize(summaryText, 170);
  summaryLines.forEach((line: string, index: number) => {
    addText(line, 20, currentY + (index * 4), { fontSize: 10, color: darkGray });
  });
  currentY += (summaryLines.length * 4) + 10;
  
  // Technical Skills - ATS friendly format
  addText('TECHNICAL SKILLS', 20, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(20, currentY + 2, 70, currentY + 2);
  
  currentY += 10;
  
  const skillCategories = [
    {
      category: 'Programming Languages:',
      skills: 'JavaScript, TypeScript, Python, HTML5, CSS3'
    },
    {
      category: 'Frontend Technologies:',
      skills: 'React.js, Tailwind CSS, Responsive Design, Bootstrap'
    },
    {
      category: 'Backend Technologies:',
      skills: 'Node.js, Express.js, Django, FastAPI, RESTful APIs'
    },
    {
      category: 'Databases:',
      skills: 'MySQL, PostgreSQL, MongoDB, Database Design'
    },
    {
      category: 'Tools & Platforms:',
      skills: 'Git, GitHub, VS Code, Postman, npm, Docker'
    },
    {
      category: 'Cloud & DevOps:',
      skills: 'AWS (Basic), CI/CD Pipelines, Deployment Strategies'
    }
  ];
  
  skillCategories.forEach(skill => {
    addText(skill.category, 20, currentY, { fontSize: 10, fontStyle: 'bold', color: darkGray });
    addText(skill.skills, 20, currentY + 4, { fontSize: 10, color: mediumGray });
    currentY += 10;
  });
  
  currentY += 5;
  
  // Education
  addText('EDUCATION', 20, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(20, currentY + 2, 50, currentY + 2);
  
  currentY += 10;
  addText('Bachelor of Technology - Computer Science Engineering', 20, currentY, {
    fontSize: 11,
    fontStyle: 'bold',
    color: darkGray
  });
  
  addText('2024', 170, currentY, { fontSize: 10, color: mediumGray });
  currentY += 6;
  
  addText('Mallareddy College of Engineering', 20, currentY, {
    fontSize: 10,
    fontStyle: 'italic',
    color: lightBlue
  });
  currentY += 6;
  
  addText('• Specialized in Software Engineering and Full-Stack Development', 25, currentY, {
    fontSize: 9,
    color: mediumGray
  });
  currentY += 4;
  addText('• Strong foundation in Data Structures, Algorithms, and System Design', 25, currentY, {
    fontSize: 9,
    color: mediumGray
  });
  
  currentY += 15;
  
  // Key Projects
  addText('KEY PROJECTS', 20, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(20, currentY + 2, 55, currentY + 2);
  
  currentY += 10;
  
  const projects = [
    {
      name: 'E-commerce Web Application',
      technologies: 'React.js, Node.js, Express.js, MongoDB, Payment Integration',
      description: 'Developed full-stack e-commerce platform with user authentication, product catalog, shopping cart, and secure payment processing. Implemented responsive design and optimized performance.',
      achievements: ['• User authentication and authorization system', '• Real-time inventory management', '• Secure payment gateway integration']
    },
    {
      name: 'Weather Dashboard Application',
      technologies: 'React.js, TypeScript, REST APIs, Tailwind CSS',
      description: 'Built responsive weather application with real-time data fetching, location-based services, and interactive user interface. Integrated third-party weather APIs.',
      achievements: ['• Real-time weather data visualization', '• Location-based weather forecasting', '• Mobile-responsive design implementation']
    },
    {
      name: 'Task Management System',
      technologies: 'React.js, Python, Django, PostgreSQL',
      description: 'Created comprehensive project management tool with task tracking, team collaboration features, and progress monitoring. Implemented CRUD operations and user role management.',
      achievements: ['• Multi-user collaboration system', '• Real-time task updates and notifications', '• Advanced filtering and search functionality']
    }
  ];
  
  projects.forEach(project => {
    addText(project.name, 20, currentY, {
      fontSize: 11,
      fontStyle: 'bold',
      color: darkGray
    });
    currentY += 6;
    
    addText(`Technologies: ${project.technologies}`, 20, currentY, {
      fontSize: 9,
      fontStyle: 'italic',
      color: lightBlue
    });
    currentY += 5;
    
    const descLines = doc.splitTextToSize(project.description, 170);
    descLines.forEach((line: string, index: number) => {
      addText(line, 20, currentY + (index * 4), { fontSize: 9, color: mediumGray });
    });
    currentY += (descLines.length * 4) + 2;
    
    project.achievements.forEach(achievement => {
      addText(achievement, 20, currentY, { fontSize: 9, color: mediumGray });
      currentY += 4;
    });
    currentY += 6;
  });
  
  // Certifications
  addText('CERTIFICATIONS', 20, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(20, currentY + 2, 70, currentY + 2);
  
  currentY += 10;
  
  const certifications = [
    {
      name: 'Python Complete Course For Python Beginners',
      provider: 'Udemy',
      year: '2024',
      description: 'Comprehensive Python programming certification covering fundamentals, OOP, data structures, and practical applications.'
    },
    {
      name: 'Python Full Stack Development',
      provider: 'Professional Training Institute',
      year: '2024',
      description: 'Intensive full-stack development course covering Django, FastAPI, database integration, and deployment strategies.'
    }
  ];
  
  certifications.forEach(cert => {
    addText(cert.name, 20, currentY, {
      fontSize: 10,
      fontStyle: 'bold',
      color: darkGray
    });
    addText(cert.year, 170, currentY, { fontSize: 9, color: mediumGray });
    currentY += 5;
    
    addText(cert.provider, 20, currentY, {
      fontSize: 9,
      fontStyle: 'italic',
      color: lightBlue
    });
    currentY += 5;
    
    addText(cert.description, 20, currentY, { fontSize: 9, color: mediumGray });
    currentY += 8;
  });
  
  // Professional Skills
  currentY += 5;
  addText('CORE COMPETENCIES', 20, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(20, currentY + 2, 80, currentY + 2);
  
  currentY += 10;
  const competencies = [
    'Problem Solving & Analytical Thinking',
    'Full-Stack Web Development',
    'Database Design & Optimization',
    'API Development & Integration',
    'Agile Development Methodology',
    'Version Control & Collaboration',
    'Performance Optimization',
    'Responsive Web Design'
  ];
  
  // Display competencies in two columns
  competencies.forEach((comp, index) => {
    const xPos = index % 2 === 0 ? 20 : 105;
    const yPos = currentY + Math.floor(index / 2) * 5;
    addText(`• ${comp}`, xPos, yPos, { fontSize: 9, color: mediumGray });
  });
  
  // Professional footer
  doc.setFillColor(34, 67, 120);
  doc.rect(0, 285, 210, 12, 'F');
  addText('ATS-Optimized Professional Resume | Ready for Technical Positions', 105, 292, {
    fontSize: 8,
    color: [255, 255, 255],
    align: 'center'
  });
  
  // Save the enhanced professional PDF
  doc.save('Jadidya_Professional_Resume.pdf');
};
