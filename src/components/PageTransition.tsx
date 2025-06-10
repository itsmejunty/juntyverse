
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [displayContent, setDisplayContent] = useState(children);
  const location = useLocation();

  useEffect(() => {
    // Start exit animation
    setIsExiting(true);
    setIsVisible(false);
    
    // After exit animation, update content and start enter animation
    const exitTimer = setTimeout(() => {
      setDisplayContent(children);
      setIsExiting(false);
      
      // Small delay before showing new content
      const enterTimer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      
      return () => clearTimeout(enterTimer);
    }, 300);

    return () => {
      clearTimeout(exitTimer);
    };
  }, [location.pathname, children]);

  return (
    <div className="relative overflow-hidden">
      {/* Smooth transition overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-gradient-to-br from-primary/90 via-accent/90 to-primary/90 backdrop-blur-sm transform transition-all duration-500 ease-in-out ${
          isExiting ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.95) 0%, rgba(192, 132, 252, 0.95) 50%, rgba(147, 51, 234, 0.95) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
        
        {/* Loading animation */}
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-white/40 rounded-full animate-spin" style={{ animationDuration: '0.8s', animationDirection: 'reverse' }} />
            </div>
            <div className="text-center">
              <div className="text-white font-medium text-lg animate-pulse">Loading</div>
              <div className="flex space-x-1 mt-2">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page content with smooth transitions */}
      <div 
        className={`transition-all duration-700 ease-out transform ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-98'
        }`}
      >
        {displayContent}
      </div>
    </div>
  );
};

export default PageTransition;
