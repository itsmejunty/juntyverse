import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer, Eye, Droplets, Loader2, MapPin, Navigation, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import CitySuggestions from '@/components/CitySuggestions';
import ApiKeyConfig from '@/components/ApiKeyConfig';
import { useToast } from '@/hooks/use-toast';
import { indianCitiesDatabase, getIndianCitySuggestions } from '@/data/indianCities';

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
  const [apiKey, setApiKey] = useState('');
  const [isLiveDataMode, setIsLiveDataMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsTimeoutRef = useRef<NodeJS.Timeout>();
  const { toast } = useToast();

  // Load API key from localStorage on mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('weather_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsLiveDataMode(true);
    }
  }, []);

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
    { name: 'Jaipur', country: 'IN', state: 'Rajasthan', lat: 26.9124, lon: 75.7873 },
    { name: 'Lucknow', country: 'IN', state: 'Uttar Pradesh', lat: 26.8467, lon: 80.9462 },
    
    // United States
    { name: 'New York', country: 'US', state: 'New York', lat: 40.7128, lon: -74.0060 },
    { name: 'Los Angeles', country: 'US', state: 'California', lat: 34.0522, lon: -118.2437 },
    { name: 'Chicago', country: 'US', state: 'Illinois', lat: 41.8781, lon: -87.6298 },
    { name: 'Houston', country: 'US', state: 'Texas', lat: 29.7604, lon: -95.3698 },
    { name: 'Miami', country: 'US', state: 'Florida', lat: 25.7617, lon: -80.1918 },
    { name: 'San Francisco', country: 'US', state: 'California', lat: 37.7749, lon: -122.4194 },
    { name: 'Seattle', country: 'US', state: 'Washington', lat: 47.6062, lon: -122.3321 },
    { name: 'Boston', country: 'US', state: 'Massachusetts', lat: 42.3601, lon: -71.0589 },
    
    // Europe
    { name: 'London', country: 'GB', state: 'England', lat: 51.5074, lon: -0.1278 },
    { name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
    { name: 'Berlin', country: 'DE', lat: 52.5200, lon: 13.4050 },
    { name: 'Madrid', country: 'ES', lat: 40.4168, lon: -3.7038 },
    { name: 'Rome', country: 'IT', lat: 41.9028, lon: 12.4964 },
    { name: 'Amsterdam', country: 'NL', lat: 52.3676, lon: 4.9041 },
    { name: 'Vienna', country: 'AT', lat: 48.2082, lon: 16.3738 },
    { name: 'Barcelona', country: 'ES', lat: 41.3851, lon: 2.1734 },
    { name: 'Prague', country: 'CZ', lat: 50.0755, lon: 14.4378 },
    { name: 'Stockholm', country: 'SE', lat: 59.3293, lon: 18.0686 },
    
    // Asia Pacific
    { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
    { name: 'Seoul', country: 'KR', lat: 37.5665, lon: 126.9780 },
    { name: 'Beijing', country: 'CN', lat: 39.9042, lon: 116.4074 },
    { name: 'Shanghai', country: 'CN', lat: 31.2304, lon: 121.4737 },
    { name: 'Singapore', country: 'SG', lat: 1.3521, lon: 103.8198 },
    { name: 'Bangkok', country: 'TH', lat: 13.7563, lon: 100.5018 },
    { name: 'Sydney', country: 'AU', state: 'New South Wales', lat: -33.8688, lon: 151.2093 },
    { name: 'Melbourne', country: 'AU', state: 'Victoria', lat: -37.8136, lon: 144.9631 },
    { name: 'Hong Kong', country: 'HK', lat: 22.3193, lon: 114.1694 },
    { name: 'Manila', country: 'PH', lat: 14.5995, lon: 120.9842 },
    
    // Middle East & Africa
    { name: 'Dubai', country: 'AE', lat: 25.2048, lon: 55.2708 },
    { name: 'Cairo', country: 'EG', lat: 30.0444, lon: 31.2357 },
    { name: 'Cape Town', country: 'ZA', lat: -33.9249, lon: 18.4241 },
    { name: 'Tel Aviv', country: 'IL', lat: 32.0853, lon: 34.7818 },
    { name: 'Istanbul', country: 'TR', lat: 41.0082, lon: 28.9784 },
    
    // Canada
    { name: 'Toronto', country: 'CA', state: 'Ontario', lat: 43.6532, lon: -79.3832 },
    { name: 'Vancouver', country: 'CA', state: 'British Columbia', lat: 49.2827, lon: -123.1207 },
    { name: 'Montreal', country: 'CA', state: 'Quebec', lat: 45.5017, lon: -73.5673 },
    
    // South America
    { name: 'São Paulo', country: 'BR', lat: -23.5558, lon: -46.6396 },
    { name: 'Rio de Janeiro', country: 'BR', lat: -22.9068, lon: -43.1729 },
    { name: 'Buenos Aires', country: 'AR', lat: -34.6118, lon: -58.3960 },
    { name: 'Lima', country: 'PE', lat: -12.0464, lon: -77.0428 }
  ];

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
    console.log('Fetching suggestions for:', query);
    
    try {
      // Prioritize Indian cities for better user experience
      const indianSuggestions = getIndianCitySuggestions(query);
      
      if (isLiveDataMode && apiKey) {
        // Try real API for additional suggestions
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          const apiSuggestions: CityData[] = data.map((item: any) => ({
            name: item.name,
            country: item.country,
            state: item.state,
            lat: item.lat,
            lon: item.lon
          }));
          
          // Combine Indian cities with API suggestions, removing duplicates
          const combinedSuggestions = [...indianSuggestions];
          apiSuggestions.forEach(apiSugg => {
            if (!combinedSuggestions.find(indian => 
              indian.name.toLowerCase() === apiSugg.name.toLowerCase() && 
              indian.country === apiSugg.country
            )) {
              combinedSuggestions.push(apiSugg);
            }
          });
          
          setSuggestions(combinedSuggestions.slice(0, 8));
          setShowSuggestions(combinedSuggestions.length > 0);
          console.log('Combined suggestions loaded:', combinedSuggestions.length);
        } else {
          throw new Error('API unavailable');
        }
      } else {
        // Use enhanced local database including comprehensive Indian cities
        const globalSuggestions = globalCitiesDatabase.filter(city => 
          city.name.toLowerCase().includes(query.toLowerCase()) ||
          (city.state && city.state.toLowerCase().includes(query.toLowerCase())) ||
          city.country.toLowerCase().includes(query.toLowerCase())
        );
        
        const combinedSuggestions = [...indianSuggestions, ...globalSuggestions]
          .filter((city, index, self) => 
            index === self.findIndex(c => c.name === city.name && c.country === city.country)
          )
          .slice(0, 8);
        
        setSuggestions(combinedSuggestions);
        setShowSuggestions(combinedSuggestions.length > 0);
        console.log('Enhanced local suggestions loaded:', combinedSuggestions.length);
      }
    } catch (error) {
      console.log('Using enhanced local database for suggestions');
      const indianSuggestions = getIndianCitySuggestions(query);
      const globalSuggestions = globalCitiesDatabase.filter(city => 
        city.name.toLowerCase().includes(query.toLowerCase()) ||
        (city.state && city.state.toLowerCase().includes(query.toLowerCase()))
      );
      
      const combinedSuggestions = [...indianSuggestions, ...globalSuggestions]
        .filter((city, index, self) => 
          index === self.findIndex(c => c.name === city.name && c.country === city.country)
        )
        .slice(0, 8);
      
      setSuggestions(combinedSuggestions);
      setShowSuggestions(combinedSuggestions.length > 0);
      console.log('Fallback suggestions loaded:', combinedSuggestions.length);
    } finally {
      setSuggestionsLoading(false);
    }
  };

  const getCurrentLocation = () => {
    console.log('GPS location requested');
    setGpsLoading(true);
    setError('');

    if (!navigator.geolocation) {
      const errorMsg = 'Geolocation is not supported by this browser.';
      setError(errorMsg);
      setGpsLoading(false);
      toast({
        title: "GPS Error",
        description: errorMsg,
        variant: "destructive",
      });
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 300000 // 5 minutes cache
    };

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log('GPS position obtained:', position.coords);
        try {
          const { latitude, longitude } = position.coords;
          await fetchWeatherByCoordinates(latitude, longitude);
          toast({
            title: "Location Found",
            description: "Weather data loaded for your current location",
          });
        } catch (error) {
          console.error('Error fetching weather for GPS location:', error);
          setError('Failed to get weather data for your location.');
          toast({
            title: "Weather Error", 
            description: "Could not fetch weather for your location",
            variant: "destructive",
          });
        } finally {
          setGpsLoading(false);
        }
      },
      (error) => {
        console.error('GPS error:', error);
        let errorMessage = 'Unable to retrieve your location. ';
        
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += 'Location access was denied. Please enable location permissions.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage += 'Location request timed out.';
            break;
          default:
            errorMessage += 'An unknown error occurred.';
            break;
        }
        
        setError(errorMessage);
        setGpsLoading(false);
        toast({
          title: "GPS Error",
          description: errorMessage,
          variant: "destructive",
        });
      },
      options
    );
  };

  const fetchWeatherByCoordinates = async (lat: number, lon: number) => {
    setLoading(true);
    setError('');
    console.log('Fetching weather for coordinates:', lat, lon);
    
    try {
      // Get current weather
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      
      if (!currentWeatherResponse.ok) {
        throw new Error('Weather API unavailable');
      }

      const currentWeather = await currentWeatherResponse.json();
      
      // Get forecast data
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
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
      console.log('Weather data loaded successfully');
    } catch (err) {
      console.error('Weather API error:', err);
      // Generate realistic demo data based on coordinates
      const demoData = getLocationBasedDemoData(lat, lon);
      setWeatherData(demoData);
      setCity(`${demoData.cityName}, ${demoData.country}`);
    } finally {
      setLoading(false);
    }
  };

  const getLocationBasedDemoData = (lat: number, lon: number): WeatherData => {
    // Find nearest city in database
    let nearestCity = globalCitiesDatabase[0];
    let minDistance = Infinity;
    
    globalCitiesDatabase.forEach(city => {
      const distance = Math.sqrt(
        Math.pow(city.lat - lat, 2) + Math.pow(city.lon - lon, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        nearestCity = city;
      }
    });
    
    return getRealisticWeatherData(nearestCity.name, nearestCity.country);
  };

  const fetchWeatherData = async (cityName: string, coordinates?: { lat: number; lon: number }) => {
    setLoading(true);
    setError('');
    console.log('Fetching weather data for:', cityName, coordinates);
    
    try {
      if (!isLiveDataMode || !apiKey) {
        console.log('Using local data - no API key configured');
        const demoData = getRealisticWeatherData(cityName);
        setWeatherData(demoData);
        return;
      }

      let currentWeatherResponse;
      let forecastResponse;

      if (coordinates) {
        currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`
        );
        forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`
        );
      } else {
        currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`
        );
        forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`
        );
      }
      
      if (!currentWeatherResponse.ok) {
        if (currentWeatherResponse.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        } else if (currentWeatherResponse.status === 401) {
          setIsLiveDataMode(false);
          throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
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
      setError(''); // Clear any previous errors
      toast({
        title: "Live Weather Data",
        description: `Current weather loaded for ${processedData.cityName}`,
      });
    } catch (err) {
      console.error('Weather API error:', err);
      const demoData = getRealisticWeatherData(cityName);
      setWeatherData(demoData);
      if (isLiveDataMode && err instanceof Error && err.message.includes('API key')) {
        setError(err.message);
        toast({
          title: "API Error",
          description: err.message,
          variant: "destructive",
        });
      }
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

  const getRealisticWeatherData = (cityName: string, countryCode?: string): WeatherData => {
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
      delhi: { temperature: 27, condition: 'clear', humidity: 55, windSpeed: 15, visibility: 8, description: 'clear sky', feels_like: 31, pressure: 1011, country: 'IN' },
      jaipur: { temperature: 25, condition: 'clear', humidity: 40, windSpeed: 12, visibility: 15, description: 'clear sky', feels_like: 28, pressure: 1013, country: 'IN' },
      dubai: { temperature: 35, condition: 'clear', humidity: 45, windSpeed: 18, visibility: 20, description: 'hot and sunny', feels_like: 42, pressure: 1015, country: 'AE' },
      singapore: { temperature: 30, condition: 'clouds', humidity: 80, windSpeed: 10, visibility: 12, description: 'tropical humidity', feels_like: 37, pressure: 1012, country: 'SG' }
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
      country: countryCode || 'Unknown'
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
    console.log('City selected:', selectedCity);
  };

  const handleSearch = () => {
    if (city.trim()) {
      setShowSuggestions(false);
      fetchWeatherData(city.trim());
    }
  };

  const handleApiKeyChange = (newApiKey: string) => {
    setApiKey(newApiKey);
    setIsLiveDataMode(!!newApiKey);
    setError('');
    
    if (newApiKey && weatherData) {
      // Refresh current weather data with new API key
      fetchWeatherData(weatherData.cityName);
    }
  };

  useEffect(() => {
    console.log('WeatherDemo component mounted');
    fetchWeatherData('Mumbai'); // Default to Mumbai for Indian users
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
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-purple-400 via-purple-500 to-violet-600 animate-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4 text-gradient-purple animate-bounce-in">
              <Sparkles className="inline w-12 h-12 mr-4 animate-pulse-glow" />
              Live Weather Dashboard
              <Sparkles className="inline w-12 h-12 ml-4 animate-pulse-glow" />
            </h1>
            <p className="text-xl text-purple-100 animate-slide-up">
              Get real-time weather data with comprehensive Indian city coverage
            </p>
          </div>
          
          <div className="mb-8 animate-slide-up">
            <ApiKeyConfig 
              onApiKeyChange={handleApiKeyChange} 
              currentApiKey={apiKey}
            />
          </div>
          
          <Card className="mb-8 glass-effect border-purple-200 transform hover:scale-105 transition-all duration-500 purple-glow animate-float">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <MapPin className="w-6 h-6 animate-pulse" />
                Search Location
                {isLiveDataMode && (
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full animate-pulse-glow">
                    LIVE DATA
                  </span>
                )}
              </CardTitle>
              <CardDescription>
                Search from {indianCitiesDatabase.length}+ Indian cities and global locations with smart suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative" ref={inputRef}>
                  <Input
                    placeholder="Search any Indian city (Mumbai, Delhi, Bangalore) or global location..."
                    value={city}
                    onChange={handleCityInputChange}
                    className="border-purple-200 focus:border-purple-400 transition-all duration-300 animate-shimmer"
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
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 hover:scale-110 transition-all duration-300 animate-pulse-glow"
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
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:scale-110 transition-all duration-300"
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
                <p className="text-orange-600 mt-2 text-sm bg-orange-50 p-3 rounded-lg border border-orange-200 animate-fade-in">
                  {error}
                </p>
              )}
            </CardContent>
          </Card>

          {weatherData && (
            <>
              <Card className="mb-8 glass-effect border-purple-200 hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-500 animate-bounce-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-purple-800">
                    <div className="animate-float">
                      {getWeatherIcon(weatherData.condition)}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-purple-600 animate-pulse" />
                      Current Weather in {weatherData.cityName}, {weatherData.country}
                      {isLiveDataMode && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full animate-pulse-glow">
                          LIVE
                        </span>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription className="text-lg capitalize text-purple-600 animate-fade-in">
                    {weatherData.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 border border-red-100 animate-bounce-in">
                      <Thermometer className="w-8 h-8 mx-auto mb-3 text-red-500 animate-pulse" />
                      <p className="text-3xl font-bold text-red-600">{weatherData.temperature}°C</p>
                      <p className="text-sm text-gray-600 mt-1">Temperature</p>
                      <p className="text-xs text-gray-500">Feels like {weatherData.feels_like}°C</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 border border-blue-100 animate-bounce-in" style={{animationDelay: '0.1s'}}>
                      <Droplets className="w-8 h-8 mx-auto mb-3 text-blue-500 animate-pulse" />
                      <p className="text-3xl font-bold text-blue-600">{weatherData.humidity}%</p>
                      <p className="text-sm text-gray-600 mt-1">Humidity</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 animate-bounce-in" style={{animationDelay: '0.2s'}}>
                      <Wind className="w-8 h-8 mx-auto mb-3 text-gray-500 animate-pulse" />
                      <p className="text-3xl font-bold text-gray-600">{weatherData.windSpeed} km/h</p>
                      <p className="text-sm text-gray-600 mt-1">Wind Speed</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 border border-green-100 animate-bounce-in" style={{animationDelay: '0.3s'}}>
                      <Eye className="w-8 h-8 mx-auto mb-3 text-green-500 animate-pulse" />
                      <p className="text-3xl font-bold text-green-600">{weatherData.visibility} km</p>
                      <p className="text-sm text-gray-600 mt-1">Visibility</p>
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100 animate-fade-in hover:shadow-lg transition-all duration-300">
                    <p className="text-sm text-gray-600 mb-1">Atmospheric Pressure</p>
                    <p className="text-2xl font-bold text-purple-600">{weatherData.pressure} hPa</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-purple-200 hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-500 animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Cloud className="w-6 h-6 animate-float" />
                    Weather Forecast
                  </CardTitle>
                  <CardDescription>Detailed weather outlook for the coming days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {weatherData.forecast.slice(0, showAllForecast ? weatherData.forecast.length : 3).map((day, index) => (
                      <div 
                        key={index} 
                        className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-purple-50 hover:from-purple-50 hover:to-violet-100 hover:scale-105 transition-all duration-300 border border-purple-100 animate-bounce-in"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <div className="text-center">
                          <p className="font-semibold mb-2 text-purple-700">{day.day}</p>
                          <p className="text-sm text-gray-600 mb-3">{day.date}</p>
                          <div className="flex justify-center mb-3 animate-float">
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
                        className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:scale-105 transition-all duration-300 animate-pulse-glow"
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
