import { instance } from 'api';

export const requestAPI = {
  getBeers() {
    return instance.get(`/orders/client/analytics?id=62cad21f5443160f6327f58a`);
  },
};
