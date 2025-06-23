import React from 'react';
import { TrendingUp, DollarSign, Activity, PieChart } from 'lucide-react';

const StatsOverview: React.FC = () => {
  const stats = [
    {
      label: 'Total Portfolio Value',
      value: '$11,107.24',
      change: '+5.23%',
      icon: DollarSign,
      positive: true
    },
    {
      label: '24h Change',
      value: '+$547.32',
      change: '+5.18%',
      icon: TrendingUp,
      positive: true
    },
    {
      label: 'Active Assets',
      value: '2',
      change: 'ETH, BTC',
      icon: PieChart,
      positive: true
    },
    {
      label: 'Total Transactions',
      value: '47',
      change: '+3 today',
      icon: Activity,
      positive: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <div className={`text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
              {stat.change}
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;