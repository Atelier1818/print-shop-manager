export interface Product {
  name: string;
  basePrice: number;
  priceBySize: boolean;
}

export interface Paper {
  name: string;
  multiplier: number;
}

export interface PriceConfig {
  products: {
    [key: string]: Product;
  };
  papers: {
    [key: string]: Paper;
  };
  quantities: {
    [key: number]: number;
  };
  extras: {
    margin: number;
    tax: number;
  };
}

export interface FormData {
  product: string;
  paper: string;
  quantity: number;
  size?: string;
  width?: number;
  height?: number;
}

export interface QuoteResult {
  basePrice: string;
  margin: string;
  tax: string;
  total: string;
  perUnit: string;
  discount: string;
}