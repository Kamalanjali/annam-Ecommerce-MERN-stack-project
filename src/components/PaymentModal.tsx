import React, { useState } from 'react';
import { X, CreditCard, Smartphone, Wallet, Building, Truck, CheckCircle } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onPaymentSuccess: () => void;
}

type PaymentMethod = 'upi' | 'card' | 'wallet' | 'netbanking' | 'cod';

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  totalAmount,
  onPaymentSuccess
}) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('upi');
  const [loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({
    upiId: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    walletProvider: 'paytm',
    bankName: '',
    accountNumber: '',
    ifscCode: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      onPaymentSuccess();
      onClose();
    }, 2000);
  };

  const paymentMethods = [
    {
      id: 'upi' as PaymentMethod,
      name: 'UPI',
      icon: Smartphone,
      description: 'Pay using UPI ID'
    },
    {
      id: 'card' as PaymentMethod,
      name: 'Cards',
      icon: CreditCard,
      description: 'Credit/Debit Cards'
    },
    {
      id: 'wallet' as PaymentMethod,
      name: 'Wallets',
      icon: Wallet,
      description: 'Digital Wallets'
    },
    {
      id: 'netbanking' as PaymentMethod,
      name: 'Net Banking',
      icon: Building,
      description: 'Internet Banking'
    },
    {
      id: 'cod' as PaymentMethod,
      name: 'Cash on Delivery',
      icon: Truck,
      description: 'Pay when delivered'
    }
  ];

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'upi':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                UPI ID
              </label>
              <input
                type="text"
                name="upiId"
                value={paymentData.upiId}
                onChange={handleInputChange}
                placeholder="yourname@upi"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                required
              />
            </div>
          </div>
        );

      case 'card':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardName"
                value={paymentData.cardName}
                onChange={handleInputChange}
                placeholder="Name on card"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                required
              />
            </div>
          </div>
        );

      case 'wallet':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Wallet
              </label>
              <select
                name="walletProvider"
                value={paymentData.walletProvider}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
              >
                <option value="paytm">Paytm</option>
                <option value="phonepe">PhonePe</option>
                <option value="googlepay">Google Pay</option>
                <option value="amazonpay">Amazon Pay</option>
                <option value="mobikwik">MobiKwik</option>
              </select>
            </div>
            <p className="text-sm text-gray-600">
              You will be redirected to your selected wallet app to complete the payment.
            </p>
          </div>
        );

      case 'netbanking':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Bank
              </label>
              <select
                name="bankName"
                value={paymentData.bankName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-400 transition-colors duration-200"
                required
              >
                <option value="">Choose your bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra Bank</option>
                <option value="pnb">Punjab National Bank</option>
                <option value="canara">Canara Bank</option>
                <option value="bob">Bank of Baroda</option>
              </select>
            </div>
            <p className="text-sm text-gray-600">
              You will be redirected to your bank's secure login page.
            </p>
          </div>
        );

      case 'cod':
        return (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Truck className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Cash on Delivery</h4>
              </div>
              <p className="text-sm text-amber-700">
                Pay ₹{totalAmount} in cash when your order is delivered to your doorstep.
              </p>
              <p className="text-xs text-amber-600 mt-2">
                Additional COD charges: ₹40
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Important Notes:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Please keep exact change ready</li>
                <li>• COD available for orders up to ₹5,000</li>
                <li>• Delivery within 2-3 business days</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
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
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-fadeInUp">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Payment</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="p-6">
            {/* Amount Summary */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                <span className="text-2xl font-bold text-green-600">
                  ₹{selectedMethod === 'cod' ? totalAmount + 40 : totalAmount}
                </span>
              </div>
              {selectedMethod === 'cod' && (
                <p className="text-sm text-gray-600 mt-1">
                  (Includes ₹40 COD charges)
                </p>
              )}
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Payment Method</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-xl border transition-all duration-200 text-left ${
                      selectedMethod === method.id
                        ? 'bg-green-600 text-white border-green-600 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-green-300 hover:bg-green-50'
                    }`}
                  >
                    <method.icon className={`h-6 w-6 mb-2 ${
                      selectedMethod === method.id ? 'text-white' : 'text-green-600'
                    }`} />
                    <p className={`font-semibold text-sm ${
                      selectedMethod === method.id ? 'text-white' : 'text-gray-900'
                    }`}>
                      {method.name}
                    </p>
                    <p className={`text-xs mt-1 ${
                      selectedMethod === method.id ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {method.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Form */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
              {renderPaymentForm()}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePayment}
                disabled={loading}
                className="flex-1 bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>
                      {selectedMethod === 'cod' ? 'Place Order' : `Pay ₹${selectedMethod === 'cod' ? totalAmount + 40 : totalAmount}`}
                    </span>
                  </>
                )}
              </button>
              
              <button
                onClick={onClose}
                className="sm:w-32 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};