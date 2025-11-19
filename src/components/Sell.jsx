import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Sell = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark relative flex h-auto min-h-screen w-full flex-col font-display dark:bg-background-dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="flex h-full w-full flex-1 flex-col p-6 pb-24">
        {/* Header */}
        <header className="flex w-full items-center justify-between pt-4 pb-6">
          <button
            onClick={handleBack}
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary-dark"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-text-primary-dark">Sell Crypto</h1>
          <div className="h-10 w-10"></div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col space-y-4">
          <div className="space-y-4">
            {/* You Sell Section */}
            <div className="rounded-lg bg-surface-dark p-4">
              <label className="text-sm text-text-secondary-dark" htmlFor="sell-asset">
                You sell
              </label>
              <div className="mt-2 flex items-center justify-between">
                <button className="flex items-center gap-2 rounded-full bg-border-dark p-2">
                  <div
                    className="h-6 w-6 rounded-full bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc9yd41o5h-jCdr4Gtg2bkdAiPj7MFCqhijksCwwfA77oxvCAUYuCVjEwKqNlow5653nNr-EEbj9n0Kr5_aBgeFYwkg_Y6jqQS6cZNKpkw4OZOQ2R-GUb4svhyX1fbsicfVWvVr54M__QSFIr3qbl8hRl3k1RI0dXZIp0uwViYxff_oqPjsxjO0LbCmumG-NHq5H72QjELwZv5JYfWIwz1BP4I9aoiK7E2t9sYBIeKYv5BUfXjCahe6fy6ATGYV8Lu_KBtWrbXa8g")'
                    }}
                  ></div>
                  <span className="font-bold text-text-primary-dark">BTC</span>
                  <span className="material-symbols-outlined text-text-secondary-dark">expand_more</span>
                </button>
                <div className="text-right">
                  <input
                    className="w-full border-none bg-transparent p-0 text-right text-2xl font-bold text-text-primary-dark focus:ring-0"
                    id="sell-amount"
                    type="text"
                    defaultValue="0.0015"
                  />
                  <p className="text-sm text-text-secondary-dark">~$100.00</p>
                </div>
              </div>
              <p className="mt-2 text-right text-xs text-text-secondary-dark">Balance: 0.0015 BTC</p>
            </div>

            {/* You Receive Section */}
            <div className="rounded-lg bg-surface-dark p-4">
              <label className="text-sm text-text-secondary-dark" htmlFor="receive-asset">
                You receive
              </label>
              <div className="mt-2 flex items-center justify-between">
                <button className="flex items-center gap-2 rounded-full bg-border-dark p-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-bold text-white">
                    €
                  </div>
                  <span className="font-bold text-text-primary-dark">EUR</span>
                  <span className="material-symbols-outlined text-text-secondary-dark">expand_more</span>
                </button>
                <div className="text-right">
                  <p className="text-2xl font-bold text-text-primary-dark">92.50</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="rounded-lg bg-surface-dark p-4">
            <button className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-text-secondary-dark">account_balance</span>
                <p className="text-text-primary-dark">Payment Method</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-text-secondary-dark">SEPA</p>
                <span className="material-symbols-outlined text-text-secondary-dark">chevron_right</span>
              </div>
            </button>
          </div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Fee Breakdown */}
          <div className="space-y-3 rounded-lg bg-surface-dark p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary-dark">Exchange rate</span>
              <span className="text-sm font-bold text-text-primary-dark">1 BTC ≈ €61,850.50</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary-dark">Processing fee</span>
              <span className="text-sm font-bold text-text-primary-dark">€1.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary-dark">Network fee</span>
              <span className="text-sm font-bold text-text-primary-dark">€0.25</span>
            </div>
          </div>

          {/* Sell Button */}
          <button className="w-full rounded-full bg-primary py-4 font-bold text-white hover:opacity-90 transition-opacity">
            Sell BTC
          </button>
        </main>
      </div>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
};

export default Sell;

