import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Receive = () => {
  const navigate = useNavigate();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({
    name: 'My Main Wallet',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0'
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setIsWalletModalOpen(false);
  };

  const wallets = [
    { name: 'My Main Wallet', address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0', icon: 'account_balance_wallet' },
    { name: 'Savings', address: '0x1234567890abcdef1234567890abcdef12345678', icon: 'savings' },
    { name: 'Trading', address: '0xabcdef1234567890abcdef1234567890abcdef12', icon: 'travel' }
  ];

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
        {/* QR Code Section */}
        <div className="flex flex-col items-center gap-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 p-6 mt-4">
          <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-white p-4">
            <div className="flex h-full w-full items-center justify-center rounded border-2 border-dashed border-gray-300">
              <span className="material-symbols-outlined text-6xl text-gray-400">qr_code_2</span>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Scan to receive</p>
        </div>

        {/* Wallet Selector */}
        <div
          onClick={() => setIsWalletModalOpen(true)}
          className="mt-6 flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receiving to</p>
              <p className="font-medium text-gray-900 dark:text-white">{selectedWallet.name}</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">expand_more</span>
        </div>

        {/* Address Section */}
        <div className="mt-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Your Address</p>
          <div className="flex items-center justify-between gap-3 rounded-lg bg-background-light dark:bg-background-dark p-3">
            <p className="flex-1 break-all text-sm font-mono text-gray-900 dark:text-white">
              {selectedWallet.address}
            </p>
            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <span className="material-symbols-outlined text-lg">content_copy</span>
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <button className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined text-2xl">share</span>
            </div>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Share</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined text-2xl">download</span>
            </div>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Save</span>
          </button>
        </div>
      </div>

      {/* Wallet Selection Modal */}
      {isWalletModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col justify-end bg-black/50"
          onClick={() => setIsWalletModalOpen(false)}
        >
          <div
            className="flex flex-col rounded-t-xl bg-slate-100 dark:bg-slate-900 max-h-[80vh] flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 pb-2 flex-shrink-0">
              <div className="flex size-10 items-center justify-center"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Select a Wallet</h3>
              <button
                onClick={() => setIsWalletModalOpen(false)}
                className="flex size-10 items-center justify-center text-slate-500 dark:text-gray-400"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Scrollable wallet list */}
            <div className="flex flex-col gap-3 p-4 overflow-y-auto flex-1 min-h-0">
              {wallets.map((wallet, index) => (
                <label
                  key={index}
                  className={`flex cursor-pointer items-center gap-4 rounded-lg border border-solid p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10 border-slate-300 dark:border-slate-700 flex-shrink-0 ${
                    selectedWallet.name === wallet.name ? 'border-primary bg-primary/10' : ''
                  }`}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-primary">
                    <span className="material-symbols-outlined text-2xl">{wallet.icon}</span>
                  </div>
                  <div className="flex grow flex-col">
                    <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">
                      {wallet.name}
                    </p>
                    <p className="text-sm font-normal leading-normal text-slate-500 dark:text-gray-400">
                      {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                    </p>
                  </div>
                  <input
                    className="form-radio radio-custom ml-auto h-5 w-5 cursor-pointer border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 border-slate-300 dark:border-slate-700 checked:border-primary"
                    name="wallet-receive"
                    type="radio"
                    checked={selectedWallet.name === wallet.name}
                    onChange={() => handleWalletSelect(wallet)}
                  />
                </label>
              ))}
            </div>

            {/* Fixed button at bottom */}
            <div className="p-4 pt-2 pb-6 flex-shrink-0 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setIsWalletModalOpen(false)}
                className="flex h-12 min-w-[84px] max-w-[480px] w-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white hover:opacity-90 transition-opacity"
              >
                <span className="truncate">Select Wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default Receive;

