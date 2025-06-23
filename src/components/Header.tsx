import React, { useState } from 'react';
import { Wallet, Menu, Bell, Settings } from 'lucide-react';
import WalletModal from './WalletModal';
import SettingsModal from './SettingsModal';

const Header: React.FC = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string>('');

  const handleWalletConnect = (walletType: string) => {
    // Simulate wallet connection
    setIsConnected(true);
    setConnectedWallet(walletType);
    setIsWalletModalOpen(false);
    
    // Show success message (you could add a toast notification here)
    console.log(`Connected to ${walletType} wallet`);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setConnectedWallet('');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWalletDisplayName = (type: string) => {
    const names: { [key: string]: string } = {
      metamask: 'MetaMask',
      walletconnect: 'WalletConnect',
      coinbase: 'Coinbase',
      trust: 'Trust Wallet',
      phantom: 'Phantom',
      rainbow: 'Rainbow'
    };
    return names[type] || type;
  };

  return (
    <>
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">Stawi</h1>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-blue-400 transition-colors font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('markets')}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Markets
              </button>
              <button 
                onClick={() => scrollToSection('transactions')}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Transactions
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800">
                <Bell className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsSettingsModalOpen(true)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
              >
                <Settings className="w-5 h-5" />
              </button>
              
              {isConnected ? (
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-2 rounded-lg text-sm font-medium">
                    {getWalletDisplayName(connectedWallet)}
                  </div>
                  <button
                    onClick={handleDisconnect}
                    className="bg-red-500/20 border border-red-500/30 text-red-400 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-500/30 transition-all"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsWalletModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Connect Wallet
                </button>
              )}
              
              <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onConnect={handleWalletConnect}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />
    </>
  );
};

export default Header;