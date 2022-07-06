import axios from 'axios';

export const getCoins = async (): Promise<void> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/coins/titles`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  console.log(data);
};
