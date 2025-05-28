import { CryptoMetricCard, User } from "../types";

export const mockCryptoMetrics: CryptoMetricCard[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 68000,
    change: +2.3,
    iconPath: "assets/btc.svg",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 3400,
    change: -1.1,
    iconPath: "/assets/eth.svg",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 152.6,
    change: +5.6144,
    iconPath: "assets/solana.svg",
  },
];

export const mockUsers: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
  { id: 4, name: "Diana", email: "diana@example.com", age: 28 },
  { id: 5, name: "Eve", email: "eve@example.com", age: 35 },
  { id: 6, name: "Frank", email: "frank@example.com", age: 27 },
  { id: 7, name: "Grace", email: "grace@example.com", age: 29 },
  { id: 8, name: "Henry", email: "henry@example.com", age: 24 },
  { id: 9, name: "Isabella", email: "isabella@example.com", age: 31 },
  { id: 10, name: "Jack", email: "jack@example.com", age: 26 },
];
