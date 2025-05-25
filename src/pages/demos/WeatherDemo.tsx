
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Cloud, Sun, CloudRain, Snow, Wind, Thermometer, Eye, Droplets } from 'lucide-react';

const WeatherDemo = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState({
    temperature: 22,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    forecast: [
      { day: 'Today', temp: 22, condition: 'sunny' },
      { day: 'Tomorrow', temp: 18, condition: 'cloudy' },
      { day: 'Wed', temp: 15, condition: 'rainy' },
      { day: 'Thu', temp: 20, condition: 'sunny' },
      { day: 'Fri', temp: 16, condition: 'cloudy' }
    ]
  });

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy': return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy': return <CloudRain className="w-8 h-8 text-blue-500" />;
      case 'snowy': return <Snow className="w-8 h-8 text-blue-200" />;
      default: return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const handleSearch = () => {
    // Simulate API call with different weather for different cities
    const mockData: { [key: string]: any } = {
      'london': { temperature: 15, condition: 'cloudy', humidity: 80, windSpeed: 8 },
      'tokyo': { temperature: 25, condition: 'sunny', humidity: 55, windSpeed: 5 },
      'paris': { temperature: 18, condition: 'rainy', humidity: 75, windSpeed: 10 },
      'sydney': { temperature: 28, condition: 'sunny', humidity: 60, windSpeed: 15 }
    };

    const cityData = mockData[city.toLowerCase()] || weatherData;
    setWeatherData({ ...weatherData, ...cityData });
  };

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Weather Dashboard</h1>
          
          {/* Search Section */}
          <Card className="mb-8 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Search Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter city name..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600">
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current Weather */}
          <Card className="mb-8 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getWeatherIcon(weatherData.condition)}
                Current Weather in {city}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Thermometer className="w-6 h-6 mx-auto mb-2 text-red-500" />
                  <p className="text-2xl font-bold">{weatherData.temperature}°C</p>
                  <p className="text-sm text-gray-600">Temperature</p>
                </div>
                <div className="text-center">
                  <Droplets className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <p className="text-2xl font-bold">{weatherData.humidity}%</p>
                  <p className="text-sm text-gray-600">Humidity</p>
                </div>
                <div className="text-center">
                  <Wind className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                  <p className="text-2xl font-bold">{weatherData.windSpeed} km/h</p>
                  <p className="text-sm text-gray-600">Wind Speed</p>
                </div>
                <div className="text-center">
                  <Eye className="w-6 h-6 mx-auto mb-2 text-green-500" />
                  <p className="text-2xl font-bold">{weatherData.visibility} km</p>
                  <p className="text-sm text-gray-600">Visibility</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5-Day Forecast */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>5-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-gray-50">
                    <p className="font-semibold mb-2">{day.day}</p>
                    {getWeatherIcon(day.condition)}
                    <p className="text-lg font-bold mt-2">{day.temp}°C</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default WeatherDemo;
