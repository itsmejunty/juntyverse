
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  disabled?: boolean;
  loadingDuration?: number;
}

const EnhancedButton = ({ 
  children, 
  onClick, 
  variant = 'default', 
  size = 'default',
  className = '',
  disabled = false,
  loadingDuration = 500,
  ...props 
}: EnhancedButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;

    // Simple loading state without heavy effects
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      if (onClick) onClick();
    }, loadingDuration);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Button content */}
      <span className="flex items-center gap-2">
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </span>
    </Button>
  );
};

export default EnhancedButton;
