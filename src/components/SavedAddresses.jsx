import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const SavedAddresses = () => {
  const navigate = useNavigate();
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      name: 'Alex',
      address: '0x12aB56cD7890eF1234567890aBcDeF1234567890aB',
      network: 'Ethereum',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIAvizmO3DZE1Asn8Sju0JAyH3wGx6RLuv532bcrgrjE-q0OPJFgodFu7_jDG63LuBY9J2XKSDm-L-Gfj1j7cMRH8yhsCISdwH8zOz7WtmErwZjODfUMqP40s7p5wkp7VamBahxVg4E0xXqwp7HUoF-r52EjY7QJwzCYJh1lb9UPJxbD18tG6BExSBBlDsDBX2uRWSqhKrXno8nLWsFJ7jvMg0HZf3v_kKODch02MZscUdiH9jYhEbPSbHOo8yTUSguCuqoWlQEDY'
    },
    {
      id: 2,
      name: 'Maria',
      address: '0x45dE89cD1234567890aBcDeF1234567890aBcDe',
      network: 'Ethereum',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhSeV0DlO1150yKt3DVRwhDoyIjVtmK9hi9nMtXR4-0OiRGn5_zg26kNvOVrqWk4LuTFwI5UlRdgLD-LnE_zzQkACjaqtA5WiBgxA7o9BcXIlgsGQ-oDCaxotruAabY8sCWU-JimqWxXrqKug8MTfkE5GzcuZFhHaWg23HHQWpiMvtaHVBgrBWGSGqhA_n7ceAAEnNpo_vsU2KGPl1P032QQfzE64LiZ5XMYGp9MUBPS8KC41JsH8In2WRhNr455wPY3n3ybMP5U4'
    }
  ]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = (id) => {
    setSavedAddresses(savedAddresses.filter(addr => addr.id !== id));
  };

  const handleEdit = (address) => {
    // Navigate to edit page or open edit modal
    navigate('/add-address', { state: { editAddress: address } });
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
        <button
          onClick={() => navigate('/add-address')}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">add</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 pt-2 pb-24">
        {savedAddresses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800/50 mb-4">
              <span className="material-symbols-outlined text-4xl text-gray-400 dark:text-gray-500">bookmark_border</span>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No saved addresses</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
              Add addresses to send crypto faster
            </p>
            <button
              onClick={() => navigate('/add-address')}
              className="flex h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-white hover:opacity-90 transition-opacity"
            >
              Add Address
            </button>
          </div>
        ) : (
          <div className="space-y-3 pt-2">
            {savedAddresses.map((address) => (
              <div
                key={address.id}
                className="flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800/50 p-4"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <img
                    alt={`${address.name}'s avatar`}
                    className="h-12 w-12 shrink-0 rounded-full"
                    src={address.avatar}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white truncate">{address.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate font-mono">
                      {address.address.slice(0, 6)}...{address.address.slice(-4)}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{address.network}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(address)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default SavedAddresses;

