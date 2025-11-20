import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-border-dark bg-background-dark/80 backdrop-blur-sm">
      <div className="grid h-20 grid-cols-5">
        <Link
          to="/home"
          className={`inline-flex flex-col items-center justify-center px-5 cursor-pointer ${
            location.pathname === '/home' ? 'text-primary' : 'text-text-dim hover:text-text-light'
          }`}
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-xs font-medium">Home</span>
        </Link>
        <Link
          to="/market"
          className={`inline-flex flex-col items-center justify-center px-5 cursor-pointer ${
            location.pathname === '/market' ? 'text-primary' : 'text-text-dim hover:text-text-light'
          }`}
        >
          <span className="material-symbols-outlined">bar_chart</span>
          <span className="text-xs font-medium">Markets</span>
        </Link>
        <Link
          to="/select-asset-swap"
          className="inline-flex flex-col items-center justify-center px-5 text-text-dim hover:text-text-light cursor-pointer"
        >
          <div className="relative -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined text-3xl text-white">swap_horiz</span>
          </div>
        </Link>
        <Link
          to="/wallet"
          className={`inline-flex flex-col items-center justify-center px-5 cursor-pointer ${
            location.pathname === '/wallet' ? 'text-primary' : 'text-text-dim hover:text-text-light'
          }`}
        >
          <span className="material-symbols-outlined">wallet</span>
          <span className="text-xs font-medium">Wallet</span>
        </Link>
        <Link
          to="/settings"
          className={`inline-flex flex-col items-center justify-center px-5 cursor-pointer ${
            location.pathname === '/settings' ? 'text-primary' : 'text-text-dim hover:text-text-light'
          }`}
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="text-xs font-medium">Settings</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

