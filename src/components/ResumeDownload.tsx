
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, CheckCircle, Sparkles, Zap } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { downloadResume } from '@/utils/downloadUtils';

const ResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      await downloadResume();
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      // Quick response time
      setTimeout(() => {
        setIsDownloading(false);
      }, 300);
    }
  };

  return (
    <ScrollAnimation animation="fade-up" delay={200}>
      <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border-2 border-transparent bg-clip-padding backdrop-blur-sm hover:border-purple-500/30 transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/20 group">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating particles effect */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" />
        <div className="absolute top-6 right-6 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }} />
        
        <CardContent className="relative z-10 p-8">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <FileText className="w-8 h-8 text-white drop-shadow-sm" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Professional Resume
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Download my comprehensive CV featuring cutting-edge projects, certifications, and technical expertise
              </p>
            </div>
            
            <Button 
              onClick={handleDownload}
              disabled={isDownloading}
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 group/btn border-0 text-white font-semibold px-8 py-3 rounded-xl"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-3" />
                  <span className="animate-pulse">Preparing...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-3 transition-transform group-hover/btn:translate-y-0.5 group-hover/btn:scale-110" />
                  <span>Download PDF</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                </>
              )}
            </Button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-purple-200/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Always Updated</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Zap className="w-5 h-5" />
                  <span className="font-medium">ATS Optimized</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-purple-600 bg-purple-100/50 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-sm font-medium">Professional Format</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );
};

export default ResumeDownload;
