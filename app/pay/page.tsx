'use client';

import { useCallback } from 'react';
import { Button } from '@/components/ui/button';

const QR_IMAGE_URL = 'https://res.cloudinary.com/twosapiens/image/upload/v1762317665/WhatsApp_Image_2025-11-04_at_3.54.45_PM_yhbnq2.jpg';
const WHATSAPP_NUMBER = '917044085442';

export default function PayPage() {
  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(QR_IMAGE_URL, { mode: 'cors' });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'MithiCravings-QR.jpg';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (_) {
      window.open(QR_IMAGE_URL, '_blank');
    }
  }, []);

  const handleWhatsApp = useCallback(() => {
    const message = `Hi! I have paid via the QR.\n\nPlease find my payment screenshot and delivery location details below:\n\n- Name:\n- Phone:\n- Address:\n- Landmark:\n- Order details (if any):\n\nI'll attach the payment screenshot now.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-playfair font-bold text-gray-900">Pay via QR</h1>
          <p className="mt-3 text-gray-600">Scan the QR to pay. Then send your screenshot and location.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md rounded-xl border border-gray-200 p-4 sm:p-6 bg-gray-50">
              <img
                src={QR_IMAGE_URL}
                alt="Mithi Cravings UPI QR"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:justify-center">
              <Button onClick={handleDownload} className="px-6 py-5 text-base">Download QR</Button>
              <a
                href={QR_IMAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-pink-200 text-pink-700 bg-pink-50 hover:bg-pink-100 transition"
              >
                Open QR in New Tab
              </a>
              <Button onClick={handleWhatsApp} className="px-6 py-5 text-base bg-green-500 hover:bg-green-600">Send on WhatsApp</Button>
            </div>

            <div className="mt-10 w-full">
              <ol className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-semibold">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Pay via QR</p>
                    <p className="text-gray-600">Scan the code using any UPI app (GPay, PhonePe, Paytm, etc.) and complete the payment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-semibold">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Send screenshot and location</p>
                    <p className="text-gray-600">Tap "Send on WhatsApp" to share your payment screenshot and delivery location with us.</p>
                  </div>
                </li>
              </ol>

              <p className="mt-6 text-sm text-gray-500 text-center">We will confirm your payment and proceed with your order right away.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="text-pink-600 hover:text-pink-700 underline">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}


