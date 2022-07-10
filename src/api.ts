import axios from 'axios';

export const getCoins = (setCoinList: any): void => {
  axios.get(`/coins/titles`).then((response) => {
    console.log(response.data);
    setCoinList(response.data);
  });
};

export const getCoinPrice = (setCoinPrice: any, id: string): void => {
  axios.get(`/coins/${id}`).then((response) => {
    console.log(response.data);
    setCoinPrice(response.data);
  });
};

export const getCoinCurrentPrice = (setCoinCurrentPrice: any, id: string): void => {
  axios.get(`/coins/${id}/current`).then((response) => {
    console.log(response.data);
    setCoinCurrentPrice(response.data);
  });
};
