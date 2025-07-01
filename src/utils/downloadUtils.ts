
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
  
  // Set professional fonts and colors
  const primaryColor = [139, 92, 246]; // Purple
  const secondaryColor = [75, 85, 99]; // Gray
  const accentColor = [168, 85, 247]; // Light purple
  
  // Helper function to add colored text
  const addColoredText = (text: string, x: number, y: number, color: number[], fontSize = 12, fontStyle = 'normal') => {
    doc.setTextColor(color[0], color[1], color[2]);
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    doc.text(text, x, y);
  };
  
  // Header Section with gradient-like effect
  doc.setFillColor(139, 92, 246);
  doc.rect(0, 0, 210, 35, 'F');
  
  // Name and Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('JADIDYA', 20, 20);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Full-Stack Developer', 20, 28);
  
  // Contact Information
  doc.setFontSize(10);
  doc.text('Email: jadidya.dev@example.com', 130, 15);
  doc.text('Phone: +91-XXXXXXXXXX', 130, 22);
  doc.text('Location: India', 130, 29);
  
  let yPosition = 50;
  
  // Professional Summary Section
  addColoredText('PROFESSIONAL SUMMARY', 20, yPosition, primaryColor, 14, 'bold');
  doc.setDrawColor(139, 92, 246);
  doc.setLineWidth(0.5);
  doc.line(20, yPosition + 2, 75, yPosition + 2);
  
  yPosition += 8;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const summaryText = `Recent B.Tech Computer Science graduate with comprehensive training in full-stack development. 
Proficient in React, Node.js, Python, and modern web technologies. Passionate about creating 
innovative solutions and delivering exceptional user experiences. Strong problem-solving skills 
with experience in both frontend and backend development.`;
  
  const summaryLines = doc.splitTextToSize(summaryText, 170);
  doc.text(summaryLines, 20, yPosition);
  yPosition += summaryLines.length * 4 + 8;
  
  // Education Section
  addColoredText('EDUCATION', 20, yPosition, primaryColor, 14, 'bold');
  doc.line(20, yPosition + 2, 50, yPosition + 2);
  yPosition += 10;
  
  addColoredText('Bachelor of Technology - Computer Science', 20, yPosition, secondaryColor, 12, 'bold');
  yPosition += 5;
  addColoredText('Mallareddy College of Engineering', 20, yPosition, accentColor, 10);
  addColoredText('2024', 160, yPosition, secondaryColor, 10);
  yPosition += 4;
  addColoredText('• Specialized in Software Engineering and Full-Stack Development', 25, yPosition, secondaryColor, 9);
  yPosition += 4;
  addColoredText('• Strong foundation in Data Structures, Algorithms, and System Design', 25, yPosition, secondaryColor, 9);
  yPosition += 10;
  
  // Technical Skills Section
  addColoredText('TECHNICAL SKILLS', 20, yPosition, primaryColor, 14, 'bold');
  doc.line(20, yPosition + 2, 65, yPosition + 2);
  yPosition += 10;
  
  const skills = [
    'Frontend: React.js, TypeScript, HTML5, CSS3, Tailwind CSS, JavaScript ES6+',
    'Backend: Node.js, Python, Django, FastAPI, Express.js, RESTful APIs',
    'Database: MySQL, PostgreSQL, MongoDB, Database Design & Optimization',
    'Tools & Technologies: Git, Docker, VS Code, Postman, npm/yarn',
    'Cloud & DevOps: Basic understanding of AWS, CI/CD pipelines',
    'Other: Responsive Design, Cross-browser Compatibility, Agile Methodology'
  ];
  
  skills.forEach(skill => {
    addColoredText('•', 20, yPosition, primaryColor, 10, 'bold');
    addColoredText(skill, 25, yPosition, secondaryColor, 9);
    yPosition += 5;
  });
  
  yPosition += 5;
  
  // Certifications Section
  addColoredText('CERTIFICATIONS', 20, yPosition, primaryColor, 14, 'bold');
  doc.line(20, yPosition + 2, 65, yPosition + 2);
  yPosition += 10;
  
  addColoredText('Python Complete Course For Python Beginners', 20, yPosition, secondaryColor, 11, 'bold');
  addColoredText('2024', 160, yPosition, secondaryColor, 10);
  yPosition += 5;
  addColoredText('Udemy - Comprehensive Python programming and practical applications', 25, yPosition, accentColor, 9);
  yPosition += 7;
  
  addColoredText('Python Full Stack Development', 20, yPosition, secondaryColor, 11, 'bold');
  addColoredText('2024', 160, yPosition, secondaryColor, 10);
  yPosition += 5;
  addColoredText('Offline Course - Advanced full-stack development with Python frameworks', 25, yPosition, accentColor, 9);
  yPosition += 10;
  
  // Key Projects Section
  addColoredText('KEY PROJECTS', 20, yPosition, primaryColor, 14, 'bold');
  doc.line(20, yPosition + 2, 55, yPosition + 2);
  yPosition += 10;
  
  const projects = [
    {
      name: 'Weather Dashboard Application',
      tech: 'React, TypeScript, Weather API, Tailwind CSS',
      desc: 'Real-time weather application with location-based forecasts and responsive design'
    },
    {
      name: 'Task Management System',
      tech: 'React, Node.js, MongoDB, Express.js',
      desc: 'Full-stack productivity app with user authentication and real-time updates'
    },
    {
      name: 'E-commerce Platform',
      tech: 'React, Python, Django, PostgreSQL',
      desc: 'Complete e-commerce solution with payment integration and admin dashboard'
    }
  ];
  
  projects.forEach(project => {
    addColoredText(project.name, 20, yPosition, secondaryColor, 11, 'bold');
    yPosition += 5;
    addColoredText(`Technologies: ${project.tech}`, 25, yPosition, accentColor, 9);
    yPosition += 4;
    addColoredText(`• ${project.desc}`, 25, yPosition, secondaryColor, 9);
    yPosition += 8;
  });
  
  // Professional Attributes Section
  addColoredText('PROFESSIONAL ATTRIBUTES', 20, yPosition, primaryColor, 14, 'bold');
  doc.line(20, yPosition + 2, 85, yPosition + 2);
  yPosition += 8;
  
  const attributes = [
    'Strong analytical and problem-solving abilities',
    'Excellent communication and teamwork skills',
    'Detail-oriented with commitment to quality code',
    'Quick learner adaptable to new technologies',
    'Self-motivated with strong work ethic'
  ];
  
  attributes.forEach(attr => {
    addColoredText('•', 20, yPosition, primaryColor, 10, 'bold');
    addColoredText(attr, 25, yPosition, secondaryColor, 9);
    yPosition += 5;
  });
  
  // Footer
  doc.setFillColor(139, 92, 246);
  doc.rect(0, 285, 210, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text('Generated Resume - Ready for ATS Systems | Portfolio: jadidya.dev', 20, 292);
  
  // Save the PDF
  doc.save('Jadidya_Professional_Resume.pdf');
};
