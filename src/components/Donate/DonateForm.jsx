const DonateForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Support Our Mission</h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <DonationAmount amount={25} />
          <DonationAmount amount={50} />
          <DonationAmount amount={100} />
          <DonationAmount amount={250} />
          <DonationAmount amount={500} />
          <DonationAmount amount="custom" />
        </div>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Complete Donation
          </button>
        </div>
      </div>
    </div>
  );
}; 