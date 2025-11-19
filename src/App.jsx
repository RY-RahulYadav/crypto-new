import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Send from './components/Send';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background-light dark:bg-background-dark min-h-screen">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/send" element={<Send />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
