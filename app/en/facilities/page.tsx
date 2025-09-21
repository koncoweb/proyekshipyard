import React from 'react';

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Facilities</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Batang Shipyard is equipped with state-of-the-art facilities and modern 
            equipment to handle various types of vessel construction and repair projects.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Construction Facilities</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Large construction docks and slipways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Heavy-duty cranes and lifting equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Welding and fabrication workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Material storage and handling areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Quality control and testing facilities</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Repair Facilities</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Dry dock and floating dock</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Engine repair and overhaul workshop</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Hull cleaning and painting facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Electrical and electronics workshop</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Emergency repair services</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Facility Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Construction Capacity</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maximum vessel length: 150 meters</li>
                  <li>• Maximum vessel width: 25 meters</li>
                  <li>• Maximum vessel weight: 10,000 tons</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Repair Capacity</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dry dock length: 200 meters</li>
                  <li>• Floating dock capacity: 15,000 tons</li>
                  <li>• 24/7 emergency services available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 3600;