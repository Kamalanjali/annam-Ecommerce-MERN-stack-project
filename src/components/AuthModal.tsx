import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, Lock, Loader2, Phone, Chrome } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose
}) => {
  const [signInMethod, setSignInMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });

  const { signIn, signInWithGoogle, signInWithFacebook } = useAuth();

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const identifier = signInMethod === 'email' ? formData.email : formData.phone;
      const { error } = await signIn(identifier, formData.password);
      if (error) {
        setError(error.message);
      } else {
        onClose();
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await signInWithGoogle();
      if (error) {
        setError(error.message);
      } else {
        onClose();
      }
    } catch (err) {
      setError('Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await signInWithFacebook();
      if (error) {
        setError(error.message);
      } else {
        onClose();
      }
    } catch (err) {
      setError('Facebook sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-fadeInUp">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sign In</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6">
            {/* Sign-in Method Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1 mb-6">
              <button
                onClick={() => setSignInMethod('email')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  signInMethod === 'email'
                    ? 'bg-white dark:bg-gray-600 text-green-600 dark:text-green-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setSignInMethod('phone')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  signInMethod === 'phone'
                    ? 'bg-white dark:bg-gray-600 text-green-600 dark:text-green-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Phone
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {signInMethod === 'email' ? (
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
              <span className="px-4 text-sm text-gray-500 dark:text-gray-400">or</span>
              <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
            </div>

            {/* Social Sign-in */}
            <div className="space-y-3">
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
              >
                <Chrome className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">Continue with Google</span>
              </button>

              <button
                onClick={handleFacebookSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
              >
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">Continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};