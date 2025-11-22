import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Alex',
    email: 'alex@example.com',
    phone: '+1 234 567 8900',
    dob: '1990-01-15',
    country: 'United States'
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
    // Handle save profile logic here
    navigate('/settings');
  };

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
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center py-6">
          <div className="relative">
            <div
              className="h-24 w-24 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3-JCNBUU8OFaD-716aKn95cO9G--inuVFXwA73iMCncq9n4MZrXsZKtmlfNsFVnsB8uCHSm-qwBiVqHIOQmlL_J5mN-oUz0KT2rdmhzm2Iv_hV9XvXmSA6SJ3SjFSZsE5mbRUiivnzL4FiGSC11wHaCKykFYg1gE8IrB9_d4KVdDwDqX_GAGpy1rO6W_a5s07gWWfe4dxj02HVVIesJ6V0sUyAWeYdWvuAlvnfzUcAo3_DgXaXILqxaqR-XxEhKeocOwTMSoGlyI")'
              }}
            ></div>
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">camera_alt</span>
            </button>
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{formData.name}</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              id="name"
              name="name"
              placeholder="Enter your full name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* Date of Birth Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </div>

          {/* Country Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="country">
              Country
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              id="country"
              name="country"
              placeholder="Enter your country"
              type="text"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="p-4 pb-24">
        <button
          onClick={handleSave}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
        >
          Save Changes
        </button>
      </div>

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default Profile;

