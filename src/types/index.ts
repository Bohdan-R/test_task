export enum ERoutePath {
  OVERVIEW = "/overview",
  USERS = "/users",
  SETTINGS = "/settings",
}

export type Link = {
  label: string;
  href: ERoutePath;
};

export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export type CryptoMetricCard = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  iconPath: string;
};
