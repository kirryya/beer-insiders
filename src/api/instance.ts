import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://d.beerinsiders.ru:5443',
  headers: {
    Authorization: `${process.env.REACT_APP_BEARER_TOKEN}`,
  },
});
