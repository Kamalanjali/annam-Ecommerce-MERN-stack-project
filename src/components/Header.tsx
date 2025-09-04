import React from 'react';
import { ShoppingCart, Leaf, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Annam</h1>
              <p className="text-xs text-green-600">Pure & Traditional</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Home</a>
            <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Products</a>
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Contact</a>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search foods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-green-400 transition-colors duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </form>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Home</a>
              <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Products</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors duration-200">About</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Contact</a>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="pt-4 border-t border-gray-100">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search foods..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-green-400 transition-colors duration-200"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};