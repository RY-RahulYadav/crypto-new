import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = 'New password must be different from current password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    if (validateForm()) {
      // Handle password reset logic here
      navigate('/settings');
    }
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
        {/* Info Section */}
        <div className="mt-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">info</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-200">Password Requirements</p>
              <ul className="mt-1 text-xs text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1">
                <li>At least 8 characters long</li>
                <li>Include uppercase and lowercase letters</li>
                <li>Include at least one number</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="mt-6 space-y-4">
          {/* Current Password Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="currentPassword">
              Current Password
            </label>
            <div className="relative">
              <input
                className={`w-full rounded-lg border ${
                  errors.currentPassword
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-700'
                } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 pr-12 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                id="currentPassword"
                name="currentPassword"
                placeholder="Enter current password"
                type={showCurrentPassword ? 'text' : 'password'}
                value={formData.currentPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <span className="material-symbols-outlined">
                  {showCurrentPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            {errors.currentPassword && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.currentPassword}</p>
            )}
          </div>

          {/* New Password Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="newPassword">
              New Password
            </label>
            <div className="relative">
              <input
                className={`w-full rounded-lg border ${
                  errors.newPassword
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-700'
                } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 pr-12 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                type={showNewPassword ? 'text' : 'password'}
                value={formData.newPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <span className="material-symbols-outlined">
                  {showNewPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            {errors.newPassword && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                className={`w-full rounded-lg border ${
                  errors.confirmPassword
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-700'
                } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 pr-12 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm new password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <span className="material-symbols-outlined">
                  {showConfirmPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <div className="p-4 pb-24">
        <button
          onClick={handleReset}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
        >
          Reset Password
        </button>
      </div>

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default ResetPassword;

