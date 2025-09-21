import React from 'react';

export const metadata = {
  title: 'Wooden Vessel Production | Batang Shipyard',
  description: 'Professional wooden vessel production and repair services at Batang Shipyard Indonesia',
};

export default function WoodenVesselPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Wooden Vessel Production</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            We specialize in the construction and repair of traditional wooden vessels, 
            combining traditional craftsmanship with modern techniques and materials.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Custom wooden vessel construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Traditional boat restoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Hull repair and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Wood treatment and preservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Design consultation and planning</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Traditional Indonesian boat building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>High-quality timber selection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Expert craftsmen and artisans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Modern safety standards compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Custom design and specifications</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Start Your Project</h3>
            <p className="text-gray-600 mb-4">
              Whether you need a new wooden vessel or want to restore an existing one, 
              our skilled craftsmen are ready to bring your vision to life.
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