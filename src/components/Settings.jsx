import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark relative flex h-screen w-full flex-col font-display dark:bg-background-dark group/design-root overflow-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <main className="flex-1 overflow-y-auto px-6 pt-12 pb-28">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-text-light">Settings</h1>
        </header>

        {/* Profile Section */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary-dark mb-3">
            Profile
          </h2>
          <div className="rounded-lg bg-card-dark overflow-hidden">
            <button
              onClick={() => navigate('/profile')}
              className="flex w-full items-center justify-between p-4 border-b border-border-dark hover:bg-background-dark/50"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">person</span>
                <span className="font-semibold text-text-light">Profile</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary-dark">chevron_right</span>
            </button>
            <button
              onClick={() => navigate('/reset-password')}
              className="flex w-full items-center justify-between p-4 hover:bg-background-dark/50"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">lock_reset</span>
                <span className="font-semibold text-text-light">Password Reset</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary-dark">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Wallet Section */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary-dark mb-3">
            Wallet
          </h2>
          <div className="rounded-lg bg-card-dark overflow-hidden">
            <button
              onClick={() => navigate('/wallet')}
              className="flex w-full items-center justify-between p-4 hover:bg-background-dark/50"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                <span className="font-semibold text-text-light">My Wallet</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary-dark">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Addresses Section */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary-dark mb-3">
            Addresses
          </h2>
          <div className="rounded-lg bg-card-dark overflow-hidden">
            <button
              onClick={() => navigate('/saved-addresses')}
              className="flex w-full items-center justify-between p-4 hover:bg-background-dark/50"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">bookmark</span>
                <span className="font-semibold text-text-light">Saved Addresses</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary-dark">chevron_right</span>
            </button>
          </div>
        </section>

        {/* About Section */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary-dark mb-3">
            About
          </h2>
          <div className="rounded-lg bg-card-dark overflow-hidden p-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-text-light">App Version</span>
              <span className="text-text-secondary-dark">1.0.0</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Navigation - Using shared Footer */}
      <Footer />
    </div>
  );
};

export default Settings;

