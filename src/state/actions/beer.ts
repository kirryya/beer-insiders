import { BeerType } from 'common/types';
import { GET_BEERS, LOADING, SET_ERROR } from 'constants/beer';

export const getBeers = (beers: BeerType) => ({ type: GET_BEERS, beers } as const);
export const loading = (isLoading: boolean) => ({ type: LOADING, isLoading } as const);
export const setError = (error: string) => ({ type: SET_ERROR, error } as const);
