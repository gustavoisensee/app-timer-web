import currency from 'currency.js';

export const euro = (value) =>
  currency(value, { symbol: "€ ", precision: 2 }).format(true);
