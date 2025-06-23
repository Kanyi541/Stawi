import React from 'react';
import { ArrowUpRight, ArrowDownLeft, RefreshCw, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Transaction } from '../types/crypto';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'send':
        return <ArrowUpRight className="w-4 h-4 text-red-400" />;
      case 'receive':
        return <ArrowDownLeft className="w-4 h-4 text-green-400" />;
      case 'swap':
        return <RefreshCw className="w-4 h-4 text-blue-400" />;
      default:
        return <ArrowUpRight className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatHash = (hash: string) => {
    return `${hash.slice(0, 6)}...${hash.slice(-6)}`;
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
      <h3 className="text-white font-semibold text-lg mb-4">Recent Transactions</h3>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                {getTransactionIcon(transaction.type)}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium capitalize">
                    {transaction.type}
                  </span>
                  <span className="text-gray-400">{transaction.asset}</span>
                  {getStatusIcon(transaction.status)}
                </div>
                <p className="text-gray-400 text-sm">{formatHash(transaction.hash)}</p>
                <p className="text-gray-500 text-xs">
                  {transaction.timestamp.toLocaleDateString()} at {transaction.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`font-medium ${
                transaction.type === 'receive' ? 'text-green-400' : 'text-white'
              }`}>
                {transaction.type === 'receive' ? '+' : transaction.type === 'send' ? '-' : ''}
                {transaction.amount} {transaction.asset}
              </p>
              <p className="text-gray-400 text-sm">
                ${transaction.value.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
        View All Transactions
      </button>
    </div>
  );
};

export default TransactionList;