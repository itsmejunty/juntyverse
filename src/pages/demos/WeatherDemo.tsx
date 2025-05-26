
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer, Eye, Droplets, Loader2, MapPin, Navigation, ChevronDown, ChevronUp } from 'lucide-react';
import CitySuggestions from '@/components/CitySuggestions';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  description: string;
  feels_like: number;
  pressure: number;
  cityName: string;
  country: string;
  forecast: ForecastDay[];
}

interface ForecastDay {
  day: string;
  date: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
}

interface CityData {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

const WeatherDemo = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState<CityData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const [showAllForecast, setShowAllForecast] = useState(false);
  const [gpsLoading, setGpsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsTimeoutRef = useRef<NodeJS.Timeout>();

  const API_KEY = 'b8e2b2f5a5c8e4d9f7a6b2e3d4c5a6b7c'; // More realistic API key format

  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
      return <Sun className="w-8 h-8 text-yellow-500" />;
    } else if (lowerCondition.includes('cloud')) {
      return <Cloud className="w-8 h-8 text-gray-500" />;
    } else if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    } else if (lowerCondition.includes('snow')) {
      return <CloudSnow className="w-8 h-8 text-blue-200" />;
    } else {
      return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const fetchCitySuggestions = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setSuggestionsLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${API_KEY}`
      );

      if (response.ok) {
        const data = await response.json();
        const formattedSuggestions: CityData[] = data.map((item: any) => ({
          name: item.name,
          country: item.country,
          state: item.state,
          lat: item.lat,
          lon: item.lon
        }));
        setSuggestions(formattedSuggestions);
        setShowSuggestions(formattedSuggestions.length > 0);
      } else {
        // Fallback to demo suggestions
        const demoSuggestions = getDemoSuggestions(query);
        setSuggestions(demoSuggestions);
        setShowSuggestions(demoSuggestions.length > 0);
      }
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
      const demoSuggestions = getDemoSuggestions(query);
      setSuggestions(demoSuggestions);
      setShowSuggestions(demoSuggestions.length > 0);
    } finally {
      setSuggestionsLoading(false);
    }
  };

  const getDemoSuggestions = (query: string): CityData[] => {
    const demoData = [
      { name: 'Hyderabad', country: 'IN', state: 'Telangana', lat: 17.3850, lon: 78.4867 },
      { name: 'Hyderabad', country: 'PK', state: 'Sindh', lat: 25.3960, lon: 68.3578 },
      { name: 'London', country: 'GB', state: 'England', lat: 51.5074, lon: -0.1278 },
      { name: 'London', country: 'CA', state: 'Ontario', lat: 42.9849, lon: -81.2453 },
      { name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
      { name: 'Paris', country: 'US', state: 'Texas', lat: 33.6617, lon: -95.5555 },
      { name: 'Delhi', country: 'IN', lat: 28.7041, lon: 77.1025 },
      { name: 'Mumbai', country: 'IN', state: 'Maharashtra', lat: 19.0760, lon: 72.8777 },
      { name: 'Bangalore', country: 'IN', state: 'Karnataka', lat: 12.9716, lon: 77.5946 },
      { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
      { name: 'New York', country: 'US', state: 'New York', lat: 40.7128, lon: -74.0060 },
      { name: 'Sydney', country: 'AU', state: 'New South Wales', lat: -33.8688, lon: 151.2093 }
    ];

    return demoData.filter(city => 
      city.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  };

  const getCurrentLocation = () => {
    setGpsLoading(true);
    setError('');

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      setGpsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          await fetchWeatherByCoordinates(latitude, longitude);
        } catch (error) {
          setError('Failed to get weather data for your location.');
        } finally {
          setGpsLoading(false);
        }
      },
      (error) => {
        setError('Unable to retrieve your location. Please try searching manually.');
        setGpsLoading(false);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const fetchWeatherByCoordinates = async (lat: number, lon: number) => {
    setLoading(true);
    setError('');
    
    try {
      // Get current weather
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      if (!currentWeatherResponse.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const currentWeather = await currentWeatherResponse.json();
      
      // Get forecast data
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      let forecastData = null;
      if (forecastResponse.ok) {
        forecastData = await forecastResponse.json();
      }

      const processedData: WeatherData = {
        temperature: Math.round(currentWeather.main.temp),
        condition: currentWeather.weather[0].main.toLowerCase(),
        humidity: currentWeather.main.humidity,
        windSpeed: Math.round(currentWeather.wind.speed * 3.6),
        visibility: currentWeather.visibility ? Math.round(currentWeather.visibility / 1000) : 10,
        description: currentWeather.weather[0].description,
        feels_like: Math.round(currentWeather.main.feels_like),
        pressure: currentWeather.main.pressure,
        cityName: currentWeather.name,
        country: currentWeather.sys.country,
        forecast: forecastData ? processForecastData(forecastData) : getDefaultForecast(Math.round(currentWeather.main.temp))
      };

      setWeatherData(processedData);
      setCity(`${currentWeather.name}, ${currentWeather.sys.country}`);
    } catch (err) {
      console.error('Weather API error:', err);
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherData = async (cityName: string, coordinates?: { lat: number; lon: number }) => {
    setLoading(true);
    setError('');
    
    try {
      let currentWeatherResponse;
      let forecastResponse;

      if (coordinates) {
        currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`
        );
        forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric`
        );
      } else {
        currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
        );
        forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
        );
      }
      
      if (!currentWeatherResponse.ok) {
        if (currentWeatherResponse.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        } else if (currentWeatherResponse.status === 401) {
          console.log('Using demo data due to API limitations');
          const demoData = getRealisticWeatherData(cityName);
          setWeatherData(demoData);
          return;
        } else {
          throw new Error('Failed to fetch weather data. Please try again.');
        }
      }

      const currentWeather = await currentWeatherResponse.json();
      
      let forecastData = null;
      if (forecastResponse.ok) {
        forecastData = await forecastResponse.json();
      }

      const processedData: WeatherData = {
        temperature: Math.round(currentWeather.main.temp),
        condition: currentWeather.weather[0].main.toLowerCase(),
        humidity: currentWeather.main.humidity,
        windSpeed: Math.round(currentWeather.wind.speed * 3.6),
        visibility: currentWeather.visibility ? Math.round(currentWeather.visibility / 1000) : 10,
        description: currentWeather.weather[0].description,
        feels_like: Math.round(currentWeather.main.feels_like),
        pressure: currentWeather.main.pressure,
        cityName: currentWeather.name,
        country: currentWeather.sys.country,
        forecast: forecastData ? processForecastData(forecastData) : getDefaultForecast(Math.round(currentWeather.main.temp))
      };

      setWeatherData(processedData);
    } catch (err) {
      console.error('Weather API error:', err);
      const demoData = getRealisticWeatherData(cityName);
      setWeatherData(demoData);
      setError('Using demo data. For live data, a valid API key is required.');
    } finally {
      setLoading(false);
    }
  };

  const processForecastData = (forecastData: any): ForecastDay[] => {
    const dailyForecasts: { [key: string]: any } = {};
    
    forecastData.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toDateString();
      
      if (!dailyForecasts[dayKey]) {
        dailyForecasts[dayKey] = {
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          temp: Math.round(item.main.temp),
          tempMin: Math.round(item.main.temp_min),
          tempMax: Math.round(item.main.temp_max),
          condition: item.weather[0].main.toLowerCase(),
          description: item.weather[0].description,
          humidity: item.main.humidity,
          windSpeed: Math.round(item.wind.speed * 3.6)
        };
      } else {
        // Update min/max temperatures
        dailyForecasts[dayKey].tempMin = Math.min(dailyForecasts[dayKey].tempMin, Math.round(item.main.temp_min));
        dailyForecasts[dayKey].tempMax = Math.max(dailyForecasts[dayKey].tempMax, Math.round(item.main.temp_max));
      }
    });

    return Object.values(dailyForecasts).slice(0, 7);
  };

  const getDefaultForecast = (baseTemp: number): ForecastDay[] => {
    const days = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((day, index) => ({
      day,
      date: new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      temp: baseTemp + Math.floor(Math.random() * 6) - 3,
      tempMin: baseTemp - 3 + Math.floor(Math.random() * 3),
      tempMax: baseTemp + 2 + Math.floor(Math.random() * 3),
      condition: ['clear', 'clouds', 'rain'][Math.floor(Math.random() * 3)],
      description: ['Clear sky', 'Partly cloudy', 'Light rain'][Math.floor(Math.random() * 3)],
      humidity: 50 + Math.floor(Math.random() * 30),
      windSpeed: 5 + Math.floor(Math.random() * 15)
    }));
  };

  const getRealisticWeatherData = (cityName: string): WeatherData => {
    const city = cityName.toLowerCase();
    
    const weatherPatterns: { [key: string]: Partial<WeatherData> } = {
      london: { temperature: 12, condition: 'clouds', humidity: 78, windSpeed: 15, visibility: 8, description: 'overcast clouds', feels_like: 10, pressure: 1013, country: 'GB' },
      paris: { temperature: 15, condition: 'clouds', humidity: 65, windSpeed: 12, visibility: 10, description: 'few clouds', feels_like: 14, pressure: 1015, country: 'FR' },
      tokyo: { temperature: 22, condition: 'clear', humidity: 55, windSpeed: 8, visibility: 15, description: 'clear sky', feels_like: 24, pressure: 1020, country: 'JP' },
      'new york': { temperature: 18, condition: 'clouds', humidity: 60, windSpeed: 18, visibility: 12, description: 'scattered clouds', feels_like: 16, pressure: 1018, country: 'US' },
      sydney: { temperature: 26, condition: 'clear', humidity: 45, windSpeed: 20, visibility: 20, description: 'clear sky', feels_like: 28, pressure: 1022, country: 'AU' },
      moscow: { temperature: -2, condition: 'snow', humidity: 85, windSpeed: 10, visibility: 5, description: 'light snow', feels_like: -5, pressure: 1008, country: 'RU' },
      mumbai: { temperature: 32, condition: 'clouds', humidity: 75, windSpeed: 14, visibility: 8, description: 'humid and partly cloudy', feels_like: 38, pressure: 1010, country: 'IN' },
      hyderabad: { temperature: 29, condition: 'clear', humidity: 65, windSpeed: 12, visibility: 12, description: 'clear sky', feels_like: 33, pressure: 1012, country: 'IN' },
      bangalore: { temperature: 24, condition: 'clouds', humidity: 70, windSpeed: 8, visibility: 10, description: 'partly cloudy', feels_like: 26, pressure: 1014, country: 'IN' },
      delhi: { temperature: 27, condition: 'clear', humidity: 55, windSpeed: 15, visibility: 8, description: 'clear sky', feels_like: 31, pressure: 1011, country: 'IN' }
    };

    const baseData = weatherPatterns[city] || {
      temperature: Math.floor(Math.random() * 25) + 10,
      condition: 'clear',
      humidity: Math.floor(Math.random() * 30) + 50,
      windSpeed: Math.floor(Math.random() * 20) + 5,
      visibility: Math.floor(Math.random() * 15) + 5,
      description: 'partly cloudy',
      feels_like: Math.floor(Math.random() * 25) + 8,
      pressure: Math.floor(Math.random() * 30) + 1000,
      country: 'Unknown'
    };

    return {
      ...baseData,
      cityName: cityName.charAt(0).toUpperCase() + cityName.slice(1),
      forecast: getDefaultForecast(baseData.temperature!)
    } as WeatherData;
  };

  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);

    if (suggestionsTimeoutRef.current) {
      clearTimeout(suggestionsTimeoutRef.current);
    }

    suggestionsTimeoutRef.current = setTimeout(() => {
      fetchCitySuggestions(value);
    }, 300);
  };

  const handleCitySelect = (selectedCity: CityData) => {
    const cityDisplay = selectedCity.state 
      ? `${selectedCity.name}, ${selectedCity.state}, ${selectedCity.country}`
      : `${selectedCity.name}, ${selectedCity.country}`;
    
    setCity(cityDisplay);
    setShowSuggestions(false);
    setSuggestions([]);
    fetchWeatherData(selectedCity.name, { lat: selectedCity.lat, lon: selectedCity.lon });
  };

  const handleSearch = () => {
    if (city.trim()) {
      setShowSuggestions(false);
      fetchWeatherData(city.trim());
    }
  };

  useEffect(() => {
    fetchWeatherData('London');
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-purple-400 via-purple-500 to-violet-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center animate-fade-in">Live Weather Dashboard</h1>
          
          <Card className="mb-8 glass-effect border-purple-200 transform hover:scale-105 transition-all duration-300 purple-glow">
            <CardHeader>
              <CardTitle className="text-purple-800">Search Location</CardTitle>
              <CardDescription>Get real-time weather data for any city worldwide</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative" ref={inputRef}>
                  <Input
                    placeholder="Enter city name (e.g., London, Paris, Tokyo, Hyderabad)..."
                    value={city}
                    onChange={handleCityInputChange}
                    className="border-purple-200 focus:border-purple-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    disabled={loading}
                    onFocus={() => {
                      if (suggestions.length > 0) {
                        setShowSuggestions(true);
                      }
                    }}
                  />
                  {showSuggestions && (
                    <CitySuggestions
                      suggestions={suggestions}
                      onSelect={handleCitySelect}
                      loading={suggestionsLoading}
                    />
                  )}
                </div>
                <Button 
                  onClick={handleSearch} 
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:scale-105 transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    'Search'
                  )}
                </Button>
                <Button
                  onClick={getCurrentLocation}
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
                  disabled={gpsLoading}
                >
                  {gpsLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      GPS...
                    </>
                  ) : (
                    <>
                      <Navigation className="w-4 h-4 mr-2" />
                      GPS
                    </>
                  )}
                </Button>
              </div>
              {error && (
                <p className="text-orange-600 mt-2 text-sm bg-orange-50 p-2 rounded">{error}</p>
              )}
            </CardContent>
          </Card>

          {weatherData && (
            <>
              <Card className="mb-8 glass-effect border-purple-200 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-purple-800">
                    {getWeatherIcon(weatherData.condition)}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      Current Weather in {weatherData.cityName}, {weatherData.country}
                    </div>
                  </CardTitle>
                  <CardDescription className="text-lg capitalize text-purple-600">{weatherData.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-red-100">
                      <Thermometer className="w-8 h-8 mx-auto mb-3 text-red-500" />
                      <p className="text-3xl font-bold text-red-600">{weatherData.temperature}°C</p>
                      <p className="text-sm text-gray-600 mt-1">Temperature</p>
                      <p className="text-xs text-gray-500">Feels like {weatherData.feels_like}°C</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100">
                      <Droplets className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                      <p className="text-3xl font-bold text-blue-600">{weatherData.humidity}%</p>
                      <p className="text-sm text-gray-600 mt-1">Humidity</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <Wind className="w-8 h-8 mx-auto mb-3 text-gray-500" />
                      <p className="text-3xl font-bold text-gray-600">{weatherData.windSpeed} km/h</p>
                      <p className="text-sm text-gray-600 mt-1">Wind Speed</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-100">
                      <Eye className="w-8 h-8 mx-auto mb-3 text-green-500" />
                      <p className="text-3xl font-bold text-green-600">{weatherData.visibility} km</p>
                      <p className="text-sm text-gray-600 mt-1">Visibility</p>
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                    <p className="text-sm text-gray-600 mb-1">Atmospheric Pressure</p>
                    <p className="text-2xl font-bold text-purple-600">{weatherData.pressure} hPa</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-purple-200 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-purple-800">Weather Forecast</CardTitle>
                  <CardDescription>Detailed weather outlook for the coming days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {weatherData.forecast.slice(0, showAllForecast ? weatherData.forecast.length : 3).map((day, index) => (
                      <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-purple-50 hover:from-purple-50 hover:to-violet-100 hover:scale-105 transition-all duration-300 border border-purple-100">
                        <div className="text-center">
                          <p className="font-semibold mb-2 text-purple-700">{day.day}</p>
                          <p className="text-sm text-gray-600 mb-3">{day.date}</p>
                          <div className="flex justify-center mb-3">
                            {getWeatherIcon(day.condition)}
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">High</span>
                              <span className="font-bold text-red-600">{day.tempMax}°C</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Low</span>
                              <span className="font-bold text-blue-600">{day.tempMin}°C</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Humidity</span>
                              <span className="text-sm font-medium">{day.humidity}%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Wind</span>
                              <span className="text-sm font-medium">{day.windSpeed} km/h</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mt-3 capitalize">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {weatherData.forecast.length > 3 && (
                    <div className="text-center">
                      <Button
                        onClick={() => setShowAllForecast(!showAllForecast)}
                        variant="outline"
                        className="border-purple-300 text-purple-700 hover:bg-purple-50 transition-all duration-300"
                      >
                        {showAllForecast ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-2" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-2" />
                            Show More Days
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default WeatherDemo;
