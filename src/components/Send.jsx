import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Send = () => {
  const navigate = useNavigate();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({
    name: 'Main Wallet',
    balance: '1.25 ETH'
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setIsWalletModalOpen(false);
  };

  const wallets = [
    { name: 'Main Wallet', balance: '1.25 ETH', icon: 'account_balance_wallet' },
    { name: 'Savings', balance: '0.0567 ETH', icon: 'savings' },
    { name: 'Trading', balance: '1,234.56 USDC', icon: 'travel' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-primary-dark relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex h-full w-full flex-1 flex-col">
        {/* Header */}
        <header className="flex w-full items-center justify-between p-4 pt-6">
          <button 
            onClick={handleBack}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark/60"
          >
            <span className="material-symbols-outlined text-text-primary-dark">arrow_back</span>
          </button>
          <div className="flex-1 flex justify-center">
            <img src="/logo.png" alt="Open World Accounts" className="h-10 w-auto" />
          </div>
          <div className="h-10 w-10"></div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 pt-4 pb-6">
          {/* From Wallet Section */}
          <div className="mb-6 rounded-lg bg-surface-dark p-4">
            <span className="text-sm font-medium text-text-secondary-dark">From</span>
            <div
              onClick={() => setIsWalletModalOpen(true)}
              className="mt-2 flex cursor-pointer items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                  <span className="material-symbols-outlined text-blue-400">account_balance_wallet</span>
                </div>
                <div>
                  <p className="font-semibold">{selectedWallet.name}</p>
                  <p className="text-sm text-text-secondary-dark">Balance: {selectedWallet.balance}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-text-secondary-dark">expand_more</span>
            </div>
          </div>

          {/* To Address Input */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-text-secondary-dark" htmlFor="recipient">
              To
            </label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-border-dark bg-surface-dark py-3 pl-4 pr-12 text-base placeholder-text-secondary-dark focus:border-primary focus:ring-primary"
                id="recipient"
                placeholder="Search, public address (0x), or ENS"
                type="text"
              />
              <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-secondary-dark transition-colors hover:text-primary">
                <span className="material-symbols-outlined">qr_code_scanner</span>
              </button>
            </div>
          </div>

          {/* Saved Addresses */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold text-text-secondary-dark">Saved Addresses</h2>
              <button
                onClick={() => navigate('/add-address')}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">add</span>
              </button>
            </div>
            <div className="space-y-3">
              {/* Alex's Address */}
              <div className="flex items-center justify-between rounded-lg bg-surface-dark p-3 transition-colors hover:bg-border-dark cursor-pointer">
                <div className="flex items-center gap-4">
                  <img
                    alt="Alex's avatar"
                    className="h-10 w-10 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIAvizmO3DZE1Asn8Sju0JAyH3wGx6RLuv532bcrgrjE-q0OPJFgodFu7_jDG63LuBY9J2XKSDm-L-Gfj1j7cMRH8yhsCISdwH8zOz7WtmErwZjODfUMqP40s7p5wkp7VamBahxVg4E0xXqwp7HUoF-r52EjY7QJwzCYJh1lb9UPJxbD18tG6BExSBBlDsDBX2uRWSqhKrXno8nLWsFJ7jvMg0HZf3v_kKODch02MZscUdiH9jYhEbPSbHOo8yTUSguCuqoWlQEDY"
                  />
                  <div>
                    <p className="font-semibold">Alex</p>
                    <p className="text-sm text-text-secondary-dark">0x12...aB56</p>
                  </div>
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-full text-text-secondary-dark">
                  <span className="material-symbols-outlined text-xl">arrow_outward</span>
                </button>
              </div>

              {/* Maria's Address */}
              <div className="flex items-center justify-between rounded-lg bg-surface-dark p-3 transition-colors hover:bg-border-dark cursor-pointer">
                <div className="flex items-center gap-4">
                  <img
                    alt="Maria's avatar"
                    className="h-10 w-10 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhSeV0DlO1150yKt3DVRwhDoyIjVtmK9hi9nMtXR4-0OiRGn5_zg26kNvOVrqWk4LuTFwI5UlRdgLD-LnE_zzQkACjaqtA5WiBgxA7o9BcXIlgsGQ-oDCaxotruAabY8sCWU-JimqWxXrqKug8MTfkE5GzcuZFhHaWg23HHQWpiMvtaHVBgrBWGSGqhA_n7ceAAEnNpo_vsU2KGPl1P032QQfzE64LiZ5XMYGp9MUBPS8KC41JsH8In2WRhNr455wPY3n3ybMP5U4"
                  />
                  <div>
                    <p className="font-semibold">Maria</p>
                    <p className="text-sm text-text-secondary-dark">0x45...dE89</p>
                  </div>
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-full text-text-secondary-dark">
                  <span className="material-symbols-outlined text-xl">arrow_outward</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer with Amount Input and Confirm Button */}
        <footer className="w-full border-t border-border-dark bg-background-dark p-4 pb-24">
          <div className="mb-4">
            <div className="flex items-baseline justify-between">
              <label className="text-sm font-medium text-text-secondary-dark" htmlFor="amount">
                Amount
              </label>
              <button className="text-sm font-semibold text-primary">Use Max</button>
            </div>
            <div className="relative mt-2 flex items-center">
              <input
                className="w-full appearance-none rounded-lg border-none bg-transparent p-0 text-4xl font-bold tracking-tight text-text-primary-dark placeholder-text-secondary-dark focus:ring-0"
                id="amount"
                placeholder="0.00"
                type="number"
              />
              <span className="text-4xl font-bold text-text-secondary-dark">ETH</span>
            </div>
            <p className="mt-1 text-sm text-text-secondary-dark">≈ $0.00</p>
          </div>

          {/* Network Fee */}
          <div className="mb-4 flex items-center justify-between rounded-lg bg-surface-dark px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-text-secondary-dark text-xl">local_gas_station</span>
              <span className="font-medium text-text-secondary-dark">Est. Network Fee</span>
            </div>
            <div className="text-right">
              <p className="font-semibold text-text-primary-dark">$0.65</p>
              <p className="text-sm text-text-secondary-dark">0.00019 ETH</p>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-white text-lg font-bold leading-normal tracking-wide transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            disabled
          >
            <span className="truncate">Confirm</span>
          </button>
        </footer>

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
                      name="wallet-send"
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
    </div>
  );
};

export default Send;

