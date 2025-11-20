import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import OTP from './components/OTP';
import Home from './components/Home';
import Wallet from './components/Wallet';
import WalletDetail from './components/WalletDetail';
import CryptoDetail from './components/CryptoDetail';
import Share from './components/Share';
import Market from './components/Market';
import Send from './components/Send';
import Receive from './components/Receive';
import AddAddress from './components/AddAddress';
import SavedAddresses from './components/SavedAddresses';
import Profile from './components/Profile';
import ResetPassword from './components/ResetPassword';
import CreateWallet from './components/CreateWallet';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Swap from './components/Swap';
import Settings from './components/Settings';
import SelectAsset from './components/SelectAsset';
import SelectAssetSell from './components/SelectAssetSell';
import SelectAssetSwap from './components/SelectAssetSwap';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background-light dark:bg-background-dark min-h-screen">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet-detail" element={<WalletDetail />} />
          <Route path="/crypto-detail" element={<CryptoDetail />} />
          <Route path="/share" element={<Share />} />
          <Route path="/market" element={<Market />} />
          <Route path="/send" element={<Send />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/saved-addresses" element={<SavedAddresses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/create-wallet" element={<CreateWallet />} />
          <Route path="/select-asset" element={<SelectAsset />} />
          <Route path="/select-asset-sell" element={<SelectAssetSell />} />
          <Route path="/select-asset-swap" element={<SelectAssetSwap />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
