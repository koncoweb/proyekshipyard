import React from 'react';

export default function ShipyardIndonesiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Batang Shipyard Indonesia</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Located in the heart of Indonesia's maritime industry, Batang Shipyard is 
            strategically positioned to serve both domestic and international clients 
            with world-class shipbuilding and repair services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Strategic Location</h2>
              <p className="text-gray-600 mb-4">
                Our shipyard is strategically located in Batang, Central Java, providing 
                easy access to major shipping routes and ports throughout Indonesia and 
                Southeast Asia.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Close proximity to major ports</li>
                <li>• Access to skilled maritime workforce</li>
                <li>• Modern infrastructure and facilities</li>
                <li>• Favorable business environment</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Capabilities</h2>
              <p className="text-gray-600 mb-4">
                With decades of experience in the Indonesian maritime industry, we have 
                developed comprehensive capabilities in vessel construction, repair, and 
                maintenance services.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Vessel construction up to 150 meters</li>
                <li>• Complete repair and maintenance services</li>
                <li>• Emergency response capabilities</li>
                <li>• International quality standards</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Indonesia?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">17,000+</div>
                <div className="text-gray-600">Islands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">54,000+</div>
                <div className="text-gray-600">Kilometers of Coastline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Strategic</div>
                <div className="text-gray-600">Maritime Position</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Work With Us?</h3>
            <p className="text-gray-600 mb-6">
              Experience the quality and reliability of Indonesian shipbuilding expertise. 
              Contact us today to discuss your project requirements.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 3600;