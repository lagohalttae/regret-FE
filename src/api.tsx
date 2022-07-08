import axios from 'axios';

export const getCoins: any = () => {
  axios.get(`/coins/titles`).then((response) => {
    return response.data;
  });
};
