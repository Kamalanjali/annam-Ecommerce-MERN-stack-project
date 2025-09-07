import React, { useState } from 'react';
import { X, User, Package, MapPin, Phone, Mail, Edit, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses'>('profile');

  if (!isOpen || !user) return null;
  // If user is not signed in, show sign-in prompt
  if (!user) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 animate-fadeInUp">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="w-20 h-20 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Sign in to view your profile
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Access your orders, addresses, and account settings by signing in.
              </p>
              <button
                onClick={() => {
                  onClose();
                  // Trigger sign in modal - you might need to pass this as a prop
                }}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  const mockOrders = [
    {
      id: '1',
      date: '2025-01-15',
      total: 850,
      status: 'Delivered',
      items: ['Nuvvula Podi', 'A2 Ghee']
    },
    {
      id: '2',
      date: '2025-01-10',
      total: 620,
      status: 'Processing',
      items: ['Mango Avakaya Pickle', 'Kobbari Karam']
    }
  ];

  const mockAddresses = [
    {
      id: '1',
      type: 'Home',
      address: '123 Traditional Foods Street, Hyderabad, Telangana - 500001',
      isDefault: true
    },
    {
      id: '2',
      type: 'Office',
      address: '456 Business District, Gachibowli, Hyderabad - 500032',
      isDefault: false
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-fadeInUp">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-100 dark:border-gray-700 p-6">
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                    activeTab === 'profile'
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Profile Details</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                    activeTab === 'orders'
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  <span>My Orders</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                    activeTab === 'addresses'
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <MapPin className="h-5 w-5" />
                  <span>Addresses</span>
                </button>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {user.user_metadata?.full_name || 'User'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                          <Edit className="h-4 w-4 text-gray-400 cursor-pointer hover:text-green-600" />
                        </div>
                        <p className="text-gray-900 dark:text-white">{user.user_metadata?.full_name || 'Not provided'}</p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
                          <Mail className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-gray-900 dark:text-white">{user.email}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone</label>
                          <Phone className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-gray-900 dark:text-white">{user.user_metadata?.phone || 'Not provided'}</p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Address</label>
                          <MapPin className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-gray-900 dark:text-white">
                          {user.user_metadata?.address ? 
                            `${user.user_metadata.address}, ${user.user_metadata.city} - ${user.user_metadata.pincode}` : 
                            'Not provided'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Order History</h3>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">Order #{order.id}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900 dark:text-white">₹{order.total}</p>
                            <span className={`text-sm px-2 py-1 rounded-full ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {order.items.map((item, index) => (
                            <span key={index} className="bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Saved Addresses</h3>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200">
                      Add New Address
                    </button>
                  </div>
                  <div className="space-y-4">
                    {mockAddresses.map((address) => (
                      <div key={address.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{address.type}</h4>
                              {address.isDefault && (
                                <span className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full text-xs">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">{address.address}</p>
                          </div>
                          <button className="text-green-600 hover:text-green-700 font-semibold">
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};