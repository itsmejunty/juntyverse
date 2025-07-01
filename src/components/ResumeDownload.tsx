
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, CheckCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const ResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/Jadidya_Resume.pdf';
      link.download = 'Jadidya_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <ScrollAnimation animation="fade-up" delay={200}>
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">Professional Resume</h3>
              <p className="text-muted-foreground text-sm">
                Download my complete professional CV with detailed experience and skills
              </p>
            </div>
            
            <Button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Preparing...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Always up-to-date</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>ATS-friendly format</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );
};

export default ResumeDownload;
