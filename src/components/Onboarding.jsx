import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  const handleImportWallet = () => {
    // Handle import wallet action
    console.log('Import Wallet clicked');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display dark:bg-background-dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="flex h-full w-full flex-1 flex-col justify-between p-6">
        {/* Logo */}
        <header className="flex w-full justify-center pt-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl" data-icon="shield">
              security
            </span>
            <span className="text-xl font-bold tracking-tight text-[#F0F6FC]">Open World Accounts</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center justify-center">
          {/* 3D Illustration */}
          <div className="flex w-full grow items-center justify-center px-4 py-8">
            <div className="w-full max-w-sm">
              <div className="w-full gap-1 overflow-hidden sm:gap-2 aspect-square flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  data-alt="Stylized 3D illustration of floating geometric shapes and a secure vault, representing digital assets and security"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAV7xXx344OCqYRdxuN9Lyb9gqBHlQI5BqN6U4ijBv2qhA0ONBz9u7lvSif-_HrUY4gn6uRn5jVnSULon5JZbiCcDPKk9fmgObgs50Dj5LULQzlbjFse7a_SemaL2ebCsvcmjcoJDqOWu9-686-Cn1oGTSStp0Y4mqL1Fawuz5YwT6h5quvbZDFShpzqOH5fAttJZVmm7ku3iiy0iHA8fJYpYTqEDPydmpkhwaTNCAcc_sVmlCU2F5GCA7GzUa-hAcvT4seic2xnSI")',
                    backgroundSize: 'contain'
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Headline & Sub-headline */}
          <div className="w-full px-4">
            <h1 className="text-[#F0F6FC] tracking-tight text-3xl font-bold leading-tight text-center pb-3">
              The Future of Your Digital Assets
            </h1>
            <p className="text-[#8B949E] text-base font-normal leading-normal text-center">
              Securely buy, store, and manage your cryptocurrency with ease.
            </p>
          </div>
        </main>

        {/* Footer with CTAs */}
        <footer className="w-full pb-4 pt-8">
          <div className="flex px-4 py-3">
            <button
              onClick={handleGetStarted}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
            >
              <span className="truncate">Get Started</span>
            </button>
          </div>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleImportWallet();
            }}
            className="block text-center text-sm font-semibold text-[#8B949E] hover:text-[#F0F6FC] transition-colors py-2 cursor-pointer"
            href="#"
          >
            Import Existing Wallet
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Onboarding;

