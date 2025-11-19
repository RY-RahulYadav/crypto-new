import React from 'react';
import Footer from './Footer';

const Settings = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark relative flex h-screen w-full flex-col font-display dark:bg-background-dark group/design-root overflow-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <main className="flex-1 overflow-y-auto px-6 pt-12 pb-28">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-text-light">Settings</h1>
        </header>

        {/* General Section */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary-dark mb-3">
            General
          </h2>
          <div className="rounded-lg bg-card-dark overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border-dark">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">dark_mode</span>
                <span className="font-semibold text-text-light">Dark Mode</span>
              </div>
              <button
                aria-checked="true"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
                role="switch"
              >
                <span className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary-dark mb-3">
            Security
          </h2>
          <div className="rounded-lg bg-card-dark overflow-hidden">
            <a
              className="flex items-center justify-between p-4 border-b border-border-dark hover:bg-background-dark/50"
              href="#"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">shield</span>
                <span className="font-semibold text-text-light">Security Overview</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary-dark">chevron_right</span>
            </a>
            <a
              className="flex items-center justify-between p-4 border-b border-border-dark hover:bg-background-dark/50"
              href="#"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">backup</span>
                <span className="font-semibold text-text-light">Backup Seed Phrase</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary-dark">chevron_right</span>
            </a>
            <a
              className="flex items-center justify-between p-4 hover:bg-background-dark/50"
              href="#"
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">restore</span>
                <span className="font-semibold text-text-light">Restore Seed Phrase</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary-dark">chevron_right</span>
            </a>
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

