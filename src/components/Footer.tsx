import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold text-white dark:text-gray-100">Annam</h3>
                <p className="text-sm text-green-400">Pure & Traditional</p>
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              Bringing you the authentic taste of Telugu Brahmin cuisine, 
              made with love and organic ingredients.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-green-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-green-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-green-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white dark:text-gray-100 font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Home</a>
              <a href="#products" className="block hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Products</a>
              <a href="#about" className="block hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">About Us</a>
              <a href="#contact" className="block hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white dark:text-gray-100 font-semibold mb-4">Categories</h4>
            <div className="space-y-2">
              <a href="#" className="block hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Podis & Karams</a>
              <a href="#" className="block hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Pickles</a>
              <a href="#" className="block hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Fryums & Vadiyalu</a>
              <a href="#" className="block hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Milk Products</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white dark:text-gray-100 font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span>hello@annam.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <span>Hyderabad, Telangana<br />India - 500001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 Annam. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200">Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};