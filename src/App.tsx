import React from 'react';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import PortfolioCard from './components/PortfolioCard';
import PriceChart from './components/PriceChart';
import TransactionList from './components/TransactionList';
import { cryptoAssets, transactions, ethPriceData, btcPriceData } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Section */}
        <section id="portfolio" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Portfolio Overview</h2>
            <p className="text-gray-400">Monitor your cryptocurrency investments and market performance</p>
          </div>

          <StatsOverview />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {cryptoAssets.map((asset) => (
              <PortfolioCard key={asset.id} asset={asset} />
            ))}
          </div>
        </section>

        {/* Markets Section */}
        <section id="markets" className="scroll-mt-20 mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Market Charts</h2>
            <p className="text-gray-400">Real-time price movements and market trends</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <PriceChart
              data={ethPriceData}
              color="#3B82F6"
              symbol="ETH"
            />
            <PriceChart
              data={btcPriceData}
              color="#F59E0B"
              symbol="BTC"
            />
          </div>
        </section>

        {/* Transactions Section */}
        <section id="transactions" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Transaction History</h2>
            <p className="text-gray-400">Track all your cryptocurrency transactions and activities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TransactionList transactions={transactions} />
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105">
                  Send Crypto
                </button>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105">
                  Receive Crypto
                </button>
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105">
                  Swap Assets
                </button>
                <button className="w-full border border-gray-600 text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-all">
                  View Analytics
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-white font-medium mb-3">Market Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Cap</span>
                    <span className="text-white">$1.2T</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">24h Volume</span>
                    <span className="text-white">$89.4B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dominance</span>
                    <span className="text-white">BTC 52.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;