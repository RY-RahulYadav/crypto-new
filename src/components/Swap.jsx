import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Swap = () => {
  const navigate = useNavigate();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSwapClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmSwap = () => {
    // Handle swap confirmation
    setIsConfirmModalOpen(false);
    // Navigate to success page or show success message
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
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined text-2xl">history</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 pt-2 pb-24">
        {/* You Swap From Section */}
        <div className="flex flex-col gap-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">You swap from</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input
              className="w-full border-none bg-transparent p-0 text-3xl font-bold text-gray-900 dark:text-white focus:ring-0"
              placeholder="0.00"
              type="text"
              defaultValue="0.0015"
            />
            <button className="flex items-center gap-2 rounded-full bg-background-light dark:bg-background-dark p-2 pr-4 shadow-sm">
              <div
                className="aspect-square size-8 rounded-full bg-cover bg-center"
                data-alt="Bitcoin logo"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0ENR1OJduUeS-VOdjONO-x0NPGsZwia5NIiZJtVOnDyqeRaNbFDwn7XCFU9Luq0W4wa83HMrqgIXa7BRUm1FSKsXc95sP0exshstboPfDfRVFg7dRjkmo6KE8aKkBsV1oCNneZ83AXXdPEAAjTkA_J93ikleolYDEGH-rHJhKq8P6OISHX8EPjhFIIOJv3cntsXiQPRf0z0LICHcoBtGAW75AwXEoL41mdT0QzlUJE2DgbucRJALSVnNbax6T3gfjDIY7ElX-K8g')"
                }}
              ></div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">BTC</span>
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">expand_more</span>
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Balance: 0.0015 BTC</p>
        </div>

        {/* Swap Arrow */}
        <div className="flex items-center justify-center py-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <span className="material-symbols-outlined text-2xl">swap_vert</span>
          </button>
        </div>

        {/* You Swap To Section */}
        <div className="flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
          <div className="flex items-center gap-3">
            <div
              className="aspect-square size-10 rounded-full bg-cover bg-center"
              data-alt="Ethereum logo"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCpuY9TKv2o5cWqRmXTMo-ekPWNQim6ydGNckJKjmm9Glq23KT_8R-p-OhxHaK6BylNkR4ByLullLlaSVywyuDpioOx7OeZ_06-MXnPP2JSRz-J6knkUv2n-TSuMD8ZxwSXTqVynJswZxPQt6DapQzbA2jzO0a62LdlASvUuzoHzjKeIPQII_JCEx3m1yB-EkWNj1iBjf82uDwh2_iYaqNpAz4rsspaIJ06SplXqn9wVoiooi1z8Y5RwTD3mMBmQaijCbOrroXjbQ')"
              }}
            ></div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">You swap to (est.)</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">~0.025 ETH</p>
            </div>
          </div>
          <button className="flex items-center gap-2 rounded-full bg-background-light dark:bg-background-dark p-2 pr-4 shadow-sm">
            <span className="text-lg font-bold text-gray-900 dark:text-white">ETH</span>
            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">expand_more</span>
          </button>
        </div>

        {/* Wallet Section */}
        <div className="mt-6 flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Wallet</p>
              <p className="font-medium text-gray-900 dark:text-white">My Main Wallet</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">chevron_right</span>
        </div>

        {/* Rate and Fee Information */}
        <div className="mt-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-between">
            <p>Rate</p>
            <p className="font-medium text-gray-900 dark:text-white">1 BTC ≈ 16.67 ETH</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Network Fee</p>
            <p className="font-medium text-gray-900 dark:text-white">0.0001 BTC</p>
          </div>
        </div>
      </div>

      {/* Send Crypto, Receive Crypto and Swap Buttons */}
      <div className="p-4 pb-24 space-y-3">
        <button
          onClick={() => navigate('/send')}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-lg font-bold text-gray-900 dark:text-white hover:opacity-90 transition-opacity"
        >
          Send Crypto
        </button>
        <button
          onClick={() => navigate('/receive')}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-lg font-bold text-gray-900 dark:text-white hover:opacity-90 transition-opacity"
        >
          Receive Crypto
        </button>
        <button
          onClick={handleSwapClick}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
        >
          Swap
        </button>
      </div>

      {/* Confirmation Modal */}
      {isConfirmModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col justify-end bg-black/60 backdrop-blur-sm"
          onClick={() => setIsConfirmModalOpen(false)}
        >
          <div
            className="flex flex-col gap-6 rounded-t-xl bg-background-light p-6 dark:bg-background-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Confirm Swap</h2>
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="space-y-4">
              {/* You Swap From */}
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800/50">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">You swap from</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">0.0015 BTC</span>
                </div>
                <div
                  className="aspect-square size-10 rounded-full bg-cover bg-center"
                  data-alt="Bitcoin logo"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0ENR1OJduUeS-VOdjONO-x0NPGsZwia5NIiZJtVOnDyqeRaNbFDwn7XCFU9Luq0W4wa83HMrqgIXa7BRUm1FSKsXc95sP0exshstboPfDfRVFg7dRjkmo6KE8aKkBsV1oCNneZ83AXXdPEAAjTkA_J93ikleolYDEGH-rHJhKq8P6OISHX8EPjhFIIOJv3cntsXiQPRf0z0LICHcoBtGAW75AwXEoL41mdT0QzlUJE2DgbucRJALSVnNbax6T3gfjDIY7ElX-K8g')"
                  }}
                ></div>
              </div>

              {/* Arrow Down */}
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-gray-400 dark:text-gray-500">arrow_downward</span>
              </div>

              {/* You Swap To */}
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800/50">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">You swap to (est.)</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">0.025 ETH</span>
                </div>
                <div
                  className="aspect-square size-10 rounded-full bg-cover bg-center"
                  data-alt="Ethereum logo"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCpuY9TKv2o5cWqRmXTMo-ekPWNQim6ydGNckJKjmm9Glq23KT_8R-p-OhxHaK6BylNkR4ByLullLlaSVywyuDpioOx7OeZ_06-MXnPP2JSRz-J6knkUv2n-TSuMD8ZxwSXTqVynJswZxPQt6DapQzbA2jzO0a62LdlASvUuzoHzjKeIPQII_JCEx3m1yB-EkWNj1iBjf82uDwh2_iYaqNpAz4rsspaIJ06SplXqn9wVoiooi1z8Y5RwTD3mMBmQaijCbOrroXjbQ')"
                  }}
                ></div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              By confirming, you agree to the terms of service. Rate is locked for 60 seconds.
            </div>

            <button
              onClick={handleConfirmSwap}
              className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
            >
              Confirm Swap
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default Swap;

