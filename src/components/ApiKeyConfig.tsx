
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings, Eye, EyeOff, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ApiKeyConfigProps {
  onApiKeyChange: (apiKey: string) => void;
  currentApiKey: string;
}

const ApiKeyConfig: React.FC<ApiKeyConfigProps> = ({ onApiKeyChange, currentApiKey }) => {
  const [apiKey, setApiKey] = useState(currentApiKey);
  const [showApiKey, setShowApiKey] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!currentApiKey);
  const { toast } = useToast();

  useEffect(() => {
    setApiKey(currentApiKey);
  }, [currentApiKey]);

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem('weather_api_key', apiKey.trim());
      onApiKeyChange(apiKey.trim());
      setIsExpanded(false);
      toast({
        title: "API Key Saved",
        description: "Your OpenWeatherMap API key has been saved locally",
      });
    }
  };

  const handleClear = () => {
    setApiKey('');
    localStorage.removeItem('weather_api_key');
    onApiKeyChange('');
    toast({
      title: "API Key Cleared",
      description: "API key has been removed",
      variant: "destructive",
    });
  };

  if (!isExpanded && currentApiKey) {
    return (
      <Card className="glass-effect border-purple-200 animate-fade-in">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">API Key Configured</span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setIsExpanded(true)}
                variant="outline"
                size="sm"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Settings className="w-4 h-4 mr-1" />
                Edit
              </Button>
              <Button
                onClick={handleClear}
                variant="outline"
                size="sm"
                className="border-red-300 text-red-700 hover:bg-red-50"
              >
                <X className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-effect border-purple-200 animate-slide-up purple-glow">
      <CardHeader>
        <CardTitle className="text-purple-800 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          OpenWeatherMap API Configuration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            <p>Get your free API key from <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">OpenWeatherMap</a></p>
            <p className="mt-1">Your API key is stored locally in your browser for security.</p>
          </div>
          
          <div className="relative">
            <Input
              type={showApiKey ? "text" : "password"}
              placeholder="Enter your OpenWeatherMap API key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="pr-10 border-purple-200 focus:border-purple-400"
              onKeyPress={(e) => e.key === 'Enter' && handleSave()}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowApiKey(!showApiKey)}
            >
              {showApiKey ? (
                <EyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 text-gray-400" />
              )}
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={handleSave}
              disabled={!apiKey.trim()}
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
            >
              Save API Key
            </Button>
            {currentApiKey && (
              <Button
                onClick={() => setIsExpanded(false)}
                variant="outline"
                className="border-purple-300 text-purple-700"
              >
                Cancel
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiKeyConfig;
