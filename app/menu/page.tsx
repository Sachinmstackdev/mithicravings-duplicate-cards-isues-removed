'use client';

import { useMemo, useState } from 'react';
import { products, Product } from '@/components/ui/products-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, IndianRupee, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '917044085442';

type Category = 'All' | 'Cakes' | 'Chocolate' | 'Brownies' | 'Cookies';

function mapToCategory(p: Product): Category {
  const name = p.name.toLowerCase();
  const cat = p.category.toLowerCase();
  if (cat.includes('brownie') || name.includes('brownie')) return 'Brownies';
  if (cat.includes('cookie') || name.includes('cookie')) return 'Cookies';
  // Prefer Cakes grouping for items like cheesecake even if name contains chocolate/nutella
  if (cat.includes('cake') || name.includes('cake') || cat.includes('celebration')) return 'Cakes';
  if (name.includes('chocolate') || name.includes('nutella')) return 'Chocolate';
  return 'All';
}

export default function MenuPage() {
  const [active, setActive] = useState<Category>('All');

  const filtered: Product[] = useMemo(() => {
    if (active === 'All') return products;
    return products.filter((p) => mapToCategory(p) === active);
  }, [active]);

  const openPay = () => {
    window.open('/pay', '_self');
  };

  const sendWhatsApp = (p: Product) => {
    const message = `Hi! I'd like to order:\n\n• Product: ${p.name}\n• Price shown: ${p.price}\n\nI've paid via QR / will pay via QR now. I'll attach the payment screenshot.\n\nDelivery details:\n- Name:\n- Phone:\n- Address:\n- Landmark:`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const tabs: Category[] = ['All', 'Cakes', 'Chocolate', 'Brownies', 'Cookies'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-playfair font-bold text-gray-900">Our Menu</h1>
          <p className="mt-3 text-gray-600">Discover our handcrafted desserts. Pay via QR and share your details on WhatsApp.</p>
        </div>

        <div className="sticky top-0 z-10 bg-gradient-to-b from-rose-50/80 to-transparent backdrop-blur supports-[backdrop-filter]:backdrop-blur rounded-xl py-3 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition shadow-sm ${
                  active === tab
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white border-transparent shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:text-pink-700'
                }`}
                aria-pressed={active === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div key={p.id} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300/40 via-rose-300/40 to-amber-300/40 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <Card className="relative bg-white/95 backdrop-blur-sm border border-rose-100 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Mithi+Cravings'; }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 shadow">{mapToCategory(p)}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 rounded-full text-sm font-semibold text-white shadow ring-1 ring-white/20 bg-gradient-to-r from-rose-500 to-pink-600">
                        {p.price}
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{p.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={openPay}
                        className="flex-1 h-11 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md hover:shadow-lg"
                        aria-label={`Pay for ${p.name} via QR`}
                      >
                        <IndianRupee className="w-4 h-4 mr-2" /> Pay via QR
                      </Button>
                      <Button
                        onClick={() => sendWhatsApp(p)}
                        className="h-11 rounded-full bg-[#25D366] hover:bg-[#1fb457] text-white shadow-md"
                        aria-label={`Send ${p.name} details on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/" className="text-pink-600 hover:text-pink-700 underline">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}


