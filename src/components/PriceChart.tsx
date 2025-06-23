import React from 'react';
import { PricePoint } from '../types/crypto';

interface PriceChartProps {
  data: PricePoint[];
  color: string;
  symbol: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, color, symbol }) => {
  const maxPrice = Math.max(...data.map(d => d.price));
  const minPrice = Math.min(...data.map(d => d.price));
  const priceRange = maxPrice - minPrice;

  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((point.price - minPrice) / priceRange) * 100;
    return `${x},${y}`;
  }).join(' ');

  const currentPrice = data[data.length - 1]?.price || 0;
  const previousPrice = data[data.length - 2]?.price || currentPrice;
  const isPositive = currentPrice >= previousPrice;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{symbol} Price</h3>
          <p className="text-2xl font-bold text-white">${currentPrice.toLocaleString()}</p>
          <p className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}${(currentPrice - previousPrice).toFixed(2)} (24h)
          </p>
        </div>
      </div>

      <div className="relative h-32 w-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`gradient-${symbol}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            points={points}
            className="drop-shadow-sm"
          />
          
          <polygon
            fill={`url(#gradient-${symbol})`}
            points={`${points} 100,100 0,100`}
          />
        </svg>
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>{data[0]?.time}</span>
        <span>{data[data.length - 1]?.time}</span>
      </div>
    </div>
  );
};

export default PriceChart;