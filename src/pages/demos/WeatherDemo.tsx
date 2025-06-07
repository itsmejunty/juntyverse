
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Cloud, CloudRain, Sun, CloudSnow, Wind, Eye, Droplets, Thermometer, Gauge, MapPin, Clock, Search, AlertCircle, Loader2, Navigation } from 'lucide-react';

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
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const globalCitiesDatabase: CityData[] = [
    { name: 'Mumbai', country: 'IN', state: 'Maharashtra', lat: 19.0760, lon: 72.8777 },
    { name: 'Delhi', country: 'IN', state: 'Delhi', lat: 28.7041, lon: 77.1025 },
    { name: 'Bangalore', country: 'IN', state: 'Karnataka', lat: 12.9716, lon: 77.5946 },
    { name: 'Hyderabad', country: 'IN', state: 'Telangana', lat: 17.3850, lon: 78.4867 },
    { name: 'Chennai', country: 'IN', state: 'Tamil Nadu', lat: 13.0827, lon: 80.2707 },
    { name: 'Kolkata', country: 'IN', state: 'West Bengal', lat: 22.5726, lon: 88.3639 },
    { name: 'Pune', country: 'IN', state: 'Maharashtra', lat: 18.5204, lon: 73.8567 },
    { name: 'Ahmedabad', country: 'IN', state: 'Gujarat', lat: 23.0225, lon: 72.5714 },
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
    // Load default weather for Mumbai on component mount
    loadWeatherForCity('Mumbai');
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

  const getCurrentLocation = () => {
    setGpsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      setGpsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lon: longitude });
        loadWeatherForLocation(latitude, longitude);
        setGpsLoading(false);
      },
      (error) => {
        setError('Unable to retrieve your location. Please try searching for a city.');
        setGpsLoading(false);
      }
    );
  };

  const loadWeatherForLocation = (lat: number, lon: number) => {
    setLoading(true);
    setError(null);

    // Simulate API call with enhanced demo data based on location
    setTimeout(() => {
      const demoWeatherData: WeatherData = {
        name: lat > 0 ? (lat > 50 ? 'London' : 'New York') : 'Sydney',
        main: {
          temp: Math.round(15 + Math.random() * 20),
          feels_like: Math.round(18 + Math.random() * 20),
          humidity: Math.round(40 + Math.random() * 40),
          pressure: Math.round(1000 + Math.random() * 50)
        },
        weather: [{
          main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
          description: 'partly cloudy',
          icon: '03d'
        }],
        wind: {
          speed: Math.round(Math.random() * 10 * 10) / 10
        },
        visibility: 10000,
        sys: {
          country: lat > 50 ? 'GB' : (lat > 0 ? 'US' : 'AU')
        }
      };

      const demoForecastData: ForecastData = {
        list: Array.from({ length: 5 }, (_, i) => ({
          dt: Date.now() / 1000 + (i * 86400),
          main: { temp: Math.round(15 + Math.random() * 20) },
          weather: [{ 
            main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)], 
            description: 'weather', 
            icon: '03d' 
          }]
        }))
      };

      setWeatherData(demoWeatherData);
      setForecastData(demoForecastData);
      setLoading(false);
    }, 1500);
  };

  const loadWeatherForCity = (cityName: string) => {
    const city = globalCitiesDatabase.find(c => 
      c.name.toLowerCase() === cityName.toLowerCase()
    );
    
    if (!city) {
      setError('City not found. Try searching for a major city.');
      return;
    }

    setLoading(true);
    setError(null);

    // Generate realistic demo data based on the selected city
    setTimeout(() => {
      const tempBase = city.lat > 30 ? 25 : (city.lat > 0 ? 15 : 20);
      const demoWeatherData: WeatherData = {
        name: city.name,
        main: {
          temp: Math.round(tempBase + Math.random() * 15),
          feels_like: Math.round(tempBase + 3 + Math.random() * 15),
          humidity: Math.round(50 + Math.random() * 40),
          pressure: Math.round(1005 + Math.random() * 30)
        },
        weather: [{
          main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
          description: `Weather in ${city.name}`,
          icon: '03d'
        }],
        wind: {
          speed: Math.round(Math.random() * 8 * 10) / 10
        },
        visibility: 10000,
        sys: {
          country: city.country
        }
      };

      const demoForecastData: ForecastData = {
        list: Array.from({ length: 5 }, (_, i) => ({
          dt: Date.now() / 1000 + (i * 86400),
          main: { temp: Math.round(tempBase + Math.random() * 10) },
          weather: [{ 
            main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)], 
            description: 'forecast', 
            icon: '03d' 
          }]
        }))
      };

      setWeatherData(demoWeatherData);
      setForecastData(demoForecastData);
      setLoading(false);
    }, 1000);
  };

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
    
    if (city) {
      loadWeatherForCity(city.name);
      setShowSuggestions(false);
    } else {
      setError('City not found. Try searching for a major city.');
    }
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
            Use GPS for your current location or search for any city.
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
              <div className="flex gap-2 mb-4">
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

              <Button 
                onClick={getCurrentLocation} 
                disabled={gpsLoading}
                variant="outline"
                className="w-full"
              >
                {gpsLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Navigation className="h-4 w-4 mr-2" />
                )}
                Use Current Location
              </Button>

              {/* City Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-20 left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
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
            <strong>Enhanced Demo:</strong> This weather app now includes GPS functionality and proper city search. 
            The weather data is simulated but changes based on your location and searched cities. 
            For production use, integrate with a real weather API service.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default WeatherDemo;
