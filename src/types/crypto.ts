export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  balance: number;
  value: number;
  icon: string;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap';
  asset: string;
  amount: number;
  value: number;
  timestamp: Date;
  hash: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface PricePoint {
  time: string;
  price: number;
}