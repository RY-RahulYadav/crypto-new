import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Wallet = () => {
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
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <div className="flex-1 flex justify-center">
            <img src="/logo.png" alt="Open World Accounts" className="h-10 w-auto" />
          </div>
          <button
            onClick={() => navigate('/receive')}
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary-dark"
          >
            <span className="material-symbols-outlined text-2xl">qr_code_scanner</span>
          </button>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col space-y-4">
          {/* BTC Wallet 1 */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate('/wallet-detail', {
                state: {
                  wallet: {
                    name: 'BTC Wallet 1',
                    balance: '0.0015 BTC',
                    totalValue: '$100.00',
                    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc9yd41o5h-jCdr4Gtg2bkdAiPj7MFCqhijksCwwfA77oxvCAUYuCVjEwKqNlow5653nNr-EEbj9n0Kr5_aBgeFYwkg_Y6jqQS6cZNKpkw4OZOQ2R-GUb4svhyX1fbsicfVWvVr54M__QSFIr3qbl8hRl3k1RI0dXZIp0uwViYxff_oqPjsxjO0LbCmumG-NHq5H72QjELwZv5JYfWIwz1BP4I9aoiK7E2t9sYBIeKYv5BUfXjCahe6fy6ATGYV8Lu_KBtWrbXa8g'
                  }
                }
              });
            }}
            className="rounded-lg bg-surface-dark p-4 text-left w-full hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc9yd41o5h-jCdr4Gtg2bkdAiPj7MFCqhijksCwwfA77oxvCAUYuCVjEwKqNlow5653nNr-EEbj9n0Kr5_aBgeFYwkg_Y6jqQS6cZNKpkw4OZOQ2R-GUb4svhyX1fbsicfVWvVr54M__QSFIr3qbl8hRl3k1RI0dXZIp0uwViYxff_oqPjsxjO0LbCmumG-NHq5H72QjELwZv5JYfWIwz1BP4I9aoiK7E2t9sYBIeKYv5BUfXjCahe6fy6ATGYV8Lu_KBtWrbXa8g")'
                  }}
                ></div>
                <div>
                  <p className="font-bold text-text-primary-dark">BTC Wallet 1</p>
                  <p className="text-sm text-text-secondary-dark">0.0015 BTC</p>
                </div>
              </div>
              <span className="font-bold text-text-primary-dark">$100.00</span>
            </div>
          </button>

          {/* ETH Wallet */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate('/wallet-detail', {
                state: {
                  wallet: {
                    name: 'ETH Wallet',
                    balance: '0.25 ETH',
                    totalValue: '$850.75',
                    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqIgOsQqFcSZLGRW0GvcfFYHMciJUVHsEZh85qrvkxc9DaW2HhtwwC2CC7wc0LsvJvDInQhChX_rBz3WXBIKmGhaqAfK5cgj7ntaVtHWzFIyUMnLmNsMTV1JxNE-s7vShKKBkBynEugkB_1ZxB_GAD8VrXSb9NVBvBMwdEIsat0UcpICUs-u0Hda30q0j07Nghkbp5sUlianBAUIv_FQ9zfXzqkHSH6YmQCA0RrM7dZq8ZY5YhhAZdeCKvM0CJrP87UZLADR0SKzE'
                  }
                }
              });
            }}
            className="rounded-lg bg-surface-dark p-4 text-left w-full hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqIgOsQqFcSZLGRW0GvcfFYHMciJUVHsEZh85qrvkxc9DaW2HhtwwC2CC7wc0LsvJvDInQhChX_rBz3WXBIKmGhaqAfK5cgj7ntaVtHWzFIyUMnLmNsMTV1JxNE-s7vShKKBkBynEugkB_1ZxB_GAD8VrXSb9NVBvBMwdEIsat0UcpICUs-u0Hda30q0j07Nghkbp5sUlianBAUIv_FQ9zfXzqkHSH6YmQCA0RrM7dZq8ZY5YhhAZdeCKvM0CJrP87UZLADR0SKzE")'
                  }}
                ></div>
                <div>
                  <p className="font-bold text-text-primary-dark">ETH Wallet</p>
                  <p className="text-sm text-text-secondary-dark">0.25 ETH</p>
                </div>
              </div>
              <span className="font-bold text-text-primary-dark">$850.75</span>
            </div>
          </button>

          {/* Add New Wallet */}
          <button
            onClick={() => navigate('/create-wallet')}
            className="rounded-lg border-2 border-dashed border-border-dark p-4 text-center hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-dark text-primary">
                <span className="material-symbols-outlined text-3xl">add</span>
              </div>
              <div>
                <p className="font-bold text-text-primary-dark">Add new wallet</p>
                <p className="text-sm text-text-secondary-dark">Create or import a new wallet</p>
              </div>
            </div>
          </button>
        </main>

      </div>

      {/* Footer Navigation - Using shared Footer from Home page */}
      <Footer />
    </div>
  );
};

export default Wallet;
