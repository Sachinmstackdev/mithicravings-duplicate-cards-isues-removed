'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductModal } from '@/components/ui/product-modal';
import { Star, Heart, Clock, Award, ChefHat, Sparkles } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
  popular?: boolean;
  customizable?: boolean;
  sizes?: string[];
  flavors?: string[];
}

interface ProductsSectionProps {
  onWhatsAppOrder: (message: string) => void;
}

const products: Product[] = [
  // Celebration Cakes
  {
    id: '1',
    name: 'Chocolate Fudge Celebration Cake',
    price: '₹1,299',
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Rich, decadent chocolate layers with velvety fudge frosting. Perfect for birthdays and special celebrations.',
    category: 'Celebration Cakes',
    popular: true,
    customizable: true,
    sizes: ['Small (1kg)', 'Medium (1.5kg)', 'Large (2kg)'],
    flavors: ['Dark Chocolate', 'Milk Chocolate', 'White Chocolate']
  },
  {
    id: '2',
    name: 'Vanilla Bean Dream Cake',
    price: '₹1,199',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Classic vanilla sponge with premium vanilla bean buttercream. Elegant and timeless.',
    category: 'Celebration Cakes',
    customizable: true,
    sizes: ['Small (1kg)', 'Medium (1.5kg)', 'Large (2kg)'],
    flavors: ['Vanilla Bean', 'French Vanilla', 'Madagascar Vanilla']
  },
  {
    id: '3',
    name: 'Red Velvet Royale',
    price: '₹1,399',
    image: 'https://images.pexels.com/photos/4913399/pexels-photo-4913399.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Signature red velvet cake with cream cheese frosting. A royal treat for special occasions.',
    category: 'Celebration Cakes',
    popular: true,
    customizable: true,
    sizes: ['Small (1kg)', 'Medium (1.5kg)', 'Large (2kg)'],
    flavors: ['Classic Red Velvet', 'Pink Velvet', 'Blue Velvet']
  },
  
  // Artisan Cookies
  {
    id: '4',
    name: 'Chocolate Chip Cookie Box',
    price: '₹399',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Classic homemade chocolate chip cookies with premium Belgian chocolate chips. Box of 12 pieces.',
    category: 'Artisan Cookies',
    popular: true,
    sizes: ['Box of 12', 'Box of 24', 'Box of 36']
  },
  {
    id: '5',
    name: 'Oatmeal Raisin Delights',
    price: '₹429',
    image: 'https://images.pexels.com/photos/4226861/pexels-photo-4226861.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Chewy oatmeal cookies with plump raisins and a hint of cinnamon. Wholesome and delicious.',
    category: 'Artisan Cookies',
    sizes: ['Box of 12', 'Box of 24', 'Box of 36']
  },
  {
    id: '6',
    name: 'Double Chocolate Cookies',
    price: '₹449',
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Rich chocolate cookies loaded with chocolate chunks. A chocolate lover\'s paradise.',
    category: 'Artisan Cookies',
    sizes: ['Box of 12', 'Box of 24', 'Box of 36']
  },
  
  // Gourmet Brownies
  {
    id: '7',
    name: 'Fudgy Walnut Brownies',
    price: '₹549',
    image: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Dense, fudgy brownies with premium walnuts. The perfect balance of chewy and nutty.',
    category: 'Gourmet Brownies',
    popular: true,
    sizes: ['Box of 6', 'Box of 12', 'Box of 18']
  },
  {
    id: '8',
    name: 'Salted Caramel Brownies',
    price: '₹649',
    image: 'https://images.pexels.com/photos/4040643/pexels-photo-4040643.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Rich chocolate brownies topped with homemade salted caramel. Sweet meets salty perfection.',
    category: 'Gourmet Brownies',
    popular: true,
    sizes: ['Box of 6', 'Box of 12', 'Box of 18']
  },
  {
    id: '9',
    name: 'Triple Chocolate Brownies',
    price: '₹599',
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Ultimate chocolate experience with dark, milk, and white chocolate. For serious chocolate lovers.',
    category: 'Gourmet Brownies',
    sizes: ['Box of 6', 'Box of 12', 'Box of 18']
  }
];

const categories = ['All', 'Celebration Cakes', 'Artisan Cookies', 'Gourmet Brownies'];

export function ProductsSection({ onWhatsAppOrder }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOrder = (orderDetails: any) => {
    const message = `Hi! I'd like to order:

🍰 Product: ${orderDetails.product}
👤 Name: ${orderDetails.name}
📱 Phone: ${orderDetails.phone}
📍 Address: ${orderDetails.address}
${orderDetails.size ? `📏 Size: ${orderDetails.size}` : ''}
${orderDetails.flavor ? `🎂 Flavor: ${orderDetails.flavor}` : ''}
🔢 Quantity: ${orderDetails.quantity}
📅 Delivery Date: ${orderDetails.deliveryDate || 'ASAP'}
💰 Total: ₹${orderDetails.totalPrice}

${orderDetails.message ? `📝 Special Instructions: ${orderDetails.message}` : ''}

Please confirm the order details and payment process. Thank you!`;

    onWhatsAppOrder(message);
  };

  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <ChefHat className="w-5 h-5 mr-2 text-pink-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
              Artisanal Creations
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
              Handcrafted with
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 mt-2">
              Passion & Precision
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the artistry of premium baking where every creation tells a story of passion.
            Made fresh daily with carefully selected ingredients for an unforgettable taste.
          </p>
        </div>

        {/* Enhanced Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative px-8 py-3.5 rounded-full font-medium transition-all duration-500 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white shadow-xl transform hover:scale-[1.02]'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:text-pink-600 shadow-soft hover:shadow-lg'
              }`}
              aria-pressed={selectedCategory === category ? "true" : "false"}
              aria-label={`Filter by ${category}`}
            >
              <span className="relative z-10 flex items-center">
                {selectedCategory === category && (
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                )}
                {category}
              </span>
              {selectedCategory !== category && (
                <span className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-[2rem] blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              
              <Card 
                className="relative bg-white/90 backdrop-blur-sm border-0 rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-shadow duration-500"
                onClick={() => handleProductClick(product)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProductClick(product);
                  }
                }}
                aria-label={`View details of ${product.name}`}
              >
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
                    
                    {/* Price Tag */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="font-semibold text-gray-900">{product.price}</span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.popular && (
                        <Badge className="bg-pink-500 text-white border-0 shadow-lg">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      {product.customizable && (
                        <Badge className="bg-purple-500 text-white border-0 shadow-lg">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Custom
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {product.sizes && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-pink-500" />
                          <span>{product.sizes.length} Sizes</span>
                        </div>
                      )}
                      {product.flavors && (
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-pink-500" />
                          <span>{product.flavors.length} Flavors</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onWhatsAppOrder={handleOrder}
        />
      )}
    </section>
  );
}