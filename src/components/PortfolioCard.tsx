import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoAsset } from '../types/crypto';

interface PortfolioCardProps {
  asset: CryptoAsset;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ asset }) => {
  const isPositive = asset.change24h >= 0;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:border-gray-600">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {asset.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold">{asset.symbol}</h3>
            <p className="text-gray-400 text-sm">{asset.name}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">
            {isPositive ? '+' : ''}{asset.change24h.toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Balance</span>
          <span className="text-white font-medium">{asset.balance.toFixed(4)} {asset.symbol}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Price</span>
          <span className="text-white font-medium">${asset.price.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-gray-700">
          <span className="text-gray-400 text-sm">Total Value</span>
          <span className="text-xl font-bold text-white">${asset.value.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;