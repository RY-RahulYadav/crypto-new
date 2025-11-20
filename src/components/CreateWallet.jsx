import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const CreateWallet = () => {
  const navigate = useNavigate();
  const [walletType, setWalletType] = useState(null); // 'create' or 'import'
  const [formData, setFormData] = useState({
    walletName: '',
    seedPhrase: '',
    confirmSeedPhrase: ''
  });
  const [errors, setErrors] = useState({});

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.walletName) {
      newErrors.walletName = 'Wallet name is required';
    } else if (formData.walletName.length < 2) {
      newErrors.walletName = 'Wallet name must be at least 2 characters';
    }

    if (walletType === 'import') {
      if (!formData.seedPhrase) {
        newErrors.seedPhrase = 'Seed phrase is required';
      } else if (formData.seedPhrase.split(' ').length < 12) {
        newErrors.seedPhrase = 'Seed phrase must be at least 12 words';
      }

      if (!formData.confirmSeedPhrase) {
        newErrors.confirmSeedPhrase = 'Please confirm your seed phrase';
      } else if (formData.seedPhrase !== formData.confirmSeedPhrase) {
        newErrors.confirmSeedPhrase = 'Seed phrases do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      // Handle wallet creation logic here
      // For now, navigate back to wallet page
      navigate('/wallet');
    }
  };

  const handleImport = () => {
    if (validateForm()) {
      // Handle wallet import logic here
      // For now, navigate back to wallet page
      navigate('/wallet');
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
        <h1 className="flex-1 text-center text-xl font-bold text-gray-900 dark:text-white">
          {walletType === 'create' ? 'Create Wallet' : walletType === 'import' ? 'Import Wallet' : 'Add Wallet'}
        </h1>
        <div className="h-10 w-10"></div>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 pt-2 pb-24">
        {!walletType ? (
          /* Wallet Type Selection */
          <div className="flex flex-col items-center justify-center flex-1 space-y-6">
            <div className="w-full max-w-sm space-y-4">
              {/* Create New Wallet Option */}
              <button
                onClick={() => setWalletType('create')}
                className="w-full rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 p-6 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="material-symbols-outlined text-3xl text-primary">add_circle</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Create New Wallet</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Generate a new wallet with a secure seed phrase
                    </p>
                  </div>
                </div>
              </button>

              {/* Import Existing Wallet Option */}
              <button
                onClick={() => setWalletType('import')}
                className="w-full rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 p-6 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="material-symbols-outlined text-3xl text-primary">download</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Import Wallet</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Import an existing wallet using your seed phrase
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* Wallet Creation/Import Form */
          <div className="space-y-4 pt-4">
            {/* Wallet Name Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="walletName">
                Wallet Name
              </label>
              <input
                className={`w-full rounded-lg border ${
                  errors.walletName ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary`}
                id="walletName"
                name="walletName"
                placeholder="Enter wallet name"
                type="text"
                value={formData.walletName}
                onChange={handleInputChange}
              />
              {errors.walletName && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.walletName}</p>
              )}
            </div>

            {walletType === 'import' && (
              <>
                {/* Seed Phrase Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="seedPhrase">
                    Seed Phrase
                  </label>
                  <textarea
                    className={`w-full rounded-lg border ${
                      errors.seedPhrase ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary min-h-[100px] resize-none`}
                    id="seedPhrase"
                    name="seedPhrase"
                    placeholder="Enter your 12 or 24 word seed phrase"
                    value={formData.seedPhrase}
                    onChange={handleInputChange}
                  />
                  {errors.seedPhrase && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.seedPhrase}</p>
                  )}
                </div>

                {/* Confirm Seed Phrase Input */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400" htmlFor="confirmSeedPhrase">
                    Confirm Seed Phrase
                  </label>
                  <textarea
                    className={`w-full rounded-lg border ${
                      errors.confirmSeedPhrase ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary min-h-[100px] resize-none`}
                    id="confirmSeedPhrase"
                    name="confirmSeedPhrase"
                    placeholder="Re-enter your seed phrase to confirm"
                    value={formData.confirmSeedPhrase}
                    onChange={handleInputChange}
                  />
                  {errors.confirmSeedPhrase && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.confirmSeedPhrase}</p>
                  )}
                </div>
              </>
            )}

            {walletType === 'create' && (
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">info</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-2">Important Security Notice</p>
                    <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
                      <li>A seed phrase will be generated for your new wallet</li>
                      <li>Write down your seed phrase and store it securely</li>
                      <li>Never share your seed phrase with anyone</li>
                      <li>Losing your seed phrase means losing access to your wallet</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Back Button */}
            <button
              onClick={() => {
                setWalletType(null);
                setFormData({ walletName: '', seedPhrase: '', confirmSeedPhrase: '' });
                setErrors({});
              }}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 px-4 py-3 text-base font-semibold text-gray-900 dark:text-white hover:opacity-90 transition-opacity"
            >
              Back
            </button>
          </div>
        )}
      </div>

      {/* Action Button */}
      {walletType && (
        <div className="p-4 pb-24">
          <button
            onClick={walletType === 'create' ? handleCreate : handleImport}
            className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white hover:opacity-90 transition-opacity"
          >
            {walletType === 'create' ? 'Create Wallet' : 'Import Wallet'}
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CreateWallet;

