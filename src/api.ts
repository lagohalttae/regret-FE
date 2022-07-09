import axios from 'axios';

export const getCoins: any = () => {
  axios.get(`/coins/titles`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const getCoinPrice: any = (id: string) => {
  axios.get(`/coins/${id}`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const getCoinCurrentPrice: any = (id: string) => {
  axios.get(`/coins/${id}/current`).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
