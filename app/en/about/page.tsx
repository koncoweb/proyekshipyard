import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Batang Shipyard</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Batang Shipyard is a leading shipyard in Indonesia, specializing in vessel 
            construction, repair, and maintenance services with decades of experience 
            in the maritime industry.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our History</h2>
              <p className="text-gray-600 mb-4">
                Established with a vision to provide world-class shipbuilding and repair 
                services, Batang Shipyard has grown to become one of Indonesia's most 
                trusted maritime service providers.
              </p>
              <p className="text-gray-600">
                Our commitment to quality, safety, and customer satisfaction has earned 
                us recognition in the industry and the trust of clients worldwide.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To deliver exceptional shipbuilding and repair services while maintaining 
                the highest standards of quality, safety, and environmental responsibility.
              </p>
              <p className="text-gray-600">
                We strive to be the preferred partner for all maritime needs, combining 
                traditional craftsmanship with modern technology and innovation.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Why Choose Batang Shipyard?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 3600;