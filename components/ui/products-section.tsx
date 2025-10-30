'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductModal } from '@/components/ui/product-modal';
import { Star, Heart, Clock, ChefHat, Sparkles } from 'lucide-react';

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
  purchaseUrl?: string;
}

interface ProductsSectionProps {
  onWhatsAppOrder: (message: string) => void;
  razorpayAllUrl?: string;
}

const RAZORPAY_PAGE_URL = 'https://rzp.io/rzp/YbNk87j';

const products: Product[] = [
  // Celebration Cakes
  {
    id: 'mango-cake',
    name: 'Mango Cake',
    price: '₹120',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1761275530/28_1_j4mjeu.png',
    description: 'Fresh, light mango cake made to order with real mango flavor.',
    category: 'Celebration Cakes',
    popular: true,
    purchaseUrl: 'https://rzp.io/l/mango-cake'
  },
  {
    id: 'nutella-cheesecake',
    name: 'Nutella Cheesecake',
    price: '₹160',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1761275987/mithi_cravings_2_vd86vc.png',
    description: 'Creamy Nutella-infused cheesecake with rich chocolate-hazelnut goodness.',
    category: 'Celebration Cakes',
    popular: true,
    purchaseUrl: 'https://rzp.io/l/nutella-cheesecake'
  },
  {
    id: 'birthday-choco-truffle-500g',
    name: 'Birthday Chocolate Truffle Cake',
    price: '₹750 / 500 g',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1761276499/mithi_cravings_3_ueratr.png',
    description: 'Rich chocolate truffle cake perfect for birthdays. 500 g serving.',
    category: 'Celebration Cakes',
    popular: true,
    purchaseUrl: 'https://rzp.io/l/birthday-chocolate-truffle-500g'
  },
  {
    id: 'kunafa-pistachio-brownies',
    name: 'Kunafa Pistachio Brownies',
    price: '₹150',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1754963533/8_j5k13n.png',
    description: 'Middle Eastern kunafa twist with pistachio on rich brownies.',
    category: 'Gourmet Brownies',
    popular: true,
    purchaseUrl: 'https://rzp.io/l/kunafa-pistachio-brownies'
  },
  {
    id: 'best-seller-nutella-gooey-brownies',
    name: 'Best seller Nutella Goey Brownies',
    price: '₹120',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1761274928/27_4_phuaz0.png',
    description: 'Customer-favorite ultra-gooey brownies loaded with Nutella.',
    category: 'Gourmet Brownies',
    popular: true,
    purchaseUrl: 'https://rzp.io/l/nutella-gooey-brownies'
  },
  {
    id: 'rasmalai-cake',
    name: 'Rasmalai Cake',
    price: '₹100',
    image: 'https://res.cloudinary.com/twosapiens/image/upload/v1761275083/26_1_kcqnbn.png',
    description: 'Fusion dessert cake inspired by classic Indian Rasmalai.',
    category: 'Celebration Cakes',
    popular: true,
    purchaseUrl: 'https://rzp.io/l/rasmalai-cake'
  }
 
];

// Category filters removed; showing all products

export function ProductsSection({ onWhatsAppOrder, razorpayAllUrl }: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Always show all products

  const handleProductClick = (product: Product) => {
    window.location.href = razorpayAllUrl || RAZORPAY_PAGE_URL;
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

  const handleGoToRazorpayAll = () => {
    const url = razorpayAllUrl || RAZORPAY_PAGE_URL;
    window.location.href = url;
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

        {/* Category filters removed */}

        {/* Mobile: Horizontal Swipe Carousel */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-2" role="list" aria-label="Products carousel">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="snap-center shrink-0 w-72"
                role="listitem"
              >
                {/* Card Glow Effect */}
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-[2rem] blur opacity-0" aria-hidden="true"></div>
                  <Card 
                    className="relative bg-white/90 backdrop-blur-sm border-0 rounded-[1.5rem] overflow-hidden shadow-md"
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
                      <div className="relative h-56 sm:h-64 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700"
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
                        <h3 className="text-xl font-semibold text-gray-800">
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
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
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
                  <div className="relative h-56 sm:h-64 overflow-hidden">
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

        {/* Razorpay All-Options Button */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={handleGoToRazorpayAll}
            className="group relative overflow-hidden px-10 py-6 rounded-full text-lg font-semibold bg-gradient-to-r from-rose-400 via-pink-500 to-amber-400 text-white shadow-[0_8px_24px_rgba(244,114,182,0.35)] hover:shadow-[0_12px_28px_rgba(244,114,182,0.5)] ring-2 ring-rose-200/60 hover:ring-rose-300/80 transition-all duration-300 transform hover:-translate-y-0.5"
            aria-label="Explore More Delights"
          >
            <span className="absolute -left-10 top-0 h-full w-1/3 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 transform -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out pointer-events-none" />
            <span className="relative flex items-center">
              <ChefHat className="w-5 h-5 mr-2 text-white" />
              <span>Explore More Delights</span>
            </span>
          </Button>
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