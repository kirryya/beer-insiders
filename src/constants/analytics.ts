import { AnalyticsType } from 'common';

export const GET_ANALYTICS = 'GET_ANALYTICS';
export const SET_ERROR = 'SET_ERROR';
export const LOADING = 'LOADING';

export const COLOR = 256;
export const STRING = 16;

export const initialState = {
  analytics: {} as AnalyticsType,
  isLoading: false,
  error: '',
};
