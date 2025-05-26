
import React from 'react';
import { MapPin } from 'lucide-react';

interface CityData {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

interface CitySuggestionsProps {
  suggestions: CityData[];
  onSelect: (city: CityData) => void;
  loading: boolean;
}

const CitySuggestions: React.FC<CitySuggestionsProps> = ({ suggestions, onSelect, loading }) => {
  if (loading) {
    return (
      <div className="absolute top-full left-0 right-0 bg-white border border-purple-200 rounded-lg shadow-lg z-50 p-4">
        <div className="text-center text-purple-600">Loading suggestions...</div>
      </div>
    );
  }

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-purple-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
      {suggestions.map((city, index) => (
        <div
          key={`${city.name}-${city.country}-${index}`}
          className="p-3 hover:bg-purple-50 cursor-pointer border-b border-purple-100 last:border-b-0 flex items-center gap-2"
          onClick={() => onSelect(city)}
        >
          <MapPin className="w-4 h-4 text-purple-500" />
          <div>
            <div className="font-medium text-gray-800">
              {city.name}
            </div>
            <div className="text-sm text-gray-600">
              {city.state ? `${city.state}, ` : ''}{city.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CitySuggestions;
