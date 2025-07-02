
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

    // Generate comprehensive professional PDF resume
    generateComprehensivePDF();
    
  } catch (error) {
    console.error('Download failed:', error);
    generateComprehensivePDF();
  }
};

const generateComprehensivePDF = () => {
  const doc = new jsPDF();
  
  // Page dimensions and margins
  const pageWidth = 210;
  const pageHeight = 297;
  const leftMargin = 20;
  const rightMargin = 190;
  const centerX = pageWidth / 2;
  
  // Professional color scheme
  const colors = {
    primary: [41, 128, 185],     // Professional blue
    secondary: [52, 152, 219],   // Lighter blue
    accent: [230, 126, 34],      // Orange accent
    dark: [44, 62, 80],          // Dark blue-gray
    gray: [127, 140, 141],       // Medium gray
    lightGray: [236, 240, 241],  // Light gray
    success: [39, 174, 96],      // Green
    white: [255, 255, 255]
  };
  
  // Helper functions
  const setColor = (color: number[]) => {
    doc.setTextColor(color[0], color[1], color[2]);
  };
  
  const setFillColor = (color: number[]) => {
    doc.setFillColor(color[0], color[1], color[2]);
  };
  
  const addText = (text: string, x: number, y: number, options: any = {}) => {
    const { 
      fontSize = 10, 
      fontStyle = 'normal', 
      color = colors.dark, 
      align = 'left',
      maxWidth = rightMargin - leftMargin 
    } = options;
    
    try {
      setColor(color);
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', fontStyle);
      
      if (maxWidth && doc.getTextWidth(text) > maxWidth) {
        const splitText = doc.splitTextToSize(text, maxWidth);
        if (Array.isArray(splitText)) {
          splitText.forEach((line: string, index: number) => {
            doc.text(line, x, y + (index * (fontSize * 0.4)), { align });
          });
          return splitText.length * (fontSize * 0.4);
        }
      }
      
      doc.text(text, x, y, { align });
      return fontSize * 0.4;
    } catch (error) {
      console.error('Error adding text:', error);
      return fontSize * 0.4;
    }
  };
  
  const addSection = (title: string, y: number, color = colors.primary) => {
    // Section background
    setFillColor([...color, 0.1]);
    doc.rect(leftMargin - 5, y - 8, rightMargin - leftMargin + 10, 12, 'F');
    
    // Section title
    setColor(color);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title.toUpperCase(), leftMargin, y);
    
    // Decorative line
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(2);
    doc.line(leftMargin, y + 2, leftMargin + 60, y + 2);
    
    return y + 15;
  };
  
  let currentY = 20;
  
  // HEADER SECTION - Enhanced Design
  setFillColor(colors.primary);
  doc.rect(0, 0, pageWidth, 55, 'F');
  
  // Decorative elements
  setFillColor(colors.secondary);
  doc.circle(pageWidth - 30, 25, 20, 'F');
  setFillColor(colors.accent);
  doc.circle(25, 25, 15, 'F');
  
  // Name with enhanced styling
  setColor(colors.white);
  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  doc.text('JADIDYA', centerX, 25, { align: 'center' });
  
  // Professional title with accent
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text('Full-Stack Developer & Software Engineer', centerX, 35, { align: 'center' });
  
  // Contact bar
  setFillColor([...colors.white, 0.9]);
  doc.rect(0, 45, pageWidth, 10, 'F');
  
  setColor(colors.dark);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const contactInfo = 'juntyhoney2015@gmail.com | +91-7286820026 | India | linkedin.com/in/jadidya';
  doc.text(contactInfo, centerX, 51, { align: 'center' });
  
  currentY = 70;
  
  // PROFESSIONAL SUMMARY - Enhanced
  currentY = addSection('Professional Summary', currentY, colors.primary);
  
  const summaryText = 'Recent B.Tech Computer Science Engineering graduate (2024) with comprehensive expertise in full-stack web development. Proficient in modern JavaScript frameworks (React.js), backend technologies (Node.js, Python, Django), and database management systems. Demonstrated ability to develop scalable web applications with clean, maintainable code. Strong foundation in software engineering principles, data structures, algorithms, and system design. Passionate about creating innovative solutions and staying current with emerging technologies.';
  
  currentY += addText(summaryText, leftMargin, currentY, {
    fontSize: 11,
    color: colors.dark,
    maxWidth: rightMargin - leftMargin
  }) + 5;
  
  currentY += 10;
  
  // TECHNICAL SKILLS - Enhanced with categories
  currentY = addSection('Technical Expertise', currentY, colors.secondary);
  
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SQL'],
      color: colors.primary
    },
    {
      category: 'Frontend Development',
      skills: ['React.js', 'Tailwind CSS', 'Responsive Design', 'RESTful API Integration', 'State Management'],
      color: colors.secondary
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'RESTful APIs', 'Authentication'],
      color: colors.accent
    },
    {
      category: 'Database Technologies',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Query Optimization'],
      color: colors.success
    },
    {
      category: 'Development Tools',
      skills: ['Git & GitHub', 'VS Code', 'npm/yarn', 'Docker', 'Postman', 'Chrome DevTools'],
      color: colors.gray
    }
  ];
  
  skillCategories.forEach((category, index) => {
    // Category title
    setColor(category.color);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`• ${category.category}:`, leftMargin, currentY);
    currentY += 6;
    
    // Skills
    setColor(colors.dark);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const skillsText = category.skills.join(' • ');
    currentY += addText(skillsText, leftMargin + 10, currentY, {
      fontSize: 10,
      maxWidth: rightMargin - leftMargin - 10
    }) + 3;
  });
  
  currentY += 10;
  
  // EDUCATION - Enhanced
  currentY = addSection('Education', currentY, colors.accent);
  
  // Education background box
  setFillColor([...colors.lightGray, 0.3]);
  doc.rect(leftMargin - 2, currentY - 2, rightMargin - leftMargin + 4, 25, 'F');
  
  // Degree
  setColor(colors.dark);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('Bachelor of Technology - Computer Science Engineering', leftMargin, currentY);
  currentY += 7;
  
  // Institution
  setColor(colors.primary);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Mallareddy College of Engineering', leftMargin, currentY);
  currentY += 6;
  
  // Year and achievement
  setColor(colors.gray);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Graduated: 2024 | Specialization: Full-Stack Development', leftMargin, currentY);
  currentY += 8;
  
  // Key coursework
  setColor(colors.dark);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('Key Coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Web Technologies', leftMargin, currentY);
  currentY += 15;
  
  // KEY PROJECTS - Enhanced with detailed descriptions
  currentY = addSection('Key Projects & Portfolio', currentY, colors.success);
  
  const projects = [
    {
      name: 'E-commerce Web Application',
      tech: 'React.js, Node.js, Express.js, MongoDB, Stripe API',
      description: 'Comprehensive full-stack e-commerce platform featuring user authentication, product catalog with search and filtering, shopping cart functionality, secure payment processing via Stripe, admin dashboard for inventory management, and responsive design. Implemented JWT authentication, bcrypt password hashing, and RESTful API architecture.',
      highlights: ['Payment Integration', 'Admin Dashboard', 'Real-time Updates', 'Mobile Responsive'],
      color: colors.primary
    },
    {
      name: 'Weather Dashboard Application',
      tech: 'React.js, TypeScript, OpenWeather API, Tailwind CSS',
      description: 'Interactive weather application providing real-time weather data, 5-day forecasts, location-based services with geolocation API, weather maps integration, and local storage for favorite locations. Features responsive design, error handling, and optimized API calls with caching mechanisms.',
      highlights: ['Real-time Data', 'Geolocation', 'Data Visualization', 'Performance Optimized'],
      color: colors.secondary
    },
    {
      name: 'Task Management System',
      tech: 'React.js, Python, Django REST Framework, PostgreSQL',
      description: 'Professional project management tool with task creation, assignment, and tracking capabilities. Features include team collaboration, project timelines, progress tracking, file attachments, email notifications, and comprehensive reporting. Implemented role-based access control and real-time updates.',
      highlights: ['Team Collaboration', 'Role-based Access', 'File Management', 'Reporting'],
      color: colors.accent
    }
  ];
  
  projects.forEach((project, index) => {
    // Check if we need a new page
    if (currentY > pageHeight - 60) {
      doc.addPage();
      currentY = 30;
    }
    
    // Project container
    setFillColor([...project.color, 0.05]);
    doc.rect(leftMargin - 3, currentY - 3, rightMargin - leftMargin + 6, 45, 'F');
    
    // Project name
    setColor(project.color);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(project.name, leftMargin, currentY);
    currentY += 7;
    
    // Technologies
    setColor(colors.gray);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Technologies: ', leftMargin, currentY);
    
    setColor(project.color);
    doc.setFont('helvetica', 'normal');
    doc.text(project.tech, leftMargin + 25, currentY);
    currentY += 6;
    
    // Description
    setColor(colors.dark);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    currentY += addText(project.description, leftMargin, currentY, {
      fontSize: 10,
      maxWidth: rightMargin - leftMargin
    }) + 3;
    
    // Key highlights
    setColor(colors.success);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Key Features: ', leftMargin, currentY);
    
    setColor(colors.dark);
    doc.setFont('helvetica', 'normal');
    doc.text(project.highlights.join(' • '), leftMargin + 25, currentY);
    currentY += 15;
  });
  
  // Check if we need a new page for certifications
  if (currentY > pageHeight - 50) {
    doc.addPage();
    currentY = 30;
  }
  
  // CERTIFICATIONS - Enhanced
  currentY = addSection('Professional Certifications', currentY, colors.primary);
  
  const certifications = [
    {
      title: 'Python Complete Course For Python Beginners',
      provider: 'Udemy',
      year: '2024',
      description: 'Comprehensive Python programming certification covering fundamentals, OOP, data structures, file handling, error handling, and practical project development.',
      skills: ['Python Fundamentals', 'Object-Oriented Programming', 'Data Structures', 'File I/O', 'Exception Handling', 'Project Development']
    },
    {
      title: 'Python Full Stack Development - Professional Training',
      provider: 'Intensive Offline Course',
      year: '2024',
      description: 'Advanced full-stack development training with Django, FastAPI, database integration, deployment strategies, and production-level application development.',
      skills: ['Django Framework', 'FastAPI', 'Database Integration', 'API Development', 'Deployment', 'Production Best Practices']
    }
  ];
  
  certifications.forEach((cert, index) => {
    // Certification container
    setFillColor([...colors.primary, 0.05]);
    doc.rect(leftMargin - 2, currentY - 2, rightMargin - leftMargin + 4, 35, 'F');
    
    // Certification title
    setColor(colors.primary);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(cert.title, leftMargin, currentY);
    currentY += 6;
    
    // Provider and year
    setColor(colors.accent);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${cert.provider} - ${cert.year}`, leftMargin, currentY);
    currentY += 6;
    
    // Description
    setColor(colors.dark);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    currentY += addText(cert.description, leftMargin, currentY, {
      fontSize: 9,
      maxWidth: rightMargin - leftMargin
    }) + 3;
    
    // Skills covered
    setColor(colors.gray);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.text(`Skills: ${cert.skills.join(' • ')}`, leftMargin, currentY);
    currentY += 20;
  });
  
  // ADDITIONAL SECTIONS
  currentY += 5;
  
  // Professional Attributes
  currentY = addSection('Professional Attributes', currentY, colors.success);
  
  const attributes = [
    'Strong problem-solving and analytical thinking skills',
    'Excellent communication and team collaboration abilities',
    'Self-motivated with continuous learning mindset',
    'Attention to detail and commitment to code quality',
    'Adaptable to new technologies and methodologies',
    'Project management and time management skills'
  ];
  
  attributes.forEach(attribute => {
    setColor(colors.dark);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`• ${attribute}`, leftMargin, currentY);
    currentY += 5;
  });
  
  // Footer with design elements
  const footerY = pageHeight - 20;
  setFillColor(colors.primary);
  doc.rect(0, footerY - 5, pageWidth, 25, 'F');
  
  setColor(colors.white);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  doc.text('Thank you for considering my application. I look forward to contributing to your team!', centerX, footerY + 5, { align: 'center' });
  
  // Save the comprehensive PDF
  doc.save('Jadidya_Professional_Resume_Complete.pdf');
};
