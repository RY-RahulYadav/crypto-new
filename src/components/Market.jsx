import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Market = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [displayedCoins, setDisplayedCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [rateLimited, setRateLimited] = useState(false);
  const observerTarget = useRef(null);

  // Initial load - fetch first 10 coins
  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setFilteredCoins(data);
        setDisplayedCoins(data);
        setLoading(false);
        setPage(2); // Next page to load
      })
      .catch((error) => {
        console.error('Error fetching coins:', error);
        setLoading(false);
      });
  }, []);

  // Load more coins with retry logic
  const loadMoreCoins = useCallback(async (retryCount = 0) => {
    if (loadingMore || !hasMore || searchQuery.trim() !== '') return;

    setLoadingMore(true);
    setRateLimited(false);
    
    try {
      // Add delay to avoid rate limiting (especially after page 5)
      if (page > 5) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // 2 second delay
      }
      
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
      );
      
      if (response.status === 429) {
        // Rate limited - wait longer and retry
        setRateLimited(true);
        if (retryCount < 3) {
          const waitTime = (retryCount + 1) * 5000; // 5s, 10s, 15s
          await new Promise(resolve => setTimeout(resolve, waitTime));
          setLoadingMore(false);
          return loadMoreCoins(retryCount + 1);
        } else {
          setHasMore(false);
          setLoadingMore(false);
          return;
        }
      }
      
      if (!response.ok) {
        throw new Error(`Failed to fetch coins: ${response.status}`);
      }
      
      const data = await response.json();
      
      // If we get less than 10 coins, we've reached the end
      if (data.length < 10) {
        setHasMore(false);
      }
      
      if (data.length > 0) {
        setCoins((prev) => [...prev, ...data]);
        setFilteredCoins((prev) => [...prev, ...data]);
        setDisplayedCoins((prev) => [...prev, ...data]);
        setPage((prev) => prev + 1);
        setRateLimited(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more coins:', error);
      if (retryCount < 2) {
        // Retry after delay
        await new Promise(resolve => setTimeout(resolve, 3000));
        setLoadingMore(false);
        return loadMoreCoins(retryCount + 1);
      } else {
        setHasMore(false);
      }
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, hasMore, searchQuery, page]);

  // Infinite scroll observer
  useEffect(() => {
    if (searchQuery.trim() !== '') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMoreCoins();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget && hasMore) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMoreCoins, hasMore, loadingMore, searchQuery]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setDisplayedCoins(filteredCoins);
    } else {
      const filtered = coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setDisplayedCoins(filtered);
    }
  }, [searchQuery, coins, filteredCoins]);

  const handleBack = () => {
    navigate(-1);
  };

  const formatPrice = (price) => {
    if (price < 0.01) {
      return price.toFixed(6);
    } else if (price < 1) {
      return price.toFixed(4);
    } else {
      return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  };

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

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">search</span>
          </div>
          <input
            type="text"
            placeholder="Search cryptocurrencies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800/50 border-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Loading markets...</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 pb-24">
          {displayedCoins.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <span className="material-symbols-outlined text-6xl text-gray-400 dark:text-gray-500 mb-4">
                search_off
              </span>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No results found</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Try searching with a different term
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {displayedCoins.map((coin) => (
                <div
                  key={coin.id}
                  onClick={() => navigate('/crypto-detail', { state: { coin } })}
                  className="flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  {/* Left: Icon + Name */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-10 h-10 rounded-full shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white truncate">
                        {coin.symbol.toUpperCase()}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{coin.name}</div>
                    </div>
                  </div>

                  {/* Right: Price */}
                  <div className="text-right shrink-0 ml-2">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      ${formatPrice(coin.current_price)}
                    </div>
                    <div
                      className={`text-xs font-medium ${
                        coin.price_change_percentage_24h >= 0
                          ? 'text-green-500 dark:text-green-400'
                          : 'text-red-500 dark:text-red-400'
                      }`}
                    >
                      {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                      {coin.price_change_percentage_24h?.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Infinite scroll trigger and loading indicator */}
              {!searchQuery.trim() && (
                <div ref={observerTarget} className="py-8 min-h-[100px] flex flex-col items-center justify-center">
                  {loadingMore && (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                      {rateLimited && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                          Rate limited. Waiting before retry...
                        </p>
                      )}
                    </div>
                  )}
                  {!hasMore && displayedCoins.length > 0 && (
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      No more coins to load
                    </p>
                  )}
                  {!loadingMore && hasMore && (
                    <div className="h-1 w-1"></div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default Market;

