'use client';

import { useState } from 'react';
import { X, Plus, Minus, Calendar, MapPin } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    category: string;
  };
  onWhatsAppOrder: (message: string) => void;
}

export function ProductModal({ isOpen, onClose, product, onWhatsAppOrder }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState('Regular');
  const [selectedFlavor, setSelectedFlavor] = useState('Vanilla');
  const [quantity, setQuantity] = useState(1);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Early return if modal is not open or product is not available
  if (!isOpen || !product) return null;

  const sizes = ['Regular', 'Large', 'Extra Large'];
  const flavors = ['Vanilla', 'Chocolate', 'Strawberry', 'Red Velvet', 'Butterscotch'];
  
  const sizeMultipliers = {
    'Regular': 1,
    'Large': 1.5,
    'Extra Large': 2
  };

  const basePrice = parseInt(product.price.replace('₹', '').replace(',', ''));
  const totalPrice = basePrice * sizeMultipliers[selectedSize as keyof typeof sizeMultipliers] * quantity;

  const handleOrder = () => {
    if (!customerName || !customerPhone || !customerAddress || !deliveryDate) {
      alert('Please fill in all required fields');
      return;
    }

    const orderMessage = `🍰 *New Order from Mithi Cravings Website*

📋 *Order Details:*
• Product: ${product.name}
• Size: ${selectedSize}
• Flavor: ${selectedFlavor}
• Quantity: ${quantity}
• Total Price: ₹${totalPrice.toLocaleString()}

👤 *Customer Details:*
• Name: ${customerName}
• Phone: ${customerPhone}
• Address: ${customerAddress}

📅 *Delivery Date:* ${deliveryDate}

${specialInstructions ? `📝 *Special Instructions:* ${specialInstructions}` : ''}

Thank you for choosing Mithi Cravings! 💕`;

    onWhatsAppOrder(orderMessage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-pink-100 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-playfair font-semibold text-gray-800">Customize Your Order</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-pink-50 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Product Info */}
          <div className="flex gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <p className="text-pink-600 font-semibold mt-2">Starting from {product.price}</p>
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Flavor Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Flavor</label>
            <select
              value={selectedFlavor}
              onChange={(e) => setSelectedFlavor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              title="Select flavor"
              aria-label="Select flavor"
            >
              {flavors.map((flavor) => (
                <option key={flavor} value={flavor}>{flavor}</option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-full border border-gray-300 hover:bg-pink-50 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-full border border-gray-300 hover:bg-pink-50 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-gray-800">Customer Details</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address *</label>
              <textarea
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Enter complete delivery address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Date *</label>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                title="Select delivery date"
                aria-label="Select delivery date"
                placeholder="Select delivery date"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                rows={2}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Any special requests or instructions..."
              />
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-pink-50 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-playfair font-semibold text-gray-800">Total Amount:</span>
              <span className="text-2xl font-bold text-pink-600">₹{totalPrice.toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {quantity} × {selectedSize} {product.name} ({selectedFlavor})
            </p>
          </div>

          {/* Order Button */}
          <button
            onClick={handleOrder}
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Place Order via WhatsApp
          </button>

          <p className="text-xs text-gray-500 text-center">
            * Required fields. You'll be redirected to WhatsApp to confirm your order.
          </p>
        </div>
      </div>
    </div>
  );
}