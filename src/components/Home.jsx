import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();
  const [topCoins, setTopCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true'
    )
      .then((res) => res.json())
      .then((data) => {
        setTopCoins(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching top coins:', error);
        setLoading(false);
      });
  }, []);

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
    <div className="bg-background-dark font-display text-text-light relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-24">
      <div className="flex h-full w-full flex-1 flex-col justify-start">
        {/* Header */}
        <header className="flex w-full items-center justify-between px-6 pt-8 pb-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Open World Accounts" className="h-10 w-auto" />
            <div>
              <p className="text-sm font-medium text-text-dim">My Portfolio</p>
              <h1 className="text-2xl font-bold tracking-tight text-text-light">Hi, Alex</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/receive')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card-dark hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="material-symbols-outlined text-text-dim">qr_code_scanner</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col gap-8 px-6 pt-4">
          {/* Total Balance Section */}
          <section className="flex flex-col items-center">
            <p className="text-base font-medium text-text-dim">Total Balance</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-text-light">$12,845.67</h2>
            <div className="mt-2 flex items-center gap-1 rounded-full bg-success/10 px-2 py-1">
              <span className="material-symbols-outlined text-sm text-success">arrow_upward</span>
              <p className="text-sm font-semibold text-success">+12.5%</p>
            </div>
          </section>

          {/* Action Buttons Section */}
          <section className="mt-2 grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/select-asset')}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-dark py-3 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary">add</span>
              </div>
              <span className="text-sm font-semibold text-text-light">Buy</span>
            </button>
            <button
              onClick={() => navigate('/select-asset-sell')}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-dark py-3 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary">remove</span>
              </div>
              <span className="text-sm font-semibold text-text-light">Sell</span>
            </button>
            <button
              onClick={() => navigate('/send')}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-dark py-3 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary">send</span>
              </div>
              <span className="text-sm font-semibold text-text-light">Send Crypto</span>
            </button>
            <button
              onClick={() => navigate('/receive')}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-dark py-3 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary">call_received</span>
              </div>
              <span className="text-sm font-semibold text-text-light">Receive Crypto</span>
            </button>
          </section>

          {/* Top Assets Section */}
          <section>
            <h3 className="text-lg font-bold text-text-light">Top Assets</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {/* Bitcoin Card */}
              <button
                onClick={() => {
                  const coin = {
                    id: 'bitcoin',
                    name: 'Bitcoin',
                    symbol: 'btc',
                    current_price: 67123.45,
                    price_change_percentage_24h: 5.2,
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq8MpYaa5VxqzKyA7gwvtaoS3Aie5w0r232IWOvyIauCVh3P__DtUSEarADhUm-KtbBGMaa2XeG5xGKl5sHcvtdzTRMcj_y7MFoc_kMXIxbz5Y0MA7W0XY5Y1Ozt9F49mvZSGhsarqyME7Ne5byRQLHQxPcsGw5__4Jg0cW2UpNSMxnn2mg7d1xRFrn-K_iQ5v3tm1HmXvCFa4fr0trzqt2HYuc-Fc10YPeW2SHavSBEtgRf0AuMnnd3y1666N8ude69jbB_v5Y_o'
                  };
                  navigate('/crypto-detail', { state: { coin } });
                }}
                className="flex flex-col gap-3 rounded-lg border border-border-dark bg-card-dark p-4 hover:opacity-90 transition-opacity cursor-pointer text-left w-full"
              >
                <div className="flex items-center gap-2">
                  <img 
                    alt="Bitcoin logo" 
                    className="h-8 w-8" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq8MpYaa5VxqzKyA7gwvtaoS3Aie5w0r232IWOvyIauCVh3P__DtUSEarADhUm-KtbBGMaa2XeG5xGKl5sHcvtdzTRMcj_y7MFoc_kMXIxbz5Y0MA7W0XY5Y1Ozt9F49mvZSGhsarqyME7Ne5byRQLHQxPcsGw5__4Jg0cW2UpNSMxnn2mg7d1xRFrn-K_iQ5v3tm1HmXvCFa4fr0trzqt2HYuc-Fc10YPeW2SHavSBEtgRf0AuMnnd3y1666N8ude69jbB_v5Y_o"
                  />
                  <div>
                    <p className="text-base font-bold text-text-light">BTC</p>
                    <p className="text-xs text-text-dim">$67,123.45</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-success">
                  <span className="material-symbols-outlined text-base">arrow_drop_up</span>
                  <span>+5.2%</span>
                </div>
              </button>

              {/* Ethereum Card */}
              <button
                onClick={() => {
                  const coin = {
                    id: 'ethereum',
                    name: 'Ethereum',
                    symbol: 'eth',
                    current_price: 3456.78,
                    price_change_percentage_24h: -1.8,
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuAGgeNyB_C4h3U_8cP_8AKb5cz5xaabgyi4t2LiguewskOPqdZ2nG7_MF-uFajK1vh5UA2VBc2JhC0xE_iQd7KWRbcqh2YBwEpjdyP3dASTF-7duM7oweGodOZXWItPAjfPEmqICISLr-yP7GfhqVmIAwrPZJtEUz9B029If2deSJo7E1OawlxdoINv7GbQsp45Mj5cwsU16EuRVZ9_7W6cjnuGt75FUr0-Pf8A990nEqrX7wgT_ycDRLPhcdtKHpH-M1C_E3raw'
                  };
                  navigate('/crypto-detail', { state: { coin } });
                }}
                className="flex flex-col gap-3 rounded-lg border border-border-dark bg-card-dark p-4 hover:opacity-90 transition-opacity cursor-pointer text-left w-full"
              >
                <div className="flex items-center gap-2">
                  <img 
                    alt="Ethereum logo" 
                    className="h-8 w-8" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuAGgeNyB_C4h3U_8cP_8AKb5cz5xaabgyi4t2LiguewskOPqdZ2nG7_MF-uFajK1vh5UA2VBc2JhC0xE_iQd7KWRbcqh2YBwEpjdyP3dASTF-7duM7oweGodOZXWItPAjfPEmqICISLr-yP7GfhqVmIAwrPZJtEUz9B029If2deSJo7E1OawlxdoINv7GbQsp45Mj5cwsU16EuRVZ9_7W6cjnuGt75FUr0-Pf8A990nEqrX7wgT_ycDRLPhcdtKHpH-M1C_E3raw"
                  />
                  <div>
                    <p className="text-base font-bold text-text-light">ETH</p>
                    <p className="text-xs text-text-dim">$3,456.78</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-danger">
                  <span className="material-symbols-outlined text-base">arrow_drop_down</span>
                  <span>-1.8%</span>
                </div>
              </button>
            </div>
          </section>

          {/* Invite & Earn Section */}
          <button
            onClick={() => navigate('/share')}
            className="flex items-center gap-4 rounded-lg bg-primary/20 p-4 hover:opacity-90 transition-opacity cursor-pointer w-full text-left"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
              <span className="material-symbols-outlined text-white">card_giftcard</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-text-light">Invite & Earn</h4>
              <p className="text-sm text-text-dim">Get $10 for every friend you refer.</p>
            </div>
            <span className="material-symbols-outlined text-text-dim">chevron_right</span>
          </button>

          {/* Market Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-text-light">Market</h3>
              <button
                onClick={() => navigate('/market')}
                className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                View More
              </button>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              </div>
            ) : (
            <div className="mt-4 flex flex-col gap-4">
                {topCoins.map((coin) => (
                  <div
                    key={coin.id}
                    onClick={() => navigate('/crypto-detail', { state: { coin } })}
                    className="flex items-center justify-between gap-4 cursor-pointer hover:opacity-90 transition-opacity"
                  >
                <div className="flex items-center gap-3">
                  <img 
                        alt={`${coin.name} logo`} 
                        className="h-10 w-10 rounded-full" 
                        src={coin.image}
                  />
                  <div>
                        <p className="font-bold text-text-light">{coin.symbol.toUpperCase()}</p>
                        <p className="text-sm text-text-dim">{coin.name}</p>
                  </div>
                </div>
                <div className="text-right">
                      <p className="font-bold text-text-light">${formatPrice(coin.current_price)}</p>
                      <p className={`text-sm font-medium ${
                        coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'
                      }`}>
                        {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                        {coin.price_change_percentage_24h?.toFixed(2)}%
                      </p>
              </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
};

export default Home;

