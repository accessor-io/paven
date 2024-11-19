import { Modal, Input } from '../common';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing to newsletter:', { email, interests });
  };

  const toggleInterest = (interest) => {
    setInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="Subscribe to Our Newsletter"
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Areas of Interest
          </label>
          {['Programs', 'Events', 'Volunteer Opportunities', 'Impact Stories'].map((interest) => (
            <label key={interest} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">{interest}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Subscribe
        </button>

        <p className="text-sm text-gray-500 text-center">
          You can unsubscribe at any time. View our Privacy Policy.
        </p>
      </form>
    </Modal>
  );
};

NewsletterModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default NewsletterModal; 