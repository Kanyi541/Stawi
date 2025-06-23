import React from 'react';
import { X, Wallet, Shield, Smartphone, Globe } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletType: string) => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose, onConnect }) => {
  if (!isOpen) return null;

  const wallets = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect using browser extension',
      type: 'metamask',
      popular: true
    },
    {
      name: 'WalletConnect',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Scan with WalletConnect to connect',
      type: 'walletconnect',
      popular: true
    },
    {
      name: 'Coinbase Wallet',
      icon: '🔵',
      description: 'Connect with Coinbase Wallet',
      type: 'coinbase',
      popular: false
    },
    {
      name: 'Trust Wallet',
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      description: 'Connect with Trust Wallet',
      type: 'trust',
      popular: false
    },
    {
      name: 'Phantom',
      icon: '👻',
      description: 'Connect with Phantom wallet',
      type: 'phantom',
      popular: false
    },
    {
      name: 'Rainbow',
      icon: '🌈',
      description: 'Connect with Rainbow wallet',
      type: 'rainbow',
      popular: false
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Connect Wallet</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Choose your preferred wallet to connect to CryptoVault
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            {wallets.map((wallet) => (
              <button
                key={wallet.type}
                onClick={() => onConnect(wallet.type)}
                className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-200 text-left group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {typeof wallet.icon === 'string' ? wallet.icon : wallet.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-white font-medium">{wallet.name}</h3>
                      {wallet.popular && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{wallet.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
              <div>
                <h4 className="text-blue-400 font-medium text-sm">Secure Connection</h4>
                <p className="text-gray-400 text-xs mt-1">
                  Your wallet connection is encrypted and secure. We never store your private keys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;