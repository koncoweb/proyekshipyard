import React from 'react';

export const metadata = {
  title: 'Second Hand Vessel Services | Batang Shipyard',
  description: 'Professional second hand vessel services at Batang Shipyard Indonesia',
};

export default function SecondHandVesselPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Second Hand Vessel Services</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            We provide comprehensive second hand vessel services including inspection, 
            evaluation, and acquisition support for quality pre-owned vessels.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Vessel inspection and condition assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Market valuation and pricing analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Documentation and legal compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Negotiation and transaction support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Post-purchase inspection and delivery</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Extensive industry experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Professional inspection team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Transparent pricing and process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Contact Us for More Information</h3>
            <p className="text-gray-600 mb-4">
              Ready to find your next vessel? Contact our team for a consultation 
              and let us help you find the perfect second hand vessel for your needs.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 3600;