
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Heart, Star, Plus, Minus, Filter, Search, Truck, Shield, RefreshCw, Award, Users, Clock } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  inStock: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const EcommerceDemo = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 2847,
      category: 'Electronics',
      description: 'Experience premium sound quality with our flagship wireless headphones featuring active noise cancellation.',
      features: ['Active Noise Cancellation', '30-hour Battery Life', 'Premium Sound Quality', 'Comfortable Design'],
      inStock: 15,
      isNew: false,
      isBestseller: true
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 249,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 1924,
      category: 'Electronics',
      description: 'Track your fitness goals with advanced health monitoring and GPS capabilities.',
      features: ['Heart Rate Monitor', 'GPS Tracking', 'Waterproof Design', '7-day Battery'],
      inStock: 23,
      isNew: true,
      isBestseller: false
    },
    {
      id: 3,
      name: 'Artisan Coffee Mug',
      price: 24,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 856,
      category: 'Home',
      description: 'Handcrafted ceramic mug perfect for your morning coffee ritual.',
      features: ['Handcrafted Ceramic', 'Dishwasher Safe', 'Perfect Size', 'Elegant Design'],
      inStock: 67,
      isNew: false,
      isBestseller: false
    },
    {
      id: 4,
      name: 'Professional Running Shoes',
      price: 159,
      originalPrice: 199,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 3241,
      category: 'Fashion',
      description: 'High-performance running shoes designed for serious athletes and casual runners alike.',
      features: ['Responsive Cushioning', 'Breathable Material', 'Durable Construction', 'Lightweight Design'],
      inStock: 42,
      isNew: false,
      isBestseller: true
    },
    {
      id: 5,
      name: 'Premium Laptop Backpack',
      price: 89,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 1567,
      category: 'Accessories',
      description: 'Stylish and functional backpack with dedicated laptop compartment and USB charging port.',
      features: ['Laptop Protection', 'USB Charging Port', 'Water Resistant', 'Anti-theft Design'],
      inStock: 34,
      isNew: true,
      isBestseller: false
    },
    {
      id: 6,
      name: 'Flagship Smartphone',
      price: 899,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 5632,
      category: 'Electronics',
      description: 'Latest flagship smartphone with cutting-edge camera technology and lightning-fast performance.',
      features: ['Professional Camera', '5G Connectivity', 'All-day Battery', 'Premium Display'],
      inStock: 8,
      isNew: true,
      isBestseller: true
    }
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Accessories'];

  useEffect(() => {
    // Animate items on load
    products.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
      }, index * 100);
    });
  }, [products]);

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'newest': return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default: return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      }
    });

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-16 relative overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-float"></div>
            <div className="absolute -top-5 -right-10 w-24 h-24 bg-violet-200/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <Badge className="mb-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white animate-bounce-in">
                <Award className="w-4 h-4 mr-2" />
                Premium E-commerce Experience
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple animate-fade-in">
                Modern Online Store
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Experience the future of online shopping with our professionally designed e-commerce platform. 
                Featuring advanced product filtering, secure checkout, real-time inventory tracking, and premium user experience.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="glass-effect p-6 rounded-xl hover:purple-glow transition-all duration-300 group">
                  <Truck className="w-8 h-8 text-purple-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">Free delivery on orders over $50</p>
                </div>
                <div className="glass-effect p-6 rounded-xl hover:purple-glow transition-all duration-300 group">
                  <Shield className="w-8 h-8 text-violet-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">SSL encrypted secure checkout</p>
                </div>
                <div className="glass-effect p-6 rounded-xl hover:purple-glow transition-all duration-300 group">
                  <RefreshCw className="w-8 h-8 text-purple-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">Easy Returns</h3>
                  <p className="text-sm text-muted-foreground">30-day hassle-free returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Filter by Category:</span>
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="font-medium">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className={`group overflow-hidden hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2 border-0 glass-effect ${
                      animatedItems.includes(index) ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <Badge className="bg-green-500 text-white px-3 py-1 animate-pulse">
                            NEW
                          </Badge>
                        )}
                        {product.isBestseller && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1">
                            <Award className="w-3 h-3 mr-1" />
                            BESTSELLER
                          </Badge>
                        )}
                        {product.originalPrice && (
                          <Badge className="bg-red-500 text-white px-3 py-1">
                            SALE
                          </Badge>
                        )}
                      </div>

                      {/* Favorite button */}
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm hover:bg-white group-hover:scale-110 transition-all duration-300"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart 
                          className={`w-4 h-4 transition-colors ${
                            favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-500'
                          }`} 
                        />
                      </Button>

                      {/* Stock indicator */}
                      <div className="absolute bottom-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {product.inStock} left
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                          {product.name}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      
                      <CardDescription className="text-sm leading-relaxed">
                        {product.description}
                      </CardDescription>

                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">{renderStars(product.rating)}</div>
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">
                          <Users className="w-3 h-3 inline mr-1" />
                          ({product.reviews})
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="text-xs text-muted-foreground flex items-center">
                              <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price and Action */}
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-green-600">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            )}
                          </div>
                          {product.originalPrice && (
                            <span className="text-xs text-green-600 font-medium">
                              Save ${product.originalPrice - product.price}
                            </span>
                          )}
                        </div>
                        
                        <Button 
                          onClick={() => addToCart(product)}
                          className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 group-hover:scale-105 transition-all duration-300"
                          size="sm"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced Shopping Cart */}
            <div className="lg:col-span-1">
              <Card className="sticky top-32 glass-effect border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Shopping Cart ({getCartItemCount()})
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Your cart is empty</p>
                      <p className="text-sm text-muted-foreground">
                        Add some products to get started!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center gap-3 p-4 bg-gray-50/80 rounded-lg hover:bg-gray-100/80 transition-colors">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                            <p className="text-green-600 font-bold">${item.price}</p>
                            <p className="text-xs text-muted-foreground">
                              ${(item.price * item.quantity).toFixed(2)} total
                            </p>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="border-t pt-4 space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Subtotal:</span>
                            <span>${getTotalPrice().toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Shipping:</span>
                            <span className="text-green-600">Free</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Tax:</span>
                            <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                          </div>
                          <div className="border-t pt-2">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold">Total:</span>
                              <span className="text-2xl font-bold text-green-600">
                                ${(getTotalPrice() * 1.08).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-3 text-lg font-semibold">
                          Secure Checkout
                        </Button>
                        
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                            <Shield className="w-3 h-3" />
                            SSL Secured Payment
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Project Information Section */}
          <div className="mt-20 animate-fade-in">
            <Card className="glass-effect border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gradient-purple mb-4">
                  About This E-commerce Demo
                </CardTitle>
                <CardDescription className="text-lg max-w-4xl mx-auto">
                  This professional e-commerce platform demonstrates modern web development practices and advanced user experience design.
                </CardDescription>
              </CardHeader>
              <CardContent className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center p-6 hover:bg-purple-50/50 rounded-xl transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Advanced Filtering</h3>
                    <p className="text-muted-foreground text-sm">
                      Smart product filtering by category, price, rating, and availability with real-time search functionality.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 hover:bg-purple-50/50 rounded-xl transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Smart Cart System</h3>
                    <p className="text-muted-foreground text-sm">
                      Intelligent shopping cart with quantity management, real-time price calculation, and persistent storage.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 hover:bg-purple-50/50 rounded-xl transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Wishlist & Favorites</h3>
                    <p className="text-muted-foreground text-sm">
                      Save favorite products for later with animated heart icons and persistent wishlist storage.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 hover:bg-purple-50/50 rounded-xl transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Product Reviews</h3>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive rating system with visual star ratings and detailed customer review counts.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 hover:bg-purple-50/50 rounded-xl transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Secure Checkout</h3>
                    <p className="text-muted-foreground text-sm">
                      Professional checkout process with SSL encryption, tax calculation, and secure payment integration.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 hover:bg-purple-50/50 rounded-xl transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Inventory Management</h3>
                    <p className="text-muted-foreground text-sm">
                      Real-time stock tracking with low inventory alerts and automatic availability updates.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-center mb-6 text-gradient-purple">
                    Technologies & Features Used
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      'React + TypeScript',
                      'Tailwind CSS',
                      'Advanced Animations',
                      'Responsive Design',
                      'State Management',
                      'Component Architecture',
                      'Performance Optimization',
                      'Modern UI/UX'
                    ].map((tech, index) => (
                      <Badge 
                        key={tech} 
                        className="p-3 bg-white text-purple-700 hover:bg-purple-100 transition-colors justify-center"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EcommerceDemo;
