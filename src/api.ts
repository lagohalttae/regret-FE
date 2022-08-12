import axios from 'axios';

const baseUrl = 'http://localhost:8080'; // 로컬환경 아닐때: process.env.REACT_APP_API_URL
const subUrl = (urlName: string, id?: string) =>
  ({
    coinList: '/coins/titles',
    coinPrice: `/coins/${id}`,
    coinCurrentPrice: `/coins/${id}/current`,
  }[urlName]);

export const axiosGet = async (urlName: string, id?: string, sendData?: any) => {
  try {
    const response = await axios.get(`${baseUrl}${subUrl(urlName, id)}`, {
      params: sendData,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(`get error: ${err}`);
  }
  return null;
};

export const axiosPost = async (urlName: string, id?: string, sendData?: any) => {
  try {
    const response = await axios.post(`${baseUrl}${subUrl(urlName, id)}`, sendData);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(`post error : ${err}`);
  }
  return null;
};
