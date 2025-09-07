import React from 'react';
import { ShoppingCart, Leaf, Search, Menu, X, LogIn, User, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useDarkMode } from '../hooks/useDarkMode';
import { UserMenu } from './UserMenu';
import { AuthModal } from './AuthModal';
import { UserProfile } from './UserProfile';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showProfile, setShowProfile] = useState(false);
  const { user } = useAuth();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const openAuthModal = (mode: 'signin') => {
    setIsAuthModalOpen(true);
  };
  return (
    <>
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

        <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">Home</a>
            <a href="#products" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">Products</a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">Contact</a>
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
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>

            {/* Profile Icon - Always Visible */}
            <button
              onClick={() => user ? null : setShowProfile(true)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              title="Profile"
            >
              <User className="h-6 w-6" />
            </button>

            {/* Auth Buttons / User Menu */}
            {user ? (
              <UserMenu />
            ) : (
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <button
                  onClick={() => openAuthModal('signin')}
                  className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-all duration-200 flex items-center space-x-1"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSearchSubmit} className="pt-4 border-t border-gray-100 dark:border-gray-700">
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-full focus:outline-none focus:border-green-400 transition-colors duration-200"
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
              
              {/* Mobile Auth Buttons */}
              {!user && (
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => openAuthModal('signin')}
                    className="w-full bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700 transition-all duration-200"
                  >
                    Sign In
                  </button>
                </div>
              )}

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

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* Profile Modal for Non-Authenticated Users */}
      {!user && (
        <UserProfile 
          isOpen={showProfile}
          onClose={() => setShowProfile(false)}
        />
      )}
    </>
  );
};
    <UserProfile 
      isOpen={showProfile}
      onClose={() => setShowProfile(false)}
    />