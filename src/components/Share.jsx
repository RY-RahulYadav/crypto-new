import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Share = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://openworldaccounts.com/ref/abc123xyz';
  const referralCode = 'ABC123XYZ';

  const handleBack = () => {
    navigate(-1);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: 'chat',
      color: 'bg-green-500'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: 'send',
      color: 'bg-blue-500'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: 'alternate_email',
      color: 'bg-sky-500'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: 'facebook',
      color: 'bg-blue-600'
    },
    {
      id: 'email',
      name: 'Email',
      icon: 'email',
      color: 'bg-gray-500'
    },
    {
      id: 'sms',
      name: 'SMS',
      icon: 'sms',
      color: 'bg-green-600'
    }
  ];

  const handleShare = (platform) => {
    const text = `Join Open World Accounts and get $10! Use my referral code: ${referralCode}`;
    const url = referralLink;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent('Join Open World Accounts')}&body=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'sms':
        window.location.href = `sms:?body=${encodeURIComponent(text + ' ' + url)}`;
        break;
      default:
        break;
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
        {/* Header Section */}
        <div className="text-center mb-6 mt-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-4xl text-primary">card_giftcard</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Invite Friends & Earn</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Get $10 for every friend you refer. They get $10 too!
          </p>
        </div>

        {/* Referral Link Section */}
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 mb-6">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Your Referral Link</p>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white"
            />
            <button
              onClick={handleCopyLink}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-xl">
                {copied ? 'check' : 'content_copy'}
              </span>
            </button>
          </div>
          {copied && (
            <p className="text-xs text-green-500 dark:text-green-400">Copied to clipboard!</p>
          )}
        </div>

        {/* Referral Code Section */}
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 mb-6">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Your Referral Code</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-lg border-2 border-primary bg-primary/10 px-4 py-3 text-center">
              <p className="text-xl font-bold text-primary">{referralCode}</p>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-xl">
                {copied ? 'check' : 'content_copy'}
              </span>
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Share via</h3>
          <div className="grid grid-cols-3 gap-3">
            {shareOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleShare(option.id)}
                className="flex flex-col items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 hover:opacity-90 transition-opacity"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${option.color} text-white`}>
                  <span className="material-symbols-outlined text-2xl">{option.icon}</span>
                </div>
                <span className="text-xs font-medium text-gray-900 dark:text-white">{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Earnings Section */}
        <div className="rounded-lg bg-primary/10 p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Earnings</p>
            <p className="text-2xl font-bold text-primary">$0.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Friends Referred</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">0</p>
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How it Works</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                1
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Share your link</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Send your referral link or code to friends
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                2
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">They sign up</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your friends create an account using your link
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                3
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">You both earn</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  You get $10, they get $10 when they complete signup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Share;

