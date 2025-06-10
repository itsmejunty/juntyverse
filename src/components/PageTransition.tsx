
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsExiting(true);
    setIsVisible(false);
    
    const exitTimer = setTimeout(() => {
      setIsExiting(false);
      setIsVisible(true);
    }, 150);

    return () => {
      clearTimeout(exitTimer);
    };
  }, [location.pathname]);

  return (
    <div className="relative overflow-hidden">
      {/* Page transition overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 transform transition-transform duration-500 ease-in-out ${
          isExiting ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="flex items-center justify-center h-full">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="text-white font-medium text-lg">Loading...</span>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div 
        className={`transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
