import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Buy = () => {
  const navigate = useNavigate();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({
    name: 'My BTC Wallet',
    balance: '0.0015 BTC',
    icon: 'account_balance_wallet'
  });
  const [selectedPayment, setSelectedPayment] = useState({
    type: 'Visa',
    last4: '1234',
    icon: 'credit_card'
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleBuyClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmPurchase = () => {
    // Handle purchase confirmation
    setIsConfirmModalOpen(false);
    // Navigate to success page or show success message
  };

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setIsWalletModalOpen(false);
  };

  const handlePaymentSelect = (payment) => {
    setSelectedPayment(payment);
    setIsPaymentModalOpen(false);
  };

  const wallets = [
    { name: 'My BTC Wallet', balance: '0.0015 BTC', icon: 'account_balance_wallet' },
    { name: 'My ETH Wallet', balance: '0.25 ETH', icon: 'account_balance_wallet' },
    { name: 'Savings Wallet', balance: '1,234.56 USDC', icon: 'savings' }
  ];

  const paymentMethods = [
    { type: 'Visa', last4: '1234', icon: 'credit_card', name: 'Visa •••• 1234' },
    { type: 'Mastercard', last4: '5678', icon: 'credit_card', name: 'Mastercard •••• 5678' },
    { type: 'PayPal', last4: '', icon: 'account_balance', name: 'PayPal' },
    { type: 'Bank Transfer', last4: '', icon: 'account_balance', name: 'Bank Transfer' }
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
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined text-2xl">history</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 pt-2 pb-24">
        {/* You Spend Section */}
        <div className="flex flex-col gap-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">You spend</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input
              className="w-full border-none bg-transparent p-0 text-3xl font-bold text-gray-900 dark:text-white focus:ring-0"
              placeholder="0.00"
              type="text"
              defaultValue="100"
            />
            <div className="flex items-center gap-2 rounded-full bg-background-light dark:bg-background-dark p-2 pr-4 shadow-sm">
              <div
                className="aspect-square size-8 rounded-full bg-cover bg-center"
                data-alt="USD flag"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAT-b3ArN2nW5YtIB3ESPKEv-LSZUZ8vrkF5zMH3GE9roLxfQ7uze24Jy9IUnirGGgbI2xubGjSPy6cKSrU4czlPNJzAS8yb6f_2yZt4UkgHtAGkRCspzVK8i1k5gZP3S20Z5u-d_YhaO_w3nnhby208nGjGdcCL0bq_8FfdcjkQUZ8frXSdB1rZAyNL34dvvJLnJtKm06HTEfCjT9msWSrEyVdnNRbi7VB28q1FZcetX0IQ6HmjjWaGC2b9N4FwMuIF8vDEP9kp0')"
                }}
              ></div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">USD</span>
            </div>
          </div>
        </div>

        {/* You Get Section */}
        <div className="mt-1 flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
          <div className="flex items-center gap-3">
            <div
              className="aspect-square size-10 rounded-full bg-cover bg-center"
              data-alt="Bitcoin logo"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0ENR1OJduUeS-VOdjONO-x0NPGsZwia5NIiZJtVOnDyqeRaNbFDwn7XCFU9Luq0W4wa83HMrqgIXa7BRUm1FSKsXc95sP0exshstboPfDfRVFg7dRjkmo6KE8aKkBsV1oCNneZ83AXXdPEAAjTkA_J93ikleolYDEGH-rHJhKq8P6OISHX8EPjhFIIOJv3cntsXiQPRf0z0LICHcoBtGAW75AwXEoL41mdT0QzlUJE2DgbucRJALSVnNbax6T3gfjDIY7ElX-K8g')"
              }}
            ></div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">You get (est.)</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">~0.0025 BTC</p>
            </div>
          </div>
        </div>

        {/* Receiving Wallet Section */}
        <button
          onClick={() => setIsWalletModalOpen(true)}
          className="mt-6 flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 hover:opacity-90 transition-opacity cursor-pointer w-full text-left"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receiving Wallet</p>
              <p className="font-medium text-gray-900 dark:text-white">{selectedWallet.name}</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">chevron_right</span>
        </button>

        {/* Payment Method Section */}
        <button
          onClick={() => setIsPaymentModalOpen(true)}
          className="mt-2 flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 hover:opacity-90 transition-opacity cursor-pointer w-full text-left"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">credit_card</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Payment Method</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {selectedPayment.last4 ? `${selectedPayment.type} •••• ${selectedPayment.last4}` : selectedPayment.type}
              </p>
            </div>
          </div>
          <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">chevron_right</span>
        </button>

        {/* Rate and Fee Information */}
        <div className="mt-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-between">
            <p>Rate</p>
            <p className="font-medium text-gray-900 dark:text-white">1 BTC ≈ $40,000 USD</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Provider Fee</p>
            <p className="font-medium text-gray-900 dark:text-white">$2.99</p>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <div className="p-4 pb-24">
        <button
          onClick={handleBuyClick}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
        >
          Buy BTC
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
                    name="wallet-buy"
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

      {/* Payment Method Selection Modal */}
      {isPaymentModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col justify-end bg-black/50"
          onClick={() => setIsPaymentModalOpen(false)}
        >
          <div
            className="flex flex-col rounded-t-xl bg-slate-100 dark:bg-slate-900 max-h-[80vh] flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 pb-2 flex-shrink-0">
              <div className="flex size-10 items-center justify-center"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Select Payment Method</h3>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="flex size-10 items-center justify-center text-slate-500 dark:text-gray-400"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-3 p-4 overflow-y-auto flex-1 min-h-0">
              {paymentMethods.map((payment, index) => (
                <label
                  key={index}
                  className={`flex cursor-pointer items-center gap-4 rounded-lg border border-solid p-4 ${
                    selectedPayment.type === payment.type && selectedPayment.last4 === payment.last4
                      ? 'border-primary bg-primary/10'
                      : 'border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-primary">
                    <span className="material-symbols-outlined text-2xl">{payment.icon}</span>
                  </div>
                  <div className="flex grow flex-col">
                    <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">
                      {payment.name}
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="payment-buy"
                    checked={selectedPayment.type === payment.type && selectedPayment.last4 === payment.last4}
                    onChange={() => handlePaymentSelect(payment)}
                    className="form-radio radio-custom ml-auto h-5 w-5 cursor-pointer border-2 bg-transparent text-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 border-slate-300 dark:border-slate-700 checked:border-primary"
                  />
                </label>
              ))}
            </div>

            <div className="p-4 pt-2 pb-6 flex-shrink-0 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="flex h-12 min-w-[84px] max-w-[480px] w-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white hover:opacity-90 transition-opacity"
              >
                <span className="truncate">Select Payment Method</span>
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
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Confirm Purchase</h2>
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="space-y-4">
              {/* You Spend */}
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800/50">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">You spend</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">$100.00 USD</span>
                </div>
                <div
                  className="aspect-square size-10 rounded-full bg-cover bg-center"
                  data-alt="Visa logo"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfiMYAEa68IhoQrJd7Jr48OtJC7nCKLXtaY-PDrFsM4CbjKojv6N99W5KChZkdZDLRaxcMcl87kiS_W8ijU-5s2B1EyJdQYDD_iNsEaN0dD8gU-bnVcQCoNA9fDrarCg6PNc8mkKiCyrnwyWNyz-a1ljx08r0hIn_cGj2Wkh3BR7aZhNXtLKIlGdJMhgYtlGNHy8eyWAiLzK1e0vA3ujcRP_k0W0rNX2pUt2bOrkBsHoBHoKDjnor60UhWmGYP4J4aCobo7RDzg1E')"
                  }}
                ></div>
              </div>

              {/* Arrow Down */}
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-gray-400 dark:text-gray-500">arrow_downward</span>
              </div>

              {/* You Get */}
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800/50">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 dark:text-gray-400">You get (est.)</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">0.0025 BTC</span>
                </div>
                <div
                  className="aspect-square size-10 rounded-full bg-cover bg-center"
                  data-alt="Bitcoin logo"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmpTNesszZ-laBez1TrT1yoV-6o_jHRPYAIRiLrXglS1lPM1JPXYsg4NUXr9oKSXrWPJDsh8s5hgGDx8JuQ96D5lZk0kLWEq0tPUu1z0w10wExzQfa-5BcyJpEZFzzVjNY9hhn-l39noNYOnt-75OaZKHMzi48GBAO5spDaieE625kiecluF8niKXHyHp-zH753QAE26OlYFK7CFg6mZNuIbgflw9_8Eu4JL0hVC7ejgeiHkNDKJfkwx7ON2Ec9BjkObJGwcdLQvY')"
                  }}
                ></div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              By confirming, you agree to the terms of service. Rate is locked for 60 seconds.
            </div>

            <button
              onClick={handleConfirmPurchase}
              className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default Buy;
