import { BeerType } from 'common/types';

export const GET_BEERS = 'GET_BEERS';
export const SET_ERROR = 'SET_ERROR';
export const LOADING = 'LOADING';

export const initialState = {
  beers: {} as BeerType,
  isLoading: false,
  error: '',
};
