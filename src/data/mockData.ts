import { CryptoAsset, Transaction, PricePoint } from '../types/crypto';

export const cryptoAssets: CryptoAsset[] = [
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2347.82,
    change24h: 5.23,
    balance: 2.4567,
    value: 5769.45,
    icon: '⟠'
  },
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 43256.78,
    change24h: -2.14,
    balance: 0.1234,
    value: 5337.79,
    icon: '₿'
  }
];

export const transactions: Transaction[] = [
  {
    id: '1',
    type: 'receive',
    asset: 'ETH',
    amount: 0.5,
    value: 1173.91,
    timestamp: new Date('2024-01-15T10:30:00Z'),
    hash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
    status: 'completed'
  },
  {
    id: '2',
    type: 'send',
    asset: 'BTC',
    amount: 0.025,
    value: 1081.42,
    timestamp: new Date('2024-01-14T15:45:00Z'),
    hash: '1A1zP1eP5QGefi2DMaPTyeHs8FnmvkA7PQ',
    status: 'completed'
  },
  {
    id: '3',
    type: 'swap',
    asset: 'ETH',
    amount: 1.2,
    value: 2817.38,
    timestamp: new Date('2024-01-13T09:15:00Z'),
    hash: '0x9876543210fedcba0987654321fedcba09876543',
    status: 'pending'
  }
];

export const ethPriceData: PricePoint[] = [
  { time: '00:00', price: 2280 },
  { time: '04:00', price: 2295 },
  { time: '08:00', price: 2320 },
  { time: '12:00', price: 2340 },
  { time: '16:00', price: 2355 },
  { time: '20:00', price: 2347 }
];

export const btcPriceData: PricePoint[] = [
  { time: '00:00', price: 44200 },
  { time: '04:00', price: 43800 },
  { time: '08:00', price: 43500 },
  { time: '12:00', price: 43200 },
  { time: '16:00', price: 43100 },
  { time: '20:00', price: 43257 }
];