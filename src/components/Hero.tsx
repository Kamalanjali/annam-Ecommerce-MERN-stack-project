import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Trusted by 1000+ families</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Authentic
                <span className="text-green-600 dark:text-green-400 block">Telugu Brahmin</span>
                Home Foods
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Experience the rich heritage of traditional Telugu cuisine with our handmade, 
                organic foods. No artificial colors, no chemicals - just pure, authentic flavors 
                passed down through generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onExploreClick}
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 text-xl">🌱</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">100% Organic</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">No chemicals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-amber-600 text-xl">👵</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Traditional</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ancient recipes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600 text-xl">🏠</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Homemade</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">With love</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fadeInRight">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg"
                alt="Traditional Telugu food"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-bounce">
                <p className="font-semibold text-green-600 dark:text-green-400">Fresh Daily</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Made with love</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-pulse">
                <p className="font-semibold text-orange-600 dark:text-orange-400">Zero Preservatives</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pure & Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 dark:border-green-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 dark:bg-green-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};