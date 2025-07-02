
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
  
  // Page dimensions and margins
  const pageWidth = 210;
  const pageHeight = 297;
  const leftMargin = 20;
  const rightMargin = 190;
  const centerX = pageWidth / 2;
  
  // Professional color scheme - Modern Corporate Colors
  const colors = {
    primary: [25, 25, 112],        // Midnight Blue
    secondary: [70, 130, 180],     // Steel Blue
    accent: [220, 20, 60],         // Crimson
    text: [33, 33, 33],            // Charcoal
    lightText: [102, 102, 102],    // Medium Gray
    background: [248, 249, 250],   // Light Gray Background
    white: [255, 255, 255],        // Pure White
    divider: [230, 230, 230]       // Light Border
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
      color = colors.text, 
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
  
  const addSection = (title: string, y: number) => {
    // Clean section header with elegant line
    setColor(colors.primary);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title.toUpperCase(), leftMargin, y);
    
    // Elegant underline
    doc.setDrawColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    doc.setLineWidth(0.8);
    doc.line(leftMargin, y + 2, leftMargin + doc.getTextWidth(title.toUpperCase()) + 10, y + 2);
    
    return y + 12;
  };
  
  let currentY = 20;
  
  // HEADER SECTION - Clean Professional Design
  setFillColor(colors.primary);
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  // Clean white accent bar
  setFillColor(colors.white);
  doc.rect(0, 42, pageWidth, 8, 'F');
  
  // Professional name styling
  setColor(colors.white);
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('JADIDYA', centerX, 25, { align: 'center' });
  
  // Professional subtitle
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Full-Stack Developer & Software Engineer', centerX, 35, { align: 'center' });
  
  // Contact information in the white bar
  setColor(colors.text);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const contactInfo = 'juntyhoney2015@gmail.com  •  +91-7286820026  •  India  •  linkedin.com/in/jadidya';
  doc.text(contactInfo, centerX, 47, { align: 'center' });
  
  currentY = 65;
  
  // PROFESSIONAL SUMMARY
  currentY = addSection('Professional Summary', currentY);
  
  const summaryText = 'Recent B.Tech Computer Science Engineering graduate (2024) with comprehensive expertise in full-stack web development. Proficient in modern JavaScript frameworks, backend technologies, and database management systems. Demonstrated ability to develop scalable web applications with clean, maintainable code. Strong foundation in software engineering principles and passionate about creating innovative solutions.';
  
  setColor(colors.text);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  currentY += addText(summaryText, leftMargin, currentY, {
    fontSize: 11,
    color: colors.text,
    maxWidth: rightMargin - leftMargin
  }) + 8;
  
  // TECHNICAL SKILLS - Clean Layout
  currentY = addSection('Technical Skills', currentY);
  
  const skillSections = [
    { title: 'Languages', skills: 'JavaScript (ES6+), TypeScript, Python, HTML5, CSS3, SQL' },
    { title: 'Frontend', skills: 'React.js, Tailwind CSS, Responsive Design, RESTful API Integration' },
    { title: 'Backend', skills: 'Node.js, Express.js, Django, FastAPI, RESTful APIs, Authentication' },
    { title: 'Database', skills: 'MySQL, PostgreSQL, MongoDB, Database Design, Query Optimization' },
    { title: 'Tools', skills: 'Git & GitHub, VS Code, Docker, Postman, npm/yarn, Chrome DevTools' }
  ];
  
  skillSections.forEach((section) => {
    setColor(colors.secondary);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`${section.title}:`, leftMargin, currentY);
    
    setColor(colors.text);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(section.skills, leftMargin + 25, currentY);
    currentY += 6;
  });
  
  currentY += 8;
  
  // EDUCATION - Clean Design
  currentY = addSection('Education', currentY);
  
  // Light background for education section
  setFillColor(colors.background);
  doc.rect(leftMargin - 3, currentY - 3, rightMargin - leftMargin + 6, 20, 'F');
  
  setColor(colors.text);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Bachelor of Technology - Computer Science Engineering', leftMargin, currentY);
  currentY += 6;
  
  setColor(colors.secondary);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Mallareddy College of Engineering', leftMargin, currentY);
  currentY += 5;
  
  setColor(colors.lightText);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Graduated: 2024  |  Specialization: Full-Stack Development', leftMargin, currentY);
  currentY += 18;
  
  // KEY PROJECTS - Professional Layout
  currentY = addSection('Key Projects', currentY);
  
  const projects = [
    {
      name: 'E-commerce Web Application',
      tech: 'React.js, Node.js, Express.js, MongoDB, Stripe API',
      description: 'Comprehensive full-stack e-commerce platform with user authentication, product catalog, shopping cart, secure payment processing, and admin dashboard. Features responsive design and RESTful API architecture.',
      highlights: ['Payment Integration', 'Admin Dashboard', 'Responsive Design']
    },
    {
      name: 'Weather Dashboard Application',
      tech: 'React.js, TypeScript, OpenWeather API, Tailwind CSS',
      description: 'Interactive weather application providing real-time data, forecasts, location services, and weather maps. Optimized with caching mechanisms and error handling for enhanced user experience.',
      highlights: ['Real-time Data', 'Geolocation API', 'Performance Optimized']
    },
    {
      name: 'Task Management System',
      tech: 'React.js, Python, Django REST Framework, PostgreSQL',
      description: 'Professional project management tool with task tracking, team collaboration, project timelines, and comprehensive reporting. Implemented role-based access control and real-time updates.',
      highlights: ['Team Collaboration', 'Role-based Access', 'Real-time Updates']
    }
  ];
  
  projects.forEach((project, index) => {
    // Check for new page
    if (currentY > pageHeight - 50) {
      doc.addPage();
      currentY = 30;
    }
    
    // Project container with subtle background
    setFillColor(colors.background);
    doc.rect(leftMargin - 2, currentY - 2, rightMargin - leftMargin + 4, 35, 'F');
    
    // Project name
    setColor(colors.primary);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(project.name, leftMargin, currentY);
    currentY += 6;
    
    // Technologies
    setColor(colors.secondary);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.text(`Technologies: ${project.tech}`, leftMargin, currentY);
    currentY += 5;
    
    // Description
    setColor(colors.text);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    currentY += addText(project.description, leftMargin, currentY, {
      fontSize: 10,
      maxWidth: rightMargin - leftMargin
    }) + 3;
    
    // Highlights
    setColor(colors.accent);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(`Key Features: ${project.highlights.join(' • ')}`, leftMargin, currentY);
    currentY += 12;
  });
  
  // Check for new page
  if (currentY > pageHeight - 80) {
    doc.addPage();
    currentY = 30;
  }
  
  // CERTIFICATIONS
  currentY = addSection('Certifications', currentY);
  
  const certifications = [
    {
      title: 'Python Complete Course For Python Beginners',
      provider: 'Udemy - 2024',
      description: 'Comprehensive Python programming certification covering fundamentals, OOP, data structures, and practical project development.'
    },
    {
      title: 'Python Full Stack Development - Professional Training',
      provider: 'Intensive Offline Course - 2024',
      description: 'Advanced full-stack development training with Django, FastAPI, database integration, and production-level application development.'
    }
  ];
  
  certifications.forEach((cert) => {
    setColor(colors.primary);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(cert.title, leftMargin, currentY);
    currentY += 5;
    
    setColor(colors.secondary);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(cert.provider, leftMargin, currentY);
    currentY += 4;
    
    setColor(colors.text);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    currentY += addText(cert.description, leftMargin, currentY, {
      fontSize: 9,
      maxWidth: rightMargin - leftMargin
    }) + 8;
  });
  
  // PROFESSIONAL ATTRIBUTES
  currentY = addSection('Professional Attributes', currentY);
  
  const attributes = [
    'Strong problem-solving and analytical thinking capabilities',
    'Excellent communication and team collaboration skills',
    'Self-motivated with continuous learning mindset',
    'Attention to detail and commitment to code quality',
    'Adaptable to new technologies and methodologies'
  ];
  
  attributes.forEach(attribute => {
    setColor(colors.text);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`• ${attribute}`, leftMargin, currentY);
    currentY += 5;
  });
  
  // Professional footer
  const footerY = pageHeight - 15;
  setFillColor(colors.primary);
  doc.rect(0, footerY - 3, pageWidth, 18, 'F');
  
  setColor(colors.white);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  doc.text('Thank you for considering my application. I look forward to contributing to your team.', centerX, footerY + 5, { align: 'center' });
  
  // Save the professional PDF
  doc.save('Jadidya_Professional_Resume.pdf');
};
