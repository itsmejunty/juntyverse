
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
  
  // Set page margins
  const leftMargin = 20;
  const rightMargin = 190;
  const pageWidth = 210;
  
  // Professional colors
  const primaryBlue = [34, 67, 120];
  const lightBlue = [70, 130, 180];
  const darkGray = [64, 64, 64];
  const mediumGray = [102, 102, 102];
  
  // Helper function for safe text addition
  const addText = (text: string, x: number, y: number, options: any = {}) => {
    const { fontSize = 10, fontStyle = 'normal', color = [0, 0, 0] } = options;
    
    try {
      doc.setTextColor(color[0], color[1], color[2]);
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', fontStyle);
      
      // Ensure text fits within page boundaries
      const textWidth = doc.getTextWidth(text);
      if (x + textWidth > rightMargin) {
        const splitText = doc.splitTextToSize(text, rightMargin - x);
        if (Array.isArray(splitText)) {
          splitText.forEach((line: string, index: number) => {
            doc.text(line, x, y + (index * 5));
          });
          return splitText.length * 5;
        }
      }
      
      doc.text(text, x, y);
      return 5;
    } catch (error) {
      console.error('Error adding text:', error);
      return 5;
    }
  };
  
  let currentY = 20;
  
  // Professional header
  doc.setFillColor(34, 67, 120);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('JADIDYA', pageWidth/2, 20, { align: 'center' });
  
  // Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Full-Stack Developer', pageWidth/2, 30, { align: 'center' });
  
  currentY = 50;
  
  // Contact Information
  addText('CONTACT INFORMATION', leftMargin, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  
  doc.setDrawColor(34, 67, 120);
  doc.line(leftMargin, currentY + 2, 90, currentY + 2);
  
  currentY += 10;
  addText('Email: juntyhoney2015@gmail.com', leftMargin, currentY, { color: darkGray });
  currentY += 6;
  addText('Phone: +91-7286820026', leftMargin, currentY, { color: darkGray });
  currentY += 6;
  addText('Location: India', leftMargin, currentY, { color: darkGray });
  
  currentY += 15;
  
  // Professional Summary
  addText('PROFESSIONAL SUMMARY', leftMargin, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(leftMargin, currentY + 2, 100, currentY + 2);
  
  currentY += 10;
  const summary = 'Recent B.Tech Computer Science graduate with expertise in full-stack development. Proficient in React.js, Node.js, Python, and modern web technologies. Strong foundation in software engineering with practical project experience.';
  
  const summaryLines = doc.splitTextToSize(summary, 170);
  summaryLines.forEach((line: string) => {
    addText(line, leftMargin, currentY, { color: darkGray });
    currentY += 5;
  });
  
  currentY += 10;
  
  // Technical Skills
  addText('TECHNICAL SKILLS', leftMargin, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(leftMargin, currentY + 2, 75, currentY + 2);
  
  currentY += 10;
  
  const skills = [
    'Programming: JavaScript, TypeScript, Python, HTML5, CSS3',
    'Frontend: React.js, Tailwind CSS, Responsive Design',
    'Backend: Node.js, Express.js, Django, RESTful APIs',
    'Database: MySQL, PostgreSQL, MongoDB',
    'Tools: Git, GitHub, VS Code, npm, Docker'
  ];
  
  skills.forEach(skill => {
    addText(`• ${skill}`, leftMargin, currentY, { fontSize: 9, color: mediumGray });
    currentY += 6;
  });
  
  currentY += 10;
  
  // Education
  addText('EDUCATION', leftMargin, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(leftMargin, currentY + 2, 55, currentY + 2);
  
  currentY += 10;
  addText('Bachelor of Technology - Computer Science Engineering (2024)', leftMargin, currentY, {
    fontSize: 11,
    fontStyle: 'bold',
    color: darkGray
  });
  currentY += 6;
  addText('Mallareddy College of Engineering', leftMargin, currentY, {
    fontSize: 10,
    color: lightBlue
  });
  
  currentY += 15;
  
  // Projects
  addText('KEY PROJECTS', leftMargin, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(leftMargin, currentY + 2, 60, currentY + 2);
  
  currentY += 10;
  
  const projects = [
    {
      name: 'E-commerce Web Application',
      tech: 'React.js, Node.js, Express.js, MongoDB',
      desc: 'Full-stack e-commerce platform with user authentication, product catalog, and payment processing.'
    },
    {
      name: 'Weather Dashboard Application',
      tech: 'React.js, TypeScript, REST APIs, Tailwind CSS',
      desc: 'Responsive weather application with real-time data and location-based services.'
    },
    {
      name: 'Task Management System',
      tech: 'React.js, Python, Django, PostgreSQL',
      desc: 'Project management tool with task tracking and team collaboration features.'
    }
  ];
  
  projects.forEach(project => {
    addText(project.name, leftMargin, currentY, {
      fontSize: 11,
      fontStyle: 'bold',
      color: darkGray
    });
    currentY += 6;
    
    addText(`Technologies: ${project.tech}`, leftMargin, currentY, {
      fontSize: 9,
      color: lightBlue
    });
    currentY += 5;
    
    const descLines = doc.splitTextToSize(project.desc, 170);
    descLines.forEach((line: string) => {
      addText(line, leftMargin, currentY, { fontSize: 9, color: mediumGray });
      currentY += 4;
    });
    currentY += 8;
  });
  
  // Certifications
  addText('CERTIFICATIONS', leftMargin, currentY, {
    fontSize: 12,
    fontStyle: 'bold',
    color: primaryBlue
  });
  doc.line(leftMargin, currentY + 2, 70, currentY + 2);
  
  currentY += 10;
  addText('• Python Complete Course For Python Beginners - Udemy (2024)', leftMargin, currentY, {
    fontSize: 10,
    color: darkGray
  });
  currentY += 6;
  addText('• Python Full Stack Development - Professional Training (2024)', leftMargin, currentY, {
    fontSize: 10,
    color: darkGray
  });
  
  // Save the PDF
  doc.save('Jadidya_Professional_Resume.pdf');
};
