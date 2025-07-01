
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { downloadResume } from '@/utils/downloadUtils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadResume();
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setTimeout(() => setIsDownloading(false), 300);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-purple-500/10 border-b border-purple-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
            Jadidya<span className="text-purple-500 animate-pulse">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative transition-all duration-200 hover:text-purple-600 hover:scale-105 ${
                  isActive(link.path) 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-foreground hover:text-purple-600'
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <Button
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 group border-0 text-white font-semibold"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2" />
                    Preparing...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                    Resume
                    <Sparkles className="w-3 h-3 ml-1 animate-pulse" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className="hover:bg-purple-100 hover:text-purple-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-3 px-4 rounded-lg transition-all duration-200 hover:bg-purple-100 hover:text-purple-600 hover:scale-105 ${
                    isActive(link.path) 
                      ? 'text-purple-600 font-semibold bg-purple-100/50' 
                      : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-200 group justify-start text-white font-semibold mt-2"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                    Download Resume
                    <Sparkles className="w-3 h-3 ml-2 animate-pulse" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
