import { AnalyticType } from 'common/types';

export const GET_ANALYTIC = 'GET_ANALYTIC';
export const SET_ERROR = 'SET_ERROR';
export const LOADING = 'LOADING';

export const COLOR = 256;
export const STRING = 16;

export const initialState = {
  analytic: {} as AnalyticType,
  isLoading: false,
  error: '',
};
