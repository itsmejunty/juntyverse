import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Cloud, CloudRain, Sun, CloudSnow, Wind, Eye, Droplets, Thermometer, Gauge, MapPin, Clock, Search, AlertCircle, Loader2 } from 'lucide-react';

// Define interfaces for weather data
interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  visibility: number;
  sys: {
    country: string;
  };
}

interface ForecastData {
  list: Array<{
    dt: number;
    main: {
      temp: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}

interface CityData {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

const WeatherDemo = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState('');
  const [suggestions, setSuggestions] = useState<CityData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiConfig, setShowApiConfig] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Demo data for showcase
  const demoWeatherData: WeatherData = {
    name: 'Mumbai',
    main: {
      temp: 28,
      feels_like: 32,
      humidity: 78,
      pressure: 1013
    },
    weather: [{
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d'
    }],
    wind: {
      speed: 3.5
    },
    visibility: 10000,
    sys: {
      country: 'IN'
    }
  };

  const demoForecastData: ForecastData = {
    list: [
      { dt: Date.now() / 1000, main: { temp: 28 }, weather: [{ main: 'Clouds', description: 'cloudy', icon: '03d' }] },
      { dt: Date.now() / 1000 + 86400, main: { temp: 30 }, weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }] },
      { dt: Date.now() / 1000 + 172800, main: { temp: 26 }, weather: [{ main: 'Rain', description: 'light rain', icon: '10d' }] },
      { dt: Date.now() / 1000 + 259200, main: { temp: 29 }, weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }] },
      { dt: Date.now() / 1000 + 345600, main: { temp: 27 }, weather: [{ main: 'Clouds', description: 'few clouds', icon: '02d' }] }
    ]
  };

  // Comprehensive global cities database
  const globalCitiesDatabase: CityData[] = [
    // India - Major cities
    { name: 'Mumbai', country: 'IN', state: 'Maharashtra', lat: 19.0760, lon: 72.8777 },
    { name: 'Delhi', country: 'IN', state: 'Delhi', lat: 28.7041, lon: 77.1025 },
    { name: 'Bangalore', country: 'IN', state: 'Karnataka', lat: 12.9716, lon: 77.5946 },
    { name: 'Hyderabad', country: 'IN', state: 'Telangana', lat: 17.3850, lon: 78.4867 },
    { name: 'Chennai', country: 'IN', state: 'Tamil Nadu', lat: 13.0827, lon: 80.2707 },
    { name: 'Kolkata', country: 'IN', state: 'West Bengal', lat: 22.5726, lon: 88.3639 },
    { name: 'Pune', country: 'IN', state: 'Maharashtra', lat: 18.5204, lon: 73.8567 },
    { name: 'Ahmedabad', country: 'IN', state: 'Gujarat', lat: 23.0225, lon: 72.5714 },
    // International cities
    { name: 'New York', country: 'US', state: 'New York', lat: 40.7128, lon: -74.0060 },
    { name: 'London', country: 'GB', lat: 51.5074, lon: -0.1278 },
    { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
    { name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
    { name: 'Sydney', country: 'AU', lat: -33.8688, lon: 151.2093 },
    { name: 'Dubai', country: 'AE', lat: 25.2048, lon: 55.2708 },
    { name: 'Singapore', country: 'SG', lat: 1.3521, lon: 103.8198 },
    { name: 'Hong Kong', country: 'HK', lat: 22.3193, lon: 114.1694 },
    { name: 'Los Angeles', country: 'US', state: 'California', lat: 34.0522, lon: -118.2437 },
    { name: 'Toronto', country: 'CA', state: 'Ontario', lat: 43.6532, lon: -79.3832 }
  ];

  useEffect(() => {
    setWeatherData(demoWeatherData);
    setForecastData(demoForecastData);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear': return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'clouds': return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rain': return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'snow': return <CloudSnow className="h-8 w-8 text-blue-200" />;
      default: return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  const handleSearch = (cityData?: CityData) => {
    const city = cityData || globalCitiesDatabase.find(c => 
      c.name.toLowerCase() === searchCity.toLowerCase()
    );
    
    if (!city) {
      setError('City not found. Try searching for a major city.');
      return;
    }

    setLoading(true);
    setError(null);
    setShowSuggestions(false);

    // Simulate API call with demo data
    setTimeout(() => {
      setWeatherData(demoWeatherData);
      setForecastData(demoForecastData);
      setLoading(false);
    }, 1000);
  };

  const handleInputChange = (value: string) => {
    setSearchCity(value);
    
    if (value.length > 0) {
      const filtered = globalCitiesDatabase
        .filter(city => 
          city.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Weather Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get real-time weather information and 5-day forecasts for cities worldwide. 
            This demo shows sample data - connect your OpenWeatherMap API key for live data.
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div ref={searchRef} className="relative">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Search for a city..."
                    value={searchCity}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="pr-10"
                  />
                  <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
                <Button onClick={() => handleSearch()} disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Search'}
                </Button>
              </div>

              {/* City Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                  {suggestions.map((city, index) => (
                    <div
                      key={index}
                      className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                      onClick={() => {
                        setSearchCity(city.name);
                        handleSearch(city);
                      }}
                    >
                      <div className="font-medium">{city.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {city.state ? `${city.state}, ` : ''}{city.country}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {error && (
              <Alert className="mt-4" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Current Weather */}
        {weatherData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Current Weather in {weatherData.name}, {weatherData.sys.country}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Last updated: {new Date().toLocaleTimeString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {getWeatherIcon(weatherData.weather[0].main)}
                    <div>
                      <div className="text-4xl font-bold">{Math.round(weatherData.main.temp)}°C</div>
                      <div className="text-muted-foreground capitalize">
                        {weatherData.weather[0].description}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {weatherData.weather[0].main}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Thermometer className="h-5 w-5 mx-auto mb-1 text-red-500" />
                    <div className="text-sm text-muted-foreground">Feels like</div>
                    <div className="font-semibold">{Math.round(weatherData.main.feels_like)}°C</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Droplets className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                    <div className="text-sm text-muted-foreground">Humidity</div>
                    <div className="font-semibold">{weatherData.main.humidity}%</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Wind className="h-5 w-5 mx-auto mb-1 text-gray-500" />
                    <div className="text-sm text-muted-foreground">Wind Speed</div>
                    <div className="font-semibold">{weatherData.wind.speed} m/s</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Gauge className="h-5 w-5 mx-auto mb-1 text-purple-500" />
                    <div className="text-sm text-muted-foreground">Pressure</div>
                    <div className="font-semibold">{weatherData.main.pressure} hPa</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Weather Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Visibility</span>
                  <span className="font-medium">{(weatherData.visibility / 1000).toFixed(1)} km</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">UV Index</span>
                  <span className="font-medium">5 (Moderate)</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Air Quality</span>
                  <Badge variant="outline">Good</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 5-Day Forecast */}
        {forecastData && (
          <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>5-Day Forecast</CardTitle>
              <CardDescription>Weather prediction for the next 5 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {forecastData.list.slice(0, 5).map((day, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="font-medium mb-2">
                      {index === 0 ? 'Today' : formatDate(day.dt)}
                    </div>
                    <div className="flex justify-center mb-2">
                      {getWeatherIcon(day.weather[0].main)}
                    </div>
                    <div className="text-lg font-semibold">{Math.round(day.main.temp)}°C</div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {day.weather[0].description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Demo Notice */}
        <Alert className="mt-8 border-blue-200 bg-blue-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Demo Mode:</strong> This is a demonstration showing sample weather data. 
            To get real-time weather information, you would need to integrate with the OpenWeatherMap API 
            and provide your own API key.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default WeatherDemo;
