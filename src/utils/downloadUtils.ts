
export const downloadResume = async () => {
  try {
    // Check if file exists first
    const response = await fetch('/Jadidya_Resume.pdf', { method: 'HEAD' });
    
    if (!response.ok) {
      // If PDF doesn't exist, create a simple fallback
      console.warn('Resume PDF not found, creating fallback download');
      createFallbackResume();
      return;
    }

    // Create download link
    const link = document.createElement('a');
    link.href = '/Jadidya_Resume.pdf';
    link.download = 'Jadidya_Resume.pdf';
    link.target = '_blank';
    
    // Ensure link is added to DOM for some browsers
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
    
  } catch (error) {
    console.error('Download failed:', error);
    createFallbackResume();
  }
};

const createFallbackResume = () => {
  // Create a simple text-based resume as fallback
  const resumeContent = `
JADIDYA - FULL STACK DEVELOPER

CONTACT INFORMATION
Email: jadidya@example.com
Phone: +91-XXXXXXXXXX
Location: India

EDUCATION
B.Tech in Computer Science
Mallareddy College of Engineering - 2024

CERTIFICATIONS
• Python Complete Course For Python Beginners (Udemy, 2024)
• Python Full Stack Development (Offline Course, 2024)

SKILLS
• Frontend: React, TypeScript, HTML5, CSS3, Tailwind CSS
• Backend: Python, Node.js, Django, FastAPI
• Database: MySQL, PostgreSQL, MongoDB
• Tools: Git, Docker, VS Code

PROJECTS
• Weather Dashboard Application
• Task Management System
• E-commerce Platform
• Portfolio Website

Thank you for your interest in my profile!
  `;

  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Jadidya_Resume.txt';
  document.body.appendChild(link);
  link.click();
  
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
};
