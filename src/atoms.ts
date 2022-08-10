import { atom } from 'recoil';
import {
  ICalculateButtondAtom,
  ICalculationPrice,
  ICoinCurrentPrice,
  ICoinPrice,
  ISelectedCoin,
} from './types/coin';
// atom 모아두는곳
export const selectedCoinAtom = atom<ISelectedCoin>({
  key: 'selectedCoin',
  default: {
    coinId: 'bitcoin',
  },
});

export const coinPriceAtom = atom<ICoinPrice>({
  key: 'coinPrice',
  default: {
    coinId: 'bitcoin',
    label: '비트코인',
    maxPrice: { won: 0, atMillis: 0 },
    minPrice: { won: 0, atMillis: 0 },
  },
});

export const coinCurrentPriceAtom = atom<ICoinCurrentPrice>({
  key: 'currentCoinPrice',
  default: {
    coinId: 'bitcoin',
    images: {
      large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      small: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
      thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
    },
    label: '비트코인',
    lastUpdated: 0,
    price: { won: 0 },
  },
});

export const calculationPriceAtom = atom<ICalculationPrice>({
  key: 'calculationPrice',
  default: {
    price: 0,
  },
});

export const calculateButtondAtom = atom<ICalculateButtondAtom>({
  key: 'isCalculateClicked',
  default: {
    isClicked: false,
  },
});
