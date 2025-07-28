'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Sparkles, Award } from 'lucide-react';
import { MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'Absolutely divine! The chocolate fudge cake was perfect for my daughter\'s birthday. The quality and taste exceeded all expectations. Will definitely order again!',
    rating: 5,
    product: 'Chocolate Fudge Cake',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Rahul Gupta',
    location: 'Pune',
    text: 'Best brownies in the city! Fresh, fudgy, and delivered right on time. The salted caramel brownies are to die for. Mithi Cravings has won my heart!',
    rating: 5,
    product: 'Salted Caramel Brownies',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Anita Desai',
    location: 'Delhi',
    text: 'Beautiful custom cake design and the taste was exceptional! They perfectly captured my vision and delivered beyond expectations. Highly recommended!',
    rating: 5,
    product: 'Custom Red Velvet Cake',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Bangalore',
    text: 'The cookies are absolutely amazing! Ordered for my office party and everyone loved them. Fresh, crispy, and packed with flavor. Will order again soon!',
    rating: 5,
    product: 'Chocolate Chip Cookies',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 5,
    name: 'Meera Patel',
    location: 'Ahmedabad',
    text: 'Outstanding quality and service! The vanilla bean cake was moist, flavorful, and beautifully decorated. Mithi Cravings made our anniversary special!',
    rating: 5,
    product: 'Vanilla Bean Dream Cake',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 6,
    name: 'Arjun Mehta',
    location: 'Chennai',
    text: 'Incredible attention to detail and taste! The triple chocolate brownies were rich, decadent, and perfectly balanced. Best bakery experience ever!',
    rating: 5,
    product: 'Triple Chocolate Brownies',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/90 via-cream-50/80 to-beige-50/90"></div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-beige-200/20 to-beige-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100/80 to-pink-200/80 backdrop-blur-sm px-6 py-3 rounded-full">
            <Award className="w-5 h-5 mr-2 text-pink-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
              Customer Testimonials
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
              Sweet Stories from
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 mt-2">
              Our Happy Customers
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of delighted customers who have experienced the magic of our handcrafted creations.
            Every review tells a story of joy, satisfaction, and sweet moments shared.
          </p>
        </div>

        {/* Enhanced Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Slider Container */}
          <div 
            className="overflow-hidden rounded-[2rem]"
            role="region"
            aria-label="Customer testimonials carousel"
          >
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              role="list"
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-4"
                  role="listitem"
                >
                  <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
                    {/* Card Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-[2rem] blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    
                    <Card className="relative bg-white/90 backdrop-blur-sm border-0 rounded-[1.5rem] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                      <CardContent className="p-8 lg:p-12 text-center space-y-8">
                        {/* Quote Icon */}
                        <div className="flex justify-center" aria-hidden="true">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                            <div className="relative h-16 w-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                              <Quote className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Rating */}
                        <div className="flex justify-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                          ))}
                        </div>

                        {/* Enhanced Testimonial Text */}
                        <blockquote className="relative">
                          <div className="absolute -top-4 -left-2 text-6xl text-pink-200 opacity-50 font-serif">"</div>
                          <div className="absolute -bottom-4 -right-2 text-6xl text-pink-200 opacity-50 font-serif rotate-180">"</div>
                          <p className="relative text-lg lg:text-xl text-gray-700 italic leading-relaxed max-w-3xl mx-auto">
                            {testimonial.text}
                          </p>
                        </blockquote>

                        {/* Enhanced Customer Info */}
                        <div className="relative">
                          <div className="flex items-center justify-center space-x-4">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-lg opacity-30"></div>
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="relative h-16 w-16 rounded-full object-cover border-4 border-white shadow-xl transform group-hover:scale-110 transition-transform"
                              />
                            </div>
                            <div className="text-left">
                              <p className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                                {testimonial.name}
                              </p>
                              <p className="text-gray-600 flex items-center">
                                <MapPin className="w-4 h-4 mr-1 text-pink-500" />
                                {testimonial.location}
                              </p>
                              <div className="mt-2">
                                <Badge className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 border-0">
                                  <Sparkles className="w-3 h-3 mr-1" />
                                  {testimonial.product}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="group absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-14 w-14 bg-white/80 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity" aria-hidden="true"></div>
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="group absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-14 w-14 bg-white/80 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity" aria-hidden="true"></div>
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
          </button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`relative h-3 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'w-10 bg-gradient-to-r from-pink-500 to-pink-600'
                  : 'w-3 bg-pink-200 hover:bg-pink-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              {index === currentIndex && (
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-pink-100/50"
          role="list"
          aria-label="Achievement statistics"
        >
          <div 
            className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
            role="listitem"
          >
            <div className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                1000+
              </p>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </div>
          </div>
          
          <div 
            className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
            role="listitem"
          >
            <div className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                4.9
              </p>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
          </div>
          
          <div 
            className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
            role="listitem"
          >
            <div className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                500+
              </p>
              <p className="text-gray-600 font-medium">Custom Orders</p>
            </div>
          </div>
          
          <div 
            className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105"
            role="listitem"
          >
            <div className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                100%
              </p>
              <p className="text-gray-600 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}