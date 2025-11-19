import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-dark font-display text-text-light relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-24">
      <div className="flex h-full w-full flex-1 flex-col justify-start">
        {/* Header */}
        <header className="flex w-full items-center justify-between px-6 pt-8 pb-4">
          <div className="flex items-center gap-3">
            <div 
              className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover" 
              data-alt="User avatar" 
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3-JCNBUU8OFaD-716aKn95cO9G--inuVFXwA73iMCncq9n4MZrXsZKtmlfNsFVnsB8uCHSm-qwBiVqHIOQmlL_J5mN-oUz0KT2rdmhzm2Iv_hV9XvXmSA6SJ3SjFSZsE5mbRUiivnzL4FiGSC11wHaCKykFYg1gE8IrB9_d4KVdDwDqX_GAGpy1rO6W_a5s07gWWfe4dxj02HVVIesJ6V0sUyAWeYdWvuAlvnfzUcAo3_DgXaXILqxaqR-XxEhKeocOwTMSoGlyI")'
              }}
            ></div>
            <div>
              <p className="text-sm font-medium text-text-dim">My Portfolio</p>
              <h1 className="text-2xl font-bold tracking-tight text-text-light">Hi, Alex</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card-dark">
              <span className="material-symbols-outlined text-text-dim">qr_code_scanner</span>
            </button>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-card-dark">
              <span className="material-symbols-outlined text-text-dim">notifications</span>
              <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-card-dark"></div>
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
          <section className="mt-2 grid grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/buy')}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-dark py-3 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary">add</span>
              </div>
              <span className="text-sm font-semibold text-text-light">Buy</span>
            </button>
            <button
              onClick={() => navigate('/sell')}
              className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-dark py-3 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary">remove</span>
              </div>
              <span className="text-sm font-semibold text-text-light">Sell</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-dark py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary">swap_horiz</span>
              </div>
              <span className="text-sm font-semibold text-text-light">Swap</span>
            </button>
          </section>

          {/* Top Assets Section */}
          <section>
            <h3 className="text-lg font-bold text-text-light">Top Assets</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {/* Bitcoin Card */}
              <div className="flex flex-col gap-3 rounded-lg border border-border-dark bg-card-dark p-4">
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
              </div>

              {/* Ethereum Card */}
              <div className="flex flex-col gap-3 rounded-lg border border-border-dark bg-card-dark p-4">
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
              </div>
            </div>
          </section>

          {/* Invite & Earn Section */}
          <section className="flex items-center gap-4 rounded-lg bg-primary/20 p-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
              <span className="material-symbols-outlined text-white">card_giftcard</span>
            </div>
            <div>
              <h4 className="font-bold text-text-light">Invite & Earn</h4>
              <p className="text-sm text-text-dim">Get $10 for every friend you refer.</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-text-dim">chevron_right</span>
          </section>

          {/* Market Section */}
          <section>
            <h3 className="text-lg font-bold text-text-light">Market</h3>
            <div className="mt-4 flex flex-col gap-4">
              {/* USDT */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img 
                    alt="Tether logo" 
                    className="h-10 w-10" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcR_4M8nRg2r6ZyX7-tbON-vSqlh4Tx65yRkWMunTWLmn1maNZF2BeS44yRgPO25Y_ZGNqkTapwLPbNwujUf7_z1YrfEPTEmuVZhU57ENL7KKkw2eJ4Xh88vXigcH_-NPsOO0dWqrECNaSQgsfieGQXYRIFpNOR-zIAZ6hpeiiFtMhn_jeRyfviS_fKNW6Vaq0ebP8tCohZiNTq1254mkm_QMtLuqzdNgEA-sR_I1IgsT-_L1AjkGqqfhabos3Babrpo_TZhIXik"
                  />
                  <div>
                    <p className="font-bold text-text-light">USDT</p>
                    <p className="text-sm text-text-dim">Tether</p>
                  </div>
                </div>
                <div className="h-10 w-24">
                  <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 40" width="100%">
                    <polyline 
                      fill="none" 
                      points="0,30 10,25 20,28 30,20 40,22 50,15 60,18 70,10 80,15 90,12 100,5" 
                      stroke="#23C552" 
                      strokeWidth="2"
                    ></polyline>
                  </svg>
                </div>
                <div className="text-right">
                  <p className="font-bold text-text-light">$1.00</p>
                  <p className="text-sm font-medium text-success">+0.1%</p>
                </div>
              </div>

              {/* SOL */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img 
                    alt="Solana logo" 
                    className="h-10 w-10" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZgRBRLB6Z0ugOuF0K8szxIjyfKmazjXBz3zYtIEhmDFUbnTo9Q-S1d-qkeljjZf4xp2bj79FojdXC0NGeBFquQ-j7jXYl8LluIrZY9aXa0ExOeevTL1KJ5ydmWWNMv0cvYrDeDPmSd4huwxn5_5wsBO4erOMlxTzBDD4Yyfi6Y6dwYGDIAcsfcOya_l4YCQQ5dI3wira_ZGPi7yyRAfIC6Ir3pvqnGoG23NKyOQhiNtYKutKBIpMFMKoB7hOdwjsy-I7lhZJ7Vew"
                  />
                  <div>
                    <p className="font-bold text-text-light">SOL</p>
                    <p className="text-sm text-text-dim">Solana</p>
                  </div>
                </div>
                <div className="h-10 w-24">
                  <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 40" width="100%">
                    <polyline 
                      fill="none" 
                      points="0,5 10,12 20,10 30,18 40,15 50,25 60,22 70,30 80,28 90,35 100,38" 
                      stroke="#F85149" 
                      strokeWidth="2"
                    ></polyline>
                  </svg>
                </div>
                <div className="text-right">
                  <p className="font-bold text-text-light">$135.21</p>
                  <p className="text-sm font-medium text-danger">-3.4%</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
};

export default Home;

