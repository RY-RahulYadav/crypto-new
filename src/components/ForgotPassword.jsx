import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [errors, setErrors] = useState({});
  const inputRefs = useRef([]);

  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const validateEmail = () => {
    if (!email) {
      setErrors({ email: 'Email is required' });
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: 'Email is invalid' });
      return false;
    }
    return true;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      setStep(2);
      setTimer(60);
      setCanResend(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6 && /^\d+$/.test(char)) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);
    const lastFilledIndex = Math.min(pastedData.length - 1, 5);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleOtpVerify = () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setErrors({ otp: 'Please enter the complete 6-digit code' });
      return;
    }
    // Verify OTP logic here
    setStep(3);
    setErrors({});
  };

  const handleResendOtp = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    // Resend OTP logic here
  };

  const validatePassword = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      // Handle password reset logic here
      navigate('/login');
    }
  };

  const handleBack = () => {
    if (step === 1) {
      navigate('/login');
    } else if (step === 2) {
      setStep(1);
      setOtp(['', '', '', '', '', '']);
      setErrors({});
    } else {
      setStep(2);
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display relative mx-auto flex h-screen max-w-md flex-col overflow-hidden">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="w-full max-w-sm mx-auto">
          {/* Back Button */}
          <div className="pt-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:opacity-80 transition-opacity"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>

          {/* Main Content Section - Vertically Centered */}
          <div className="flex flex-col justify-center min-h-[calc(100vh-120px)] pt-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src="/logo.png" alt="Open World Accounts" className="h-24 w-auto" />
            </div>

            {/* Title Section */}
            <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {step === 1 && 'Forgot Password?'}
              {step === 2 && 'Verify Your Email'}
              {step === 3 && 'Reset Password'}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {step === 1 && 'Enter your email address and we\'ll send you an OTP to reset your password'}
              {step === 2 && `We've sent a 6-digit code to`}
              {step === 3 && 'Enter your new password below'}
            </p>
            {step === 2 && (
              <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1">
                {email}
              </p>
            )}
          </div>

          {/* Step 1: Email Input */}
          {step === 1 && (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
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
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              <button
                type="submit"
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity mt-6"
              >
                Send OTP
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Remember your password?{' '}
                  <button
                    onClick={() => navigate('/login')}
                    className="font-semibold text-primary hover:opacity-80 transition-opacity"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* Step 2: OTP Input */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-center gap-3 mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      className="w-12 h-14 text-center text-2xl font-bold rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  ))}
                </div>
                {errors.otp && (
                  <p className="text-center text-xs text-red-500 dark:text-red-400">{errors.otp}</p>
                )}
              </div>

              <div className="text-center">
                {!canResend ? (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Resend code in <span className="font-semibold text-gray-900 dark:text-white">{timer}s</span>
                  </p>
                ) : (
                  <button
                    onClick={handleResendOtp}
                    className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                  >
                    Resend Code
                  </button>
                )}
              </div>

              <button
                onClick={handleOtpVerify}
                disabled={otp.join('').length !== 6}
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
              >
                Verify
              </button>

              <div className="text-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  Change Email
                </button>
              </div>
            </div>
          )}

          {/* Step 3: New Password */}
          {step === 3 && (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="password">
                  New Password
                </label>
                <div className="relative">
                  <input
                    className={`w-full rounded-lg border ${
                      errors.password ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 pr-12 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="password"
                    name="password"
                    placeholder="Enter new password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) {
                        setErrors(prev => ({ ...prev, password: '' }));
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    className={`w-full rounded-lg border ${
                      errors.confirmPassword ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 pr-12 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm new password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (errors.confirmPassword) {
                        setErrors(prev => ({ ...prev, confirmPassword: '' }));
                      }
                    }}
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

              <button
                type="submit"
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity mt-6"
              >
                Reset Password
               </button>
             </form>
           )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
