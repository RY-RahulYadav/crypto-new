import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [registerStep, setRegisterStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

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

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.country) {
      newErrors.country = 'Country is required';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required';
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        const actualAge = age - 1;
        if (actualAge < 18) {
          newErrors.dob = 'You must be at least 18 years old';
        }
      } else if (age < 18) {
        newErrors.dob = 'You must be at least 18 years old';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setRegisterStep(2);
      setErrors({});
    }
  };

  const handleBack = () => {
    setRegisterStep(1);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      // Navigate to OTP screen for email verification
      navigate('/otp', { state: { email: formData.email, isLogin: false } });
    }
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up
    // For now, navigate directly to home
    navigate('/home');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display relative mx-auto flex h-screen max-w-md flex-col overflow-hidden">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-12 pb-6">
        <div className="w-full max-w-sm mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="Open World Accounts" className="h-20 w-auto" />
          </div>

          {/* Title Section */}
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {registerStep === 1 ? 'Create Account' : 'Set Password'}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {registerStep === 1 ? 'Sign up to get started' : 'Create a secure password'}
            </p>
          </div>

          {/* Google Sign Up Button - Only show on step 1 */}
          {registerStep === 1 && (
            <>
              <button
                onClick={handleGoogleSignUp}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 h-12 text-base font-semibold text-gray-900 dark:text-white hover:opacity-90 transition-opacity mb-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-3">
                <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">OR</span>
                <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
              </div>
            </>
          )}

          {/* Back Button - Only show on step 2 */}
          {registerStep === 2 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6 hover:opacity-80 transition-opacity"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="text-sm font-medium">Back</span>
            </button>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1: Basic Details */}
            {registerStep === 1 && (
              <>
                {/* Name Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className={`w-full rounded-lg border ${
                      errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`w-full rounded-lg border ${
                      errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className={`w-full rounded-lg border ${
                      errors.phone ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.phone}</p>
                  )}
                </div>

                {/* Country Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="country">
                    Country
                  </label>
                  <input
                    className={`w-full rounded-lg border ${
                      errors.country ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="country"
                    name="country"
                    placeholder="Enter your country"
                    type="text"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                  {errors.country && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.country}</p>
                  )}
                </div>

                {/* Date of Birth Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    className={`w-full rounded-lg border ${
                      errors.dob ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                    max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                  />
                  {errors.dob && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.dob}</p>
                  )}
                </div>
              </>
            )}

            {/* Step 2: Password */}
            {registerStep === 2 && (
              <>
                {/* Password Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="password">
                    Password
                  </label>
                  <input
                    className={`w-full rounded-lg border ${
                      errors.password ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    className={`w-full rounded-lg border ${
                      errors.confirmPassword ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.confirmPassword}</p>
                  )}
                </div>
              </>
            )}

            {/* Action Buttons */}
            {registerStep === 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity mt-6"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity mt-6"
              >
                Sign Up
              </button>
            )}
          </form>

          {/* Link to Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

