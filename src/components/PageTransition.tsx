
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayContent, setDisplayContent] = useState(children);
  const location = useLocation();

  useEffect(() => {
    // Simple fade transition without heavy effects
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setDisplayContent(children);
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  return (
    <div className="relative">
      {/* Simple page content with lightweight transition */}
      <div 
        className={`transition-all duration-300 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-2'
        }`}
      >
        {displayContent}
      </div>
    </div>
  );
};

export default PageTransition;
