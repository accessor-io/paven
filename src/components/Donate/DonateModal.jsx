import { Modal } from '../common';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DonateModal = ({ onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Processing donation:', { amount, paymentMethod });
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="Make a Donation"
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Donation Amount Options */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Amount
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[25, 50, 100, 250, 500, 1000].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className={`px-4 py-2 rounded-lg border ${
                  amount === value
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 hover:border-blue-600'
                }`}
              >
                ${value}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <input
              type="number"
              placeholder="Custom Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={`px-4 py-2 rounded-lg border ${
                paymentMethod === 'card'
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              Credit Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod('paypal')}
              className={`px-4 py-2 rounded-lg border ${
                paymentMethod === 'paypal'
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              PayPal
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Complete Donation
        </button>

        <p className="text-sm text-gray-500 text-center">
          Your donation is tax deductible. You will receive a receipt via email.
        </p>
      </form>
    </Modal>
  );
};

DonateModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default DonateModal; 