import React, { useState } from 'react';
import { User, LogOut, Settings, Package, ChevronDown, Moon, Sun } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { UserProfile } from './UserProfile';
import { useDarkMode } from '../hooks/useDarkMode';

export const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, signOut } = useAuth();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
        >
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
            <User className="h-5 w-5" />
          </div>
          <ChevronDown className={`h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 animate-fadeIn">
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <p className="font-semibold text-gray-900 dark:text-white">{user.user_metadata?.full_name || 'User'}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
            
            <div className="py-2">
              <button 
                onClick={handleProfileClick}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3"
              >
                <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Profile</span>
              </button>
              
              <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3">
                <Package className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">My Orders</span>
              </button>
              
              <button 
                onClick={toggleDarkMode}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                )}
                <span className="text-gray-700 dark:text-gray-300">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
              
              <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3">
                <Settings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Settings</span>
              </button>
              
              <button
                onClick={handleSignOut}
                className="w-full px-4 py-2 text-left hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 flex items-center space-x-3 text-red-600 dark:text-red-400"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <UserProfile 
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </>
  );
};