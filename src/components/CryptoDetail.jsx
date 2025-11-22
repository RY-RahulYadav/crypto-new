import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Footer from './Footer';

const CryptoDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const coin = location.state?.coin || null;
  const [coinData, setCoinData] = useState(coin);
  const [loading, setLoading] = useState(!coin);
  const [timeRange, setTimeRange] = useState('7d'); // 24h, 7d, 30d, 1y
  const [chartData, setChartData] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);

  useEffect(() => {
    if (coin && coin.id && !coinData) {
      // Fetch coin details if not passed via state
      fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}`)
        .then((res) => res.json())
        .then((data) => {
          setCoinData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching coin details:', error);
          setLoading(false);
        });
    } else if (coin) {
      setCoinData(coin);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [coin]);

  // Fetch chart data
  useEffect(() => {
    if (!coinData?.id) return;

    const timeRangeMap = {
      '24h': 1,
      '7d': 7,
      '30d': 30,
      '1y': 365,
    };

    const days = timeRangeMap[timeRange] || 7;
    setChartLoading(true);

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinData.id}/market_chart?vs_currency=usd&days=${days}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Transform the API data into chart format
        const formattedData = data.prices.map(([timestamp, price]) => ({
          time: new Date(timestamp).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            ...(days > 30 && { year: 'numeric' }),
          }),
          price: price,
          timestamp: timestamp,
        }));
        setChartData(formattedData);
        setChartLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching chart data:', error);
        setChartLoading(false);
      });
  }, [coinData?.id, timeRange]);

  const handleBack = () => {
    navigate(-1);
  };

  const formatPrice = (price) => {
    if (!price) return '$0.00';
    if (price < 0.01) {
      return `$${price.toFixed(6)}`;
    } else if (price < 1) {
      return `$${price.toFixed(4)}`;
    } else {
      return `$${price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
  };

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display relative mx-auto flex h-screen max-w-md flex-col overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!coinData) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display relative mx-auto flex h-screen max-w-md flex-col overflow-hidden">
        <div className="flex items-center p-4">
          <button
            onClick={handleBack}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600 dark:text-gray-300"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="flex-1 text-center text-xl font-bold text-gray-900 dark:text-white">Crypto Detail</h1>
          <div className="h-10 w-10"></div>
        </div>
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 dark:text-gray-400">No data available</p>
        </div>
        <Footer />
      </div>
    );
  }

  const priceChange24h = coinData.price_change_percentage_24h || 0;
  const isPositive = priceChange24h >= 0;

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
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6">
          <img
            alt={`${coinData.name} logo`}
            className="h-16 w-16 rounded-full"
            src={coinData.image || coinData.image_url}
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{coinData.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {coinData.symbol?.toUpperCase() || ''}
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatPrice(coinData.current_price || coinData.price)}
            </h3>
            <span
              className={`text-lg font-semibold ${
                isPositive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'
              }`}
            >
              {isPositive ? '+' : ''}
              {priceChange24h.toFixed(2)}%
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">24h change</p>
        </div>

        {/* Time Range Buttons */}
        <div className="flex gap-2 mb-6">
          {['24h', '7d', '30d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`flex-1 rounded-lg py-2 px-4 text-sm font-semibold transition-colors ${
                timeRange === range
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Price Chart */}
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 mb-6">
          {chartLoading ? (
            <div className="flex items-center justify-center h-48">
              <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
          ) : chartData.length > 0 ? (
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <defs>
                    <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={isPositive ? '#10b981' : '#ef4444'} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={isPositive ? '#10b981' : '#ef4444'} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="time"
                    tick={{ fill: '#6b7280', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    domain={['auto', 'auto']}
                    tick={{ fill: '#6b7280', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value.toFixed(2)}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                    labelStyle={{ color: '#fff' }}
                    formatter={(value) => [`$${value.toFixed(2)}`, 'Price']}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={isPositive ? '#10b981' : '#ef4444'}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                    fill="url(#priceGradient)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex items-center justify-center h-48">
              <p className="text-sm text-gray-500 dark:text-gray-400">No chart data available</p>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Market Cap</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {formatNumber(coinData.market_cap || coinData.market_cap_usd)}
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Volume (24h)</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {formatNumber(coinData.total_volume || coinData.volume_24h_usd)}
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Circulating Supply</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {coinData.circulating_supply
                ? `${(coinData.circulating_supply / 1e6).toFixed(2)}M ${coinData.symbol?.toUpperCase() || ''}`
                : 'N/A'}
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Supply</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {coinData.total_supply
                ? `${(coinData.total_supply / 1e6).toFixed(2)}M ${coinData.symbol?.toUpperCase() || ''}`
                : 'N/A'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => navigate('/select-asset')}
            className="flex-1 rounded-full bg-primary py-3 px-6 text-base font-bold text-white hover:opacity-90 transition-opacity"
          >
            Buy
          </button>
          <button
            onClick={() => navigate('/select-asset-sell')}
            className="flex-1 rounded-full bg-gray-200 dark:bg-gray-700 py-3 px-6 text-base font-bold text-gray-900 dark:text-white hover:opacity-90 transition-opacity"
          >
            Sell
          </button>
        </div>

        {/* About Section */}
        {coinData.description && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">About</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {typeof coinData.description === 'string'
                ? coinData.description.slice(0, 500) + '...'
                : coinData.description?.en?.slice(0, 500) + '...' || 'No description available.'}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CryptoDetail;
