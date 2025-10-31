'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Award, Users, Clock, Shield, Star, Sparkles, ChefHat } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/90 via-cream-50/80 to-beige-50/90"></div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-beige-200/20 to-beige-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Section Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100/80 to-pink-200/80 backdrop-blur-sm px-6 py-3 rounded-full">
            <ChefHat className="w-5 h-5 mr-2 text-pink-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
              Our Story
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
              Baked with Love,
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 mt-2">
              Served with Pride
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Mithi Cravings, every creation tells a story of passion, quality, and the pure joy of sharing sweetness with the world.
            Each recipe is crafted with care, tradition, and a touch of innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          {/* Enhanced Story Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                🍰 The Story of Mithi Cravings – From a Home Kitchen to a Dream Café
              </h3>
              
              <div className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-pink-400 before:to-pink-600 before:rounded-full">
                  Every big dream starts small — sometimes, right from your own kitchen.
                </p>

                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-cream-400 before:to-cream-600 before:rounded-full">
                  Mithi Cravings began as a little spark of passion, born in a Delhi home but deeply rooted in the sweet nostalgia of Kolkata — my hometown, the City of Joy.
                </p>

                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-beige-400 before:to-beige-600 before:rounded-full">
                  What started as a home bakery — a simple way to share love through eggless desserts — slowly turned into something much more. From the early days of whisking and baking in Paryavaran Complex, to serving smiles near PVR, and now welcoming everyone to a cozy corner called Mithi Cravings Dessert Lounge & Cafe. It’s been a journey baked with patience, hope, and heart.
                </p>

                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-pink-400 before:to-pink-600 before:rounded-full">
                  Mithi Cravings was never just about desserts — it was about dreams that once seemed too far away. A childhood wish to study hotel management never happened, but life had its own recipe. Today, that same dream lives in every cheesecake baked, every cookie crafted, and every smile that walks through the café door.
                </p>

                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-cream-400 before:to-cream-600 before:rounded-full">
                  Our bestsellers — the Blueberry Cheesecake, Biscoff Cheesecake, and the irresistible Nutella Cheesecake — tell their own stories of love, comfort, and indulgence. Each one is 100% eggless, handmade with care, with no gelatin and no preservatives — sprinkled with joy and pure love.
                </p>

                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-beige-400 before:to-beige-600 before:rounded-full">
                  To truly feel what Mithi Cravings is all about, don’t just take our word for it — visit our Instagram page and scroll through the reviews. Every post, every comment, and every “yum” is a chapter of our story written by you.
                </p>

                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-pink-400 before:to-pink-600 before:rounded-full">
                  Because at Mithi Cravings, every bite is a reminder: dreams don’t expire, they just need the right amount of time to rise. 💛
                </p>
              </div>
            </div>

            {/* Enhanced Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-0 shadow-soft hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative h-10 w-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent text-sm">Premium Quality</p>
                    <p className="text-xs text-gray-600">Only the finest ingredients</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-0 shadow-soft hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cream-400 to-cream-600 rounded-lg blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative h-10 w-10 bg-gradient-to-br from-cream-500 to-cream-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent text-sm">Made with Love</p>
                    <p className="text-xs text-gray-600">Every item handcrafted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Images */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <img
                    src="https://res.cloudinary.com/twosapiens/image/upload/v1761890880/WhatsApp_Image_2025-10-31_at_10.11.22_AM_wvezrt.jpg"
                    alt="Mithi Cravings kitchen - real photo"
                    className="relative w-full h-40 sm:h-48 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                </div>
                <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <img
                    src="https://res.cloudinary.com/twosapiens/image/upload/v1761890875/WhatsApp_Image_2025-10-31_at_10.11.23_AM_3_ube0ho.jpg"
                    alt="Freshly made desserts - real photo"
                    className="relative w-full h-28 sm:h-36 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                </div>
                <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <img
                    src="https://res.cloudinary.com/twosapiens/image/upload/v1761890880/WhatsApp_Image_2025-10-31_at_10.11.21_AM_1_wvhe5c.jpg"
                    alt="Dessert lounge & cafe - real photo"
                    className="relative w-full h-28 sm:h-36 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <img
                    src="https://res.cloudinary.com/twosapiens/image/upload/v1761890871/WhatsApp_Image_2025-10-31_at_10.11.22_AM_2_afbzae.jpg"
                    alt="Kitchen workspace - real photo"
                    className="relative w-full h-28 sm:h-36 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                </div>
                <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <img
                    src="https://res.cloudinary.com/twosapiens/image/upload/v1761890871/WhatsApp_Image_2025-10-31_at_10.11.23_AM_2_dqn16k.jpg"
                    alt="Finished products - real photo"
                    className="relative w-full h-40 sm:h-48 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                </div>
                <div className="group relative transform transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <img
                    src="https://res.cloudinary.com/twosapiens/image/upload/v1761890879/WhatsApp_Image_2025-10-31_at_10.11.23_AM_b2dcbp.jpg"
                    alt="Served desserts - real photo"
                    className="relative w-full h-28 sm:h-36 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Stats */}
            <div className="hidden sm:block absolute -top-20 md:-top-24 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-1">
                <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">3+</p>
                <p className="text-sm text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-1">
                <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">100%</p>
                <p className="text-sm text-gray-600 font-medium">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Award,
              title: "Premium Ingredients",
              description: "We source only the finest ingredients from trusted suppliers to ensure exceptional quality in every bite.",
              gradient: "from-pink-400 to-pink-600"
            },
            {
              icon: Clock,
              title: "Fresh Daily",
              description: "All our products are baked fresh daily in small batches to maintain optimal taste and texture.",
              gradient: "from-cream-400 to-cream-600"
            },
            {
              icon: Users,
              title: "Custom Orders",
              description: "Personalized cakes and treats designed specifically for your special occasions and celebrations.",
              gradient: "from-beige-400 to-beige-600"
            },
            {
              icon: Star,
              title: "Artisan Crafted",
              description: "Every item is handcrafted by skilled artisans who take pride in creating edible works of art.",
              gradient: "from-pink-500 to-pink-700"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative transform transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <Card className="relative border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="relative mx-auto">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                    <div className={`relative h-16 w-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Mission Statement */}
        <div className="mt-20 text-center">
          <div className="group relative transform transition-all duration-500">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-[2rem] blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <Card className="relative border-0 bg-white/90 backdrop-blur-sm shadow-xl group-hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto rounded-[1.5rem] overflow-hidden">
              <CardContent className="p-6 sm:p-10 lg:p-12 space-y-8">
                <div className="relative mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-playfair font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Our Mission
                </h3>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  "To create extraordinary moments of joy through exceptional baked goods, bringing families and friends together 
                  one sweet bite at a time. We believe that every celebration, big or small, deserves something truly special."
                </p>
                
                <div className="flex items-center justify-center space-x-2">
                  <span className="font-semibold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                    Made with Love, Delivered with Care
                  </span>
                  <Sparkles className="h-5 w-5 text-pink-600 animate-pulse" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}