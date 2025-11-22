import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const SelectAsset = () => {
  const navigate = useNavigate();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({
    name: 'My Main Wallet',
    balance: '0.1234 BTC'
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate('/buy');
  };

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setIsWalletModalOpen(false);
  };

  const wallets = [
    { name: 'My Main Wallet', balance: '0.1234 BTC', icon: 'account_balance_wallet' },
    { name: 'Savings', balance: '0.0567 ETH', icon: 'savings' },
    { name: 'Trading', balance: '1,234.56 USDC', icon: 'travel' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-background-light/[.85] p-4 pb-2 backdrop-blur-sm dark:bg-background-dark/[.85]">
        <button
          onClick={handleBack}
          className="flex size-10 shrink-0 items-center justify-center text-slate-800 dark:text-white"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <div className="flex-1 flex justify-center">
          <img src="/logo.png" alt="Open World Accounts" className="h-10 w-auto" />
        </div>
        <div className="flex size-10 shrink-0 items-center justify-center"></div>
      </div>

      <div className="flex flex-1 flex-col px-4">
        {/* Wallet Selector */}
        <div className="py-4">
          <p className="mb-2 text-sm font-medium text-slate-500 dark:text-gray-400">Deposit to</p>
          <div
            onClick={() => setIsWalletModalOpen(true)}
            className="flex cursor-pointer items-center gap-4 rounded-lg bg-slate-200/50 p-4 dark:bg-white/5"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-primary">
              <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-base font-medium leading-normal text-slate-900 dark:text-white line-clamp-1">
                {selectedWallet.name}
              </p>
              <p className="text-sm font-normal leading-normal text-slate-500 dark:text-gray-400 line-clamp-2">
                {selectedWallet.balance}
              </p>
            </div>
            <div className="ml-auto shrink-0">
              <div className="flex size-7 items-center justify-center text-slate-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-2xl">expand_more</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="py-3">
          <label className="flex h-12 w-full flex-col">
            <div className="flex h-full w-full flex-1 items-stretch rounded-full">
              <div className="flex items-center justify-center rounded-l-full border-r-0 bg-slate-200/50 pl-4 text-slate-500 dark:bg-white/5 dark:text-gray-400">
                <span className="material-symbols-outlined text-2xl">search</span>
              </div>
              <input
                className="form-input h-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full border-none bg-slate-200/50 pl-2 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-500 focus:outline-0 focus:ring-0 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400"
                placeholder="Search for a currency"
                defaultValue=""
              />
            </div>
          </label>
        </div>

        {/* Cryptocurrency List */}
        <div className="flex flex-col gap-3 py-3">
          {/* Bitcoin */}
          <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-solid p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10 border-slate-300 dark:border-slate-700">
            <img
              alt="Bitcoin logo"
              className="size-10 rounded-full"
              data-alt="Bitcoin logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsPu3o7Zz0DYncl7Mxq2HlgFhzu1D81sIgtu-L5xnuO2QW8KXGqb7fpg02kge2rNgZyPx9y-zsgu2CMfDEpR1m49FQo07673nfd1SzR7KtHGVaYVVI7ul3HNvjbZidPS42ZoII7J1wD63eBgONeCsnVy8Wlj4gOeEdcdkLomItY9CaIPh4jFOEHdcIkJLls_hxHXKK-kWT4mXDDxuPASPpsNUUfgK5UNDvfAGGX0o_y_tZIeWEDOIuTRyD9rfCc7jzG1jMjBc3pgU"
            />
            <div className="flex grow flex-col">
              <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">Bitcoin</p>
              <p className="text-sm font-normal leading-normal text-slate-500 dark:text-gray-400">BTC</p>
            </div>
            <input
              className="form-radio radio-custom ml-auto h-5 w-5 cursor-pointer border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 border-slate-300 dark:border-slate-700 checked:border-primary"
              name="crypto-asset"
              type="radio"
            />
          </label>

          {/* Ethereum */}
          <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-solid p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10 border-slate-300 dark:border-slate-700">
            <img
              alt="Ethereum logo"
              className="size-10 rounded-full"
              data-alt="Ethereum logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCpuY9TKv2o5cWqRmXTMo-ekPWNQim6ydGNckJKjmm9Glq23KT_8R-p-OhxHaK6BylNkR4ByLullLlaSVywyuDpioOx7OeZ_06-MXnPP2JSRz-J6knkUv2n-TSuMD8ZxwSXTqVynJswZxPQt6DapQzbA2jzO0a62LdlASvUuzoHzjKeIPQII_JCEx3m1yB-EkWNj1iBjf82uDwh2_iYaqNpAz4rsspaIJ06SplXqn9wVoiooi1z8Y5RwTD3mMBmQaijCbOrroXjbQ"
            />
            <div className="flex grow flex-col">
              <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">Ethereum</p>
              <p className="text-sm font-normal leading-normal text-slate-500 dark:text-gray-400">ETH</p>
            </div>
            <input
              className="form-radio ml-auto h-5 w-5 cursor-pointer border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 border-slate-300 dark:border-slate-700 checked:border-primary checked:bg-primary"
              name="crypto-asset"
              type="radio"
              defaultChecked
            />
          </label>

          {/* Solana */}
          <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-solid p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10 border-slate-300 dark:border-slate-700">
            <img
              alt="Solana logo"
              className="size-10 rounded-full"
              data-alt="Solana logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3XDIhjkQlP2x3gBeqm1WD-hS-dJjVsCIbuoaPnX6UBaQAuFqRMtVpO6WVrpSeDdv9UURJoeXLtEllXYROe_ilmGIctG3qA-Xk_99NYuHgdd2K6eev1b-65CqiVb8_hirMM04-PQ_R0UMGQ_sGAlcBkXfQeGQVp1pQB9llnZnvnQgbqb5lLch4aud1K9zfrfiW7ByqV50vz08mnn29iXhfjpr6gt1YrzeD43cHCWr_LQpWEYYzwtljXQ5B0qYDReglGE8ffXiOUU"
            />
            <div className="flex grow flex-col">
              <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">Solana</p>
              <p className="text-sm font-normal leading-normal text-slate-500 dark:text-gray-400">SOL</p>
            </div>
            <input
              className="form-radio radio-custom ml-auto h-5 w-5 cursor-pointer border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 border-slate-300 dark:border-slate-700 checked:border-primary"
              name="crypto-asset"
              type="radio"
            />
          </label>

          {/* USDC */}
          <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-solid p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/10 border-slate-300 dark:border-slate-700">
            <img
              alt="USDC logo"
              className="size-10 rounded-full"
              data-alt="USDC logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuzgJMDLB780ZKeYzFsxpWrVkYF8r8iOeqUAxdPl4tbpTZZU3DcQjjvbAPPmXU1O1HfXwe8xEkktBVGII65_HknNEUIWXppcOZi0QL9SZDPBwrDoHLE0P6gKGC53E9WfCjQLOGnILm11uNDCda-7_gbtppUweRXF25exrsWK5omOMzYUO_KkFKDm0HQALIs2hnymfdvrbIzJ7-m2O7DB7UsjddNgQ2SfhTQEXw_es0YlbdCwPwffYrHSSjpbQ4tFoqju66qkiTiO0"
            />
            <div className="flex grow flex-col">
              <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">USDC</p>
              <p className="text-sm font-normal leading-normal text-slate-500 dark:text-gray-400">USDC</p>
            </div>
            <input
              className="form-radio radio-custom ml-auto h-5 w-5 cursor-pointer border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 border-slate-300 dark:border-slate-700 checked:border-primary"
              name="crypto-asset"
              type="radio"
            />
          </label>
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-4 pb-24">
        <button
          onClick={handleContinue}
          className="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white hover:opacity-90 transition-opacity"
        >
          <span className="truncate">Continue</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <Footer />

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
                      {wallet.balance}
                    </p>
                  </div>
                  <input
                    className="form-radio radio-custom ml-auto h-5 w-5 cursor-pointer border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 border-slate-300 dark:border-slate-700 checked:border-primary"
                    name="wallet"
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
    </div>
  );
};

export default SelectAsset;

