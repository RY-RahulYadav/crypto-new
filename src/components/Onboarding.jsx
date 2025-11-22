import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="relative flex h-screen w-full flex-col font-display dark:bg-background-dark group/design-root overflow-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="flex h-full w-full flex-col justify-between p-4 overflow-hidden">
        {/* Logo */}
        <header className="flex w-full justify-center pt-4 pb-4 flex-shrink-0">
          <img src="/logo.png" alt="Open World Accounts" className="h-24 w-auto" />
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center justify-center min-h-0 overflow-hidden">
          {/* 3D Illustration */}
          <div className="flex w-full items-center justify-center px-4 py-2 flex-1 min-h-0">
            <div className="w-full max-w-xs">
              <div className="w-full aspect-square flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover rounded-none flex-1"
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
          <div className="w-full px-4 pb-2 flex-shrink-0">
            <h1 className="text-[#F0F6FC] tracking-tight text-2xl font-bold leading-tight text-center pb-2">
              The Future of Your Digital Assets
            </h1>
            <p className="text-[#8B949E] text-sm font-normal leading-normal text-center">
              Securely buy, store, and manage your cryptocurrency with ease.
            </p>
          </div>
        </main>

        {/* Footer with CTAs */}
        <footer className="w-full pb-2 pt-4 flex-shrink-0">
          <div className="flex px-4 py-2">
            <button
              onClick={handleGetStarted}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
            >
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Onboarding;

