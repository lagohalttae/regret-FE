import axios from 'axios';

export const getCoins: any = () => {
  axios.get(`${process.env.REACT_APP_API_URL}/coins/titles`).then((response) => {
    console.log(response);
  });
};
