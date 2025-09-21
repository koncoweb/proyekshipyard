import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Projects</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Explore our portfolio of successful shipbuilding and repair projects, 
            showcasing our expertise and commitment to quality.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fishing Vessel Construction</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Custom-built fishing vessel with modern navigation and safety equipment.
                </p>
                <div className="text-sm text-blue-600">
                  <strong>Year:</strong> 2023 | <strong>Type:</strong> Steel Hull
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cargo Ship Repair</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete hull repair and engine overhaul for commercial cargo vessel.
                </p>
                <div className="text-sm text-blue-600">
                  <strong>Year:</strong> 2023 | <strong>Type:</strong> Repair
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Traditional Boat Restoration</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Restoration of traditional wooden fishing boat with modern safety upgrades.
                </p>
                <div className="text-sm text-blue-600">
                  <strong>Year:</strong> 2022 | <strong>Type:</strong> Restoration
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Passenger Ferry Construction</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Modern passenger ferry with advanced safety and comfort features.
                </p>
                <div className="text-sm text-blue-600">
                  <strong>Year:</strong> 2022 | <strong>Type:</strong> Steel Hull
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Yacht Maintenance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete maintenance and upgrade of luxury yacht systems.
                </p>
                <div className="text-sm text-blue-600">
                  <strong>Year:</strong> 2022 | <strong>Type:</strong> Maintenance
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Research Vessel Conversion</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Conversion of commercial vessel into oceanographic research platform.
                </p>
                <div className="text-sm text-blue-600">
                  <strong>Year:</strong> 2021 | <strong>Type:</strong> Conversion
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Interested in Our Work?</h3>
            <p className="text-gray-600 mb-6">
              Let us help you with your next maritime project. Contact us for a consultation.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 3600;