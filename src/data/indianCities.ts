
export interface IndianCity {
  name: string;
  state: string;
  lat: number;
  lon: number;
  country: 'IN';
}

export const indianCitiesDatabase: IndianCity[] = [
  // Maharashtra
  { name: 'Mumbai', state: 'Maharashtra', lat: 19.0760, lon: 72.8777, country: 'IN' },
  { name: 'Pune', state: 'Maharashtra', lat: 18.5204, lon: 73.8567, country: 'IN' },
  { name: 'Nagpur', state: 'Maharashtra', lat: 21.1458, lon: 79.0882, country: 'IN' },
  { name: 'Nashik', state: 'Maharashtra', lat: 19.9975, lon: 73.7898, country: 'IN' },
  { name: 'Aurangabad', state: 'Maharashtra', lat: 19.8762, lon: 75.3433, country: 'IN' },
  { name: 'Solapur', state: 'Maharashtra', lat: 17.6599, lon: 75.9064, country: 'IN' },
  { name: 'Kolhapur', state: 'Maharashtra', lat: 16.7050, lon: 74.2433, country: 'IN' },
  { name: 'Amravati', state: 'Maharashtra', lat: 20.9319, lon: 77.7523, country: 'IN' },

  // Delhi
  { name: 'New Delhi', state: 'Delhi', lat: 28.6139, lon: 77.2090, country: 'IN' },
  { name: 'Delhi', state: 'Delhi', lat: 28.7041, lon: 77.1025, country: 'IN' },

  // Karnataka
  { name: 'Bangalore', state: 'Karnataka', lat: 12.9716, lon: 77.5946, country: 'IN' },
  { name: 'Mysore', state: 'Karnataka', lat: 12.2958, lon: 76.6394, country: 'IN' },
  { name: 'Hubli', state: 'Karnataka', lat: 15.3647, lon: 75.1240, country: 'IN' },
  { name: 'Mangalore', state: 'Karnataka', lat: 12.9141, lon: 74.8560, country: 'IN' },
  { name: 'Belgaum', state: 'Karnataka', lat: 15.8497, lon: 74.4977, country: 'IN' },
  { name: 'Gulbarga', state: 'Karnataka', lat: 17.3297, lon: 76.8343, country: 'IN' },
  { name: 'Davangere', state: 'Karnataka', lat: 14.4644, lon: 75.9218, country: 'IN' },

  // Tamil Nadu
  { name: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lon: 80.2707, country: 'IN' },
  { name: 'Coimbatore', state: 'Tamil Nadu', lat: 11.0168, lon: 76.9558, country: 'IN' },
  { name: 'Madurai', state: 'Tamil Nadu', lat: 9.9252, lon: 78.1198, country: 'IN' },
  { name: 'Tiruchirappalli', state: 'Tamil Nadu', lat: 10.7905, lon: 78.7047, country: 'IN' },
  { name: 'Salem', state: 'Tamil Nadu', lat: 11.6643, lon: 78.1460, country: 'IN' },
  { name: 'Tirunelveli', state: 'Tamil Nadu', lat: 8.7139, lon: 77.7567, country: 'IN' },
  { name: 'Erode', state: 'Tamil Nadu', lat: 11.3410, lon: 77.7172, country: 'IN' },
  { name: 'Vellore', state: 'Tamil Nadu', lat: 12.9165, lon: 79.1325, country: 'IN' },

  // Telangana
  { name: 'Hyderabad', state: 'Telangana', lat: 17.3850, lon: 78.4867, country: 'IN' },
  { name: 'Warangal', state: 'Telangana', lat: 17.9689, lon: 79.5941, country: 'IN' },
  { name: 'Nizamabad', state: 'Telangana', lat: 18.6725, lon: 78.0941, country: 'IN' },
  { name: 'Karimnagar', state: 'Telangana', lat: 18.4386, lon: 79.1288, country: 'IN' },

  // West Bengal
  { name: 'Kolkata', state: 'West Bengal', lat: 22.5726, lon: 88.3639, country: 'IN' },
  { name: 'Howrah', state: 'West Bengal', lat: 22.5958, lon: 88.2636, country: 'IN' },
  { name: 'Durgapur', state: 'West Bengal', lat: 23.4819, lon: 87.3119, country: 'IN' },
  { name: 'Asansol', state: 'West Bengal', lat: 23.6739, lon: 86.9524, country: 'IN' },
  { name: 'Siliguri', state: 'West Bengal', lat: 26.7271, lon: 88.3953, country: 'IN' },

  // Gujarat
  { name: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lon: 72.5714, country: 'IN' },
  { name: 'Surat', state: 'Gujarat', lat: 21.1702, lon: 72.8311, country: 'IN' },
  { name: 'Vadodara', state: 'Gujarat', lat: 22.3072, lon: 73.1812, country: 'IN' },
  { name: 'Rajkot', state: 'Gujarat', lat: 22.3039, lon: 70.8022, country: 'IN' },
  { name: 'Bhavnagar', state: 'Gujarat', lat: 21.7645, lon: 72.1519, country: 'IN' },
  { name: 'Jamnagar', state: 'Gujarat', lat: 22.4707, lon: 70.0577, country: 'IN' },
  { name: 'Gandhinagar', state: 'Gujarat', lat: 23.2156, lon: 72.6369, country: 'IN' },

  // Rajasthan
  { name: 'Jaipur', state: 'Rajasthan', lat: 26.9124, lon: 75.7873, country: 'IN' },
  { name: 'Jodhpur', state: 'Rajasthan', lat: 26.2389, lon: 73.0243, country: 'IN' },
  { name: 'Udaipur', state: 'Rajasthan', lat: 24.5854, lon: 73.7125, country: 'IN' },
  { name: 'Kota', state: 'Rajasthan', lat: 25.2138, lon: 75.8648, country: 'IN' },
  { name: 'Bikaner', state: 'Rajasthan', lat: 28.0229, lon: 73.3119, country: 'IN' },
  { name: 'Ajmer', state: 'Rajasthan', lat: 26.4499, lon: 74.6399, country: 'IN' },

  // Uttar Pradesh
  { name: 'Lucknow', state: 'Uttar Pradesh', lat: 26.8467, lon: 80.9462, country: 'IN' },
  { name: 'Kanpur', state: 'Uttar Pradesh', lat: 26.4499, lon: 80.3319, country: 'IN' },
  { name: 'Agra', state: 'Uttar Pradesh', lat: 27.1767, lon: 78.0081, country: 'IN' },
  { name: 'Varanasi', state: 'Uttar Pradesh', lat: 25.3176, lon: 82.9739, country: 'IN' },
  { name: 'Meerut', state: 'Uttar Pradesh', lat: 28.9845, lon: 77.7064, country: 'IN' },
  { name: 'Allahabad', state: 'Uttar Pradesh', lat: 25.4358, lon: 81.8463, country: 'IN' },
  { name: 'Bareilly', state: 'Uttar Pradesh', lat: 28.3670, lon: 79.4304, country: 'IN' },
  { name: 'Ghaziabad', state: 'Uttar Pradesh', lat: 28.6692, lon: 77.4538, country: 'IN' },

  // Madhya Pradesh
  { name: 'Bhopal', state: 'Madhya Pradesh', lat: 23.2599, lon: 77.4126, country: 'IN' },
  { name: 'Indore', state: 'Madhya Pradesh', lat: 22.7196, lon: 75.8577, country: 'IN' },
  { name: 'Gwalior', state: 'Madhya Pradesh', lat: 26.2183, lon: 78.1828, country: 'IN' },
  { name: 'Jabalpur', state: 'Madhya Pradesh', lat: 23.1815, lon: 79.9864, country: 'IN' },
  { name: 'Ujjain', state: 'Madhya Pradesh', lat: 23.1765, lon: 75.7885, country: 'IN' },

  // Bihar
  { name: 'Patna', state: 'Bihar', lat: 25.5941, lon: 85.1376, country: 'IN' },
  { name: 'Gaya', state: 'Bihar', lat: 24.7914, lon: 85.0002, country: 'IN' },
  { name: 'Bhagalpur', state: 'Bihar', lat: 25.2425, lon: 86.9842, country: 'IN' },
  { name: 'Muzaffarpur', state: 'Bihar', lat: 26.1197, lon: 85.3910, country: 'IN' },

  // Odisha
  { name: 'Bhubaneswar', state: 'Odisha', lat: 20.2961, lon: 85.8245, country: 'IN' },
  { name: 'Cuttack', state: 'Odisha', lat: 20.4625, lon: 85.8828, country: 'IN' },
  { name: 'Berhampur', state: 'Odisha', lat: 19.3149, lon: 84.7941, country: 'IN' },

  // Punjab
  { name: 'Chandigarh', state: 'Punjab', lat: 30.7333, lon: 76.7794, country: 'IN' },
  { name: 'Ludhiana', state: 'Punjab', lat: 30.9010, lon: 75.8573, country: 'IN' },
  { name: 'Amritsar', state: 'Punjab', lat: 31.6340, lon: 74.8723, country: 'IN' },
  { name: 'Jalandhar', state: 'Punjab', lat: 31.3260, lon: 75.5762, country: 'IN' },

  // Kerala
  { name: 'Thiruvananthapuram', state: 'Kerala', lat: 8.5241, lon: 76.9366, country: 'IN' },
  { name: 'Kochi', state: 'Kerala', lat: 9.9312, lon: 76.2673, country: 'IN' },
  { name: 'Kozhikode', state: 'Kerala', lat: 11.2588, lon: 75.7804, country: 'IN' },
  { name: 'Thrissur', state: 'Kerala', lat: 10.5276, lon: 76.2144, country: 'IN' },

  // Haryana
  { name: 'Gurgaon', state: 'Haryana', lat: 28.4595, lon: 77.0266, country: 'IN' },
  { name: 'Faridabad', state: 'Haryana', lat: 28.4089, lon: 77.3178, country: 'IN' },
  { name: 'Panipat', state: 'Haryana', lat: 29.3909, lon: 76.9635, country: 'IN' },

  // Jharkhand
  { name: 'Ranchi', state: 'Jharkhand', lat: 23.3441, lon: 85.3096, country: 'IN' },
  { name: 'Jamshedpur', state: 'Jharkhand', lat: 22.8046, lon: 86.2029, country: 'IN' },
  { name: 'Dhanbad', state: 'Jharkhand', lat: 23.7957, lon: 86.4304, country: 'IN' },

  // Chhattisgarh
  { name: 'Raipur', state: 'Chhattisgarh', lat: 21.2514, lon: 81.6296, country: 'IN' },
  { name: 'Bhilai', state: 'Chhattisgarh', lat: 21.1938, lon: 81.3509, country: 'IN' },

  // Assam
  { name: 'Guwahati', state: 'Assam', lat: 26.1445, lon: 91.7362, country: 'IN' },
  { name: 'Dibrugarh', state: 'Assam', lat: 27.4728, lon: 94.9120, country: 'IN' },

  // Himachal Pradesh
  { name: 'Shimla', state: 'Himachal Pradesh', lat: 31.1048, lon: 77.1734, country: 'IN' },
  { name: 'Dharamshala', state: 'Himachal Pradesh', lat: 32.2190, lon: 76.3234, country: 'IN' },

  // Uttarakhand
  { name: 'Dehradun', state: 'Uttarakhand', lat: 30.3165, lon: 78.0322, country: 'IN' },
  { name: 'Haridwar', state: 'Uttarakhand', lat: 29.9457, lon: 78.1642, country: 'IN' },

  // Goa
  { name: 'Panaji', state: 'Goa', lat: 15.4909, lon: 73.8278, country: 'IN' },
  { name: 'Vasco da Gama', state: 'Goa', lat: 15.3957, lon: 73.8143, country: 'IN' },

  // Andhra Pradesh
  { name: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.6868, lon: 83.2185, country: 'IN' },
  { name: 'Vijayawada', state: 'Andhra Pradesh', lat: 16.5062, lon: 80.6480, country: 'IN' },
  { name: 'Guntur', state: 'Andhra Pradesh', lat: 16.3067, lon: 80.4365, country: 'IN' },
  { name: 'Tirupati', state: 'Andhra Pradesh', lat: 13.6288, lon: 79.4192, country: 'IN' }
];

export const getIndianCitySuggestions = (query: string): IndianCity[] => {
  if (query.length < 2) return [];
  
  const lowerQuery = query.toLowerCase();
  return indianCitiesDatabase.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.state.toLowerCase().includes(lowerQuery)
  ).slice(0, 10);
};
