import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);
  const email = location.state?.email || 'user@example.com';
  const isLogin = location.state?.isLogin || false;

  useEffect(() => {
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
  }, []);

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6 && /^\d+$/.test(char)) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);
    // Focus the last filled input or the last input
    const lastFilledIndex = Math.min(pastedData.length - 1, 5);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      // Verify OTP logic here
      // For now, navigate to home
      navigate('/home');
    }
  };

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    // Resend OTP logic here
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display relative mx-auto flex h-screen max-w-md flex-col overflow-hidden">
      {/* Centered Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-6">
        <div className="w-full max-w-sm">
          {/* Title Section */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Verify Your Email
            </h1>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              We've sent a 6-digit code to
            </p>
            <p className="text-sm text-center font-semibold text-gray-900 dark:text-white mt-1">
              {email}
            </p>
          </div>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-14 text-center text-2xl font-bold rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          ))}
        </div>

        {/* Timer and Resend */}
        <div className="text-center mb-8">
          {!canResend ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Resend code in <span className="font-semibold text-gray-900 dark:text-white">{timer}s</span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Resend Code
            </button>
          )}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={otp.join('').length !== 6}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
        >
          Verify
        </button>

          {/* Change Email */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Change Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;

