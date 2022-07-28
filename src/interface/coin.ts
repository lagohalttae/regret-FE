type Price = {
  won: number;
  atMillis: number;
};

type Won = {
  won: number;
};

type Image = {
  large: string;
  small: string;
  thumb: string;
};

export interface ICoinInfo {
  coinId: string;
  label: string;
  imageUrl: string;
}

export interface ICoinPrice {
  coinId: string;
  label: string;
  maxPrice: Price;
  minPrice: Price;
}

export interface ICoinCurrentPrice {
  coinId: string;
  images: Image;
  label: string;
  lastUpdated: number;
  price: Won;
}

export interface IProductInfo {
  productName: string;
  price: Won;
  image: Image;
  imageWhite: Image;
  unit: string;
}

export interface ISelectedCoin {
  coinId: string;
}

export interface IProduct {
  productName: string;
  price: number;
  image: string;
  imageWhite: string;
  unit: string;
}

export interface ICalculationPrice {
  price: number;
}

export interface IProductProps {
  productName: string;
  unit: string;
  img: string;
  num: number;
}
