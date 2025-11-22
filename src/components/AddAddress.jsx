import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const AddAddress = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    network: 'Ethereum'
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Handle save address logic here
    // For now, just navigate back
    navigate('/send');
  };

  const networks = ['Ethereum', 'Bitcoin', 'Polygon', 'Arbitrum', 'Optimism'];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display relative mx-auto flex h-screen max-w-md flex-col overflow-hidden">
      <div className="flex items-center p-4">
        <button
          onClick={handleBack}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600 dark:text-gray-300"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <div className="flex-1 flex justify-center">
          <img src="/logo.png" alt="Open World Accounts" className="h-10 w-auto" />
        </div>
        <div className="h-10 w-10"></div>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 pt-2 pb-24">
        {/* Name Input */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary"
            id="name"
            name="name"
            placeholder="Enter name (e.g., Alex)"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* Address Input */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="address">
            Address
          </label>
          <div className="relative">
            <input
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 pr-12 text-base font-mono text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              id="address"
              name="address"
              placeholder="0x..."
              type="text"
              value={formData.address}
              onChange={handleInputChange}
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">qr_code_scanner</span>
            </button>
          </div>
        </div>

        {/* Network Selector */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="network">
            Network
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white focus:border-primary focus:ring-primary"
              id="network"
              name="network"
              value={formData.network}
              onChange={handleInputChange}
            >
              {networks.map((network) => (
                <option key={network} value={network}>
                  {network}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined">expand_more</span>
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">info</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-200">Important</p>
              <p className="mt-1 text-xs text-blue-700 dark:text-blue-300">
                Make sure the address is correct. Sending to the wrong address may result in permanent loss of funds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="p-4 pb-24">
        <button
          onClick={handleSave}
          disabled={!formData.name || !formData.address}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
        >
          Save Address
        </button>
      </div>

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default AddAddress;

