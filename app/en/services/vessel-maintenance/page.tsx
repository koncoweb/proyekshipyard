import React from 'react';

export const metadata = {
  title: 'Vessel Maintenance Services | Batang Shipyard',
  description: 'Professional vessel maintenance and repair services at Batang Shipyard Indonesia',
};

export default function VesselMaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Vessel Maintenance Services</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            We provide comprehensive vessel maintenance services to keep your ship 
            in optimal condition and ensure safe, reliable operation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Maintenance Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Regular maintenance and inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Engine and propulsion system service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Hull cleaning and painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Electrical and navigation system repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Safety equipment maintenance</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Our Service</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Certified technicians and engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Modern equipment and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Quality spare parts and materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Competitive pricing and fast turnaround</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>24/7 emergency support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Schedule Your Maintenance</h3>
            <p className="text-gray-600 mb-4">
              Keep your vessel in top condition with our professional maintenance services. 
              Contact us to schedule your next service appointment.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 3600;