import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer';

const WalletDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const wallet = location.state?.wallet || {
    name: 'BTC Wallet 1',
    balance: '0.0015 BTC',
    totalValue: '$100.00',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc9yd41o5h-jCdr4Gtg2bkdAiPj7MFCqhijksCwwfA77oxvCAUYuCVjEwKqNlow5653nNr-EEbj9n0Kr5_aBgeFYwkg_Y6jqQS6cZNKpkw4OZOQ2R-GUb4svhyX1fbsicfVWvVr54M__QSFIr3qbl8hRl3k1RI0dXZIp0uwViYxff_oqPjsxjO0LbCmumG-NHq5H72QjELwZv5JYfWIwz1BP4I9aoiK7E2t9sYBIeKYv5BUfXjCahe6fy6ATGYV8Lu_KBtWrbXa8g'
  };

  const [activeTab, setActiveTab] = useState('crypto'); // 'crypto' or 'transactions'

  const handleBack = () => {
    navigate(-1);
  };

  // Mock cryptocurrencies in wallet
  const cryptocurrencies = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      amount: '0.0015',
      value: '$100.00',
      change: '+5.2%',
      changeType: 'positive',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc9yd41o5h-jCdr4Gtg2bkdAiPj7MFCqhijksCwwfA77oxvCAUYuCVjEwKqNlow5653nNr-EEbj9n0Kr5_aBgeFYwkg_Y6jqQS6cZNKpkw4OZOQ2R-GUb4svhyX1fbsicfVWvVr54M__QSFIr3qbl8hRl3k1RI0dXZIp0uwViYxff_oqPjsxjO0LbCmumG-NHq5H72QjELwZv5JYfWIwz1BP4I9aoiK7E2t9sYBIeKYv5BUfXjCahe6fy6ATGYV8Lu_KBtWrbXa8g'
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      amount: '0.25',
      value: '$850.75',
      change: '-2.1%',
      changeType: 'negative',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqIgOsQqFcSZLGRW0GvcfFYHMciJUVHsEZh85qrvkxc9DaW2HhtwwC2CC7wc0LsvJvDInQhChX_rBz3WXBIKmGhaqAfK5cgj7ntaVtHWzFIyUMnLmNsMTV1JxNE-s7vShKKBkBynEugkB_1ZxB_GAD8VrXSb9NVBvBMwdEIsat0UcpICUs-u0Hda30q0j07Nghkbp5sUlianBAUIv_FQ9zfXzqkHSH6YmQCA0RrM7dZq8ZY5YhhAZdeCKvM0CJrP87UZLADR0SKzE'
    },
    {
      id: 3,
      name: 'USDC',
      symbol: 'USDC',
      amount: '1,234.56',
      value: '$1,234.56',
      change: '+0.1%',
      changeType: 'positive',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc9yd41o5h-jCdr4Gtg2bkdAiPj7MFCqhijksCwwfA77oxvCAUYuCVjEwKqNlow5653nNr-EEbj9n0Kr5_aBgeFYwkg_Y6jqQS6cZNKpkw4OZOQ2R-GUb4svhyX1fbsicfVWvVr54M__QSFIr3qbl8hRl3k1RI0dXZIp0uwViYxff_oqPjsxjO0LbCmumG-NHq5H72QjELwZv5JYfWIwz1BP4I9aoiK7E2t9sYBIeKYv5BUfXjCahe6fy6ATGYV8Lu_KBtWrbXa8g'
    }
  ];

  // Mock transactions
  const transactions = [
    {
      id: 1,
      type: 'sent',
      crypto: 'BTC',
      amount: '0.0005',
      to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0',
      date: '2024-01-15',
      time: '10:30 AM',
      status: 'completed',
      fee: '0.00001 BTC'
    },
    {
      id: 2,
      type: 'received',
      crypto: 'ETH',
      amount: '0.1',
      from: '0x1234567890abcdef1234567890abcdef12345678',
      date: '2024-01-14',
      time: '3:45 PM',
      status: 'completed'
    },
    {
      id: 3,
      type: 'swap',
      crypto: 'BTC',
      amount: '0.001',
      to: 'ETH',
      toAmount: '0.15',
      date: '2024-01-13',
      time: '9:20 AM',
      status: 'completed',
      fee: '0.00002 BTC'
    },
    {
      id: 4,
      type: 'received',
      crypto: 'USDC',
      amount: '500.00',
      from: '0xabcdef1234567890abcdef1234567890abcdef12',
      date: '2024-01-12',
      time: '2:15 PM',
      status: 'completed'
    },
    {
      id: 5,
      type: 'sent',
      crypto: 'ETH',
      amount: '0.05',
      to: '0x9876543210fedcba9876543210fedcba98765432',
      date: '2024-01-11',
      time: '11:00 AM',
      status: 'pending',
      fee: '0.001 ETH'
    }
  ];

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'sent':
        return 'arrow_upward';
      case 'received':
        return 'arrow_downward';
      case 'swap':
        return 'swap_horiz';
      default:
        return 'account_balance_wallet';
    }
  };

  const getTransactionColor = (type) => {
    switch (type) {
      case 'sent':
        return 'text-red-500 dark:text-red-400';
      case 'received':
        return 'text-green-500 dark:text-green-400';
      case 'swap':
        return 'text-blue-500 dark:text-blue-400';
      default:
        return 'text-gray-500 dark:text-gray-400';
    }
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
          <h1 className="text-3xl font-bold text-text-primary-dark">{wallet.name}</h1>
          <div className="h-10 w-10"></div>
        </header>

        {/* Wallet Balance Card */}
        <div className="rounded-lg bg-surface-dark p-6 mb-6">
          <p className="text-sm text-text-secondary-dark mb-2">Total Balance</p>
          <h2 className="text-3xl font-bold text-text-primary-dark mb-4">{wallet.totalValue}</h2>
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url("${wallet.icon}")`
              }}
            ></div>
            <div>
              <p className="font-semibold text-text-primary-dark">{wallet.name}</p>
              <p className="text-sm text-text-secondary-dark">{wallet.balance}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('crypto')}
            className={`flex-1 rounded-lg py-3 px-4 text-sm font-semibold transition-colors ${
              activeTab === 'crypto'
                ? 'bg-primary text-white'
                : 'bg-surface-dark text-text-secondary-dark hover:bg-gray-700 dark:hover:bg-gray-800'
            }`}
          >
            Cryptocurrencies
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`flex-1 rounded-lg py-3 px-4 text-sm font-semibold transition-colors ${
              activeTab === 'transactions'
                ? 'bg-primary text-white'
                : 'bg-surface-dark text-text-secondary-dark hover:bg-gray-700 dark:hover:bg-gray-800'
            }`}
          >
            Transactions
          </button>
        </div>

        {/* Content */}
        <main className="flex flex-1 flex-col space-y-4">
          {activeTab === 'crypto' ? (
            /* Cryptocurrencies List */
            cryptocurrencies.map((crypto) => (
              <div
                key={crypto.id}
                onClick={() => {
                  // Convert wallet crypto to coin format for detail page
                  const coin = {
                    id: crypto.symbol.toLowerCase(),
                    name: crypto.name,
                    symbol: crypto.symbol,
                    current_price: parseFloat(crypto.value.replace('$', '').replace(',', '')),
                    price_change_percentage_24h: parseFloat(crypto.change.replace('%', '').replace('+', '')),
                    image: crypto.icon
                  };
                  navigate('/crypto-detail', { state: { coin } });
                }}
                className="rounded-lg bg-surface-dark p-4 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url("${crypto.icon}")`
                      }}
                    ></div>
                    <div>
                      <p className="font-bold text-text-primary-dark">{crypto.name}</p>
                      <p className="text-sm text-text-secondary-dark">
                        {crypto.amount} {crypto.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-text-primary-dark">{crypto.value}</p>
                    <p
                      className={`text-sm ${
                        crypto.changeType === 'positive'
                          ? 'text-green-500 dark:text-green-400'
                          : 'text-red-500 dark:text-red-400'
                      }`}
                    >
                      {crypto.change}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Transactions List */
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="rounded-lg bg-surface-dark p-4 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        transaction.type === 'sent'
                          ? 'bg-red-500/10'
                          : transaction.type === 'received'
                          ? 'bg-green-500/10'
                          : 'bg-blue-500/10'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-xl ${getTransactionColor(
                          transaction.type
                        )}`}
                      >
                        {getTransactionIcon(transaction.type)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-text-primary-dark capitalize">
                          {transaction.type}
                        </p>
                        {transaction.status === 'pending' && (
                          <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-semibold">
                            Pending
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary-dark mb-1">
                        {transaction.type === 'sent' && `To: ${transaction.to?.slice(0, 6)}...${transaction.to?.slice(-4)}`}
                        {transaction.type === 'received' && `From: ${transaction.from?.slice(0, 6)}...${transaction.from?.slice(-4)}`}
                        {transaction.type === 'swap' && `${transaction.amount} ${transaction.crypto} → ${transaction.toAmount} ${transaction.to}`}
                      </p>
                      <p className="text-xs text-text-secondary-dark">
                        {transaction.date} at {transaction.time}
                      </p>
                      {transaction.fee && (
                        <p className="text-xs text-text-secondary-dark mt-1">
                          Fee: {transaction.fee}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-bold ${
                        transaction.type === 'sent'
                          ? 'text-red-500 dark:text-red-400'
                          : transaction.type === 'received'
                          ? 'text-green-500 dark:text-green-400'
                          : 'text-blue-500 dark:text-blue-400'
                      }`}
                    >
                      {transaction.type === 'sent' && '-'}
                      {transaction.type === 'received' && '+'}
                      {transaction.amount} {transaction.crypto}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </main>
      </div>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
};

export default WalletDetail;

