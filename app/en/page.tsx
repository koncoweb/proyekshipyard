import React from 'react';

export default function EnHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Batang Shipyard</h1>
        
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Your trusted partner for shipbuilding, repair, and maintenance services in Indonesia.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Ship Construction</h2>
              <p className="text-gray-600 mb-4">
                We build high-quality vessels using modern techniques and traditional craftsmanship.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom vessel design</li>
                <li>• Steel and wooden vessels</li>
                <li>• Fishing boats and commercial ships</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Vessel Repair</h2>
              <p className="text-gray-600 mb-4">
                Professional repair and maintenance services to keep your vessel in top condition.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Engine overhaul</li>
                <li>• Hull repair and painting</li>
                <li>• Electrical system maintenance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">Marine Services</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive marine services including documentation and compliance support.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ship documentation</li>
                <li>• Safety inspections</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Contact us today for a consultation and let us help you with your maritime needs.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Get Quote
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 3600;