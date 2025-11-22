import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Sell = () => {
  const navigate = useNavigate();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({
    name: 'My BTC Wallet',
    balance: '0.0015 BTC',
    icon: 'account_balance_wallet'
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleSellClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmSell = () => {
    // Handle sell confirmation
    setIsConfirmModalOpen(false);
    // Navigate to success page or show success message
  };

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setIsWalletModalOpen(false);
  };

  const wallets = [
    { name: 'My BTC Wallet', balance: '0.0015 BTC', icon: 'account_balance_wallet' },
    { name: 'My ETH Wallet', balance: '0.25 ETH', icon: 'account_balance_wallet' },
    { name: 'Savings Wallet', balance: '1,234.56 USDC', icon: 'savings' }
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
        {/* You Sell Section */}
        <div className="flex flex-col gap-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">You sell</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input
              className="w-full border-none bg-transparent p-0 text-3xl font-bold text-gray-900 dark:text-white focus:ring-0"
              placeholder="0.00"
              type="text"
              defaultValue="0.0015"
            />
            <div className="flex items-center gap-2 rounded-full bg-background-light dark:bg-background-dark p-2 pr-4 shadow-sm">
              <div
                className="aspect-square size-8 rounded-full bg-cover bg-center"
                data-alt="Bitcoin logo"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0ENR1OJduUeS-VOdjONO-x0NPGsZwia5NIiZJtVOnDyqeRaNbFDwn7XCFU9Luq0W4wa83HMrqgIXa7BRUm1FSKsXc95sP0exshstboPfDfRVFg7dRjkmo6KE8aKkBsV1oCNneZ83AXXdPEAAjTkA_J93ikleolYDEGH-rHJhKq8P6OISHX8EPjhFIIOJv3cntsXiQPRf0z0LICHcoBtGAW75AwXEoL41mdT0QzlUJE2DgbucRJALSVnNbax6T3gfjDIY7ElX-K8g')"
                }}
              ></div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">BTC</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Balance: 0.0015 BTC</p>
        </div>

        {/* You Receive Section */}
        <div className="mt-1 flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-lg font-bold text-white">
              €
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">You receive (est.)</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">~92.50 EUR</p>
            </div>
          </div>
        </div>

        {/* Selling From Wallet Section */}
        <button
          onClick={() => setIsWalletModalOpen(true)}
          className="mt-6 flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 hover:opacity-90 transition-opacity cursor-pointer w-full text-left"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Selling From</p>
              <p className="font-medium text-gray-900 dark:text-white">{selectedWallet.name}</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">chevron_right</span>
        </button>

        {/* Rate and Fee Information */}
        <div className="mt-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-between">
            <p>Rate</p>
            <p className="font-medium text-gray-900 dark:text-white">1 BTC ≈ €61,850.50</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Processing Fee</p>
            <p className="font-medium text-gray-900 dark:text-white">€1.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Network Fee</p>
            <p className="font-medium text-gray-900 dark:text-white">€0.25</p>
          </div>
        </div>
      </div>

      {/* Sell Button */}
      <div className="p-4 pb-24">
        <button
          onClick={handleSellClick}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
        >
          Sell BTC
        </button>
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
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Select Wallet</h3>
              <button
                onClick={() => setIsWalletModalOpen(false)}
                className="flex size-10 items-center justify-center text-slate-500 dark:text-gray-400"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-3 p-4 overflow-y-auto flex-1 min-h-0">
              {wallets.map((wallet, index) => (
                <label
                  key={index}
                  className={`flex cursor-pointer items-center gap-4 rounded-lg border border-solid p-4 ${
                    selectedWallet.name === wallet.name
                      ? 'border-primary bg-primary/10'
                      : 'border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800'
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
                      {wallet.balance}
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="wallet-sell"
                    checked={selectedWallet.name === wallet.name}
                    onChange={() => handleWalletSelect(wallet)}
                    className="form-radio radio-custom ml-auto h-5 w-5 cursor-pointer border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 border-slate-300 dark:border-slate-700 checked:border-primary"
                  />
                </label>
              ))}
            </div>

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
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Confirm Sale</h2>
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="space-y-4">
              {/* You Sell */}
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800/50">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">You sell</span>
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

              {/* You Receive */}
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800/50">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">You receive (est.)</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">92.50 EUR</span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-lg font-bold text-white">
                  €
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              By confirming, you agree to the terms of service. Rate is locked for 60 seconds.
            </div>

            <button
              onClick={handleConfirmSell}
              className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
            >
              Confirm Sale
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default Sell;

