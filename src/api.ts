import axios from 'axios';
import { ISelectedCoin } from './interface/coin';

export const getCoins = (setCoinList: any): void => {
  axios.get(`${process.env.REACT_APP_API_URL}/coins/titles`).then((response) => {
    console.log(response.data);
    setCoinList(response.data);
  });
};

export const getCoinPrice = (setCoinPrice: any, id: ISelectedCoin): void => {
  axios.get(`${process.env.REACT_APP_API_URL}/coins/${id}`).then((response) => {
    console.log(response.data);
    setCoinPrice(response.data);
  });
};

export const getCoinCurrentPrice = (setCoinCurrentPrice: any, id: ISelectedCoin): void => {
  axios.get(`${process.env.REACT_APP_API_URL}/coins/${id}/current`).then((response) => {
    console.log(response.data);
    setCoinCurrentPrice(response.data);
  });
};
