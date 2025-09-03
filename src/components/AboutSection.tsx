import React from 'react';
import { Heart, Award, Truck, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Each product is crafted by experienced home cooks using traditional family recipes'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source the finest ingredients and follow strict quality standards'
    },
    {
      icon: Truck,
      title: 'Fresh Delivery',
      description: 'Fast and reliable delivery ensuring freshness reaches your doorstep'
    },
    {
      icon: Shield,
      title: 'Chemical Free',
      description: 'No artificial colors, preservatives, or harmful chemicals used'
    }
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Preserving Telugu 
                <span className="text-green-600 block">Culinary Heritage</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Annam, we believe in preserving the authentic flavors of Telugu Brahmin cuisine. 
                Our products are made using traditional methods passed down through generations, 
                ensuring every bite connects you to our rich cultural heritage.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                From aromatic podis to tangy pickles, each product is handcrafted with organic 
                ingredients sourced directly from farmers. We maintain the highest standards 
                of hygiene and quality, bringing you the pure taste of home-cooked food.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-all duration-300 group animate-fadeInUp"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <feature.icon className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4198038/pexels-photo-4198038.jpeg"
              alt="Traditional cooking"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            
            {/* Stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur rounded-2xl p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-bold text-2xl text-green-600">1000+</p>
                    <p className="text-sm text-gray-600">Happy Families</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-green-600">50+</p>
                    <p className="text-sm text-gray-600">Products</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-green-600">100%</p>
                    <p className="text-sm text-gray-600">Organic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};