import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Buy = () => {
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
          <h1 className="text-xl font-bold text-text-primary-dark">Buy Crypto</h1>
          <div className="h-10 w-10"></div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col space-y-8">
          {/* You Spend Section */}
          <div className="rounded-lg bg-surface-dark p-4">
            <label className="text-sm font-medium text-text-secondary-dark" htmlFor="spend-amount">
              You spend
            </label>
            <div className="mt-2 flex items-center justify-between">
              <input
                className="w-full flex-1 border-none bg-transparent p-0 text-4xl font-bold text-text-primary-dark placeholder-text-secondary-dark focus:ring-0"
                id="spend-amount"
                placeholder="100"
                type="text"
                defaultValue="100"
              />
              <div className="flex items-center gap-2 rounded-full bg-border-dark px-3 py-1.5">
                <div
                  className="h-6 w-6 rounded-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc9yd41o5h-jCdr4Gtg2bkdAiPj7MFCqhijksCwwfA77oxvCAUYuCVjEwKqNlow5653nNr-EEbj9n0Kr5_aBgeFYwkg_Y6jqQS6cZNKpkw4OZOQ2R-GUb4svhyX1fbsicfVWvVr54M__QSFIr3qbl8hRl3k1RI0dXZIp0uwViYxff_oqPjsxjO0LbCmumG-NHq5H72QjELwZv5JYfWIwz1BP4I9aoiK7E2t9sYBIeKYv5BUfXjCahe6fy6ATGYV8Lu_KBtWrbXa8g")'
                  }}
                ></div>
                <span className="font-bold text-text-primary-dark">USD</span>
                <span className="material-symbols-outlined text-text-secondary-dark text-lg">expand_more</span>
              </div>
            </div>
          </div>

          {/* Swap Icon */}
          <div className="flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-surface-dark bg-background-dark text-text-primary-dark">
              <span className="material-symbols-outlined">swap_vert</span>
            </div>
          </div>

          {/* You Receive Section */}
          <div className="rounded-lg bg-surface-dark p-4">
            <label className="text-sm font-medium text-text-secondary-dark" htmlFor="receive-amount">
              You receive
            </label>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-4xl font-bold text-text-primary-dark">0.0015</span>
              <div className="flex items-center gap-2 rounded-full bg-border-dark px-3 py-1.5">
                <div
                  className="h-6 w-6 rounded-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc9yd41o5h-jCdr4Gtg2bkdAiPj7MFCqhijksCwwfA77oxvCAUYuCVjEwKqNlow5653nNr-EEbj9n0Kr5_aBgeFYwkg_Y6jqQS6cZNKpkw4OZOQ2R-GUb4svhyX1fbsicfVWvVr54M__QSFIr3qbl8hRl3k1RI0dXZIp0uwViYxff_oqPjsxjO0LbCmumG-NHq5H72QjELwZv5JYfWIwz1BP4I9aoiK7E2t9sYBIeKYv5BUfXjCahe6fy6ATGYV8Lu_KBtWrbXa8g")'
                  }}
                ></div>
                <span className="font-bold text-text-primary-dark">BTC</span>
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="rounded-lg bg-surface-dark p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <img
                    alt="PayPal logo"
                    className="h-6 w-6"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUoCSb5CGy5oHnh3qG6GUf5AhPUk7tSpGKqFTwegMZswh8zyIF0uFjIDJHfWNlNYxOPLlJjgoMAeU3x4oyQRPt3--vXbd8xSYssl0EXYLbq8W5pap_e4nkg4Uy_lp4KuF5PWZuGQa6MfHChTHdvQFsQCXRfRUXspPrBrulh4_FlyYpwNa6aI5MiXG7W3AyLLnB_RhX_BpjQsk_1QWbIbeDk74sYJhGyAvwwaVpVNggNGsVP48eP17HKNiu_Mig1QyICFpbili1rq4"
                  />
                </div>
                <div>
                  <p className="font-bold text-text-primary-dark">PayPal</p>
                  <p className="text-sm text-text-secondary-dark">Instant</p>
                </div>
              </div>
              <button className="flex items-center justify-center text-text-secondary-dark hover:text-text-primary-dark">
                <span className="material-symbols-outlined text-2xl">chevron_right</span>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full pt-8">
          <div className="flex w-full flex-col gap-3">
            <button className="w-full rounded-full bg-primary py-4 font-bold text-white hover:opacity-90 transition-opacity">
              Buy BTC
            </button>
          </div>
        </footer>
      </div>

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default Buy;

