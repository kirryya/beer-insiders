import { AnalyticType } from 'common/types/AnalyticType';

export const GET_ANALYTIC = 'GET_ANALYTIC';
export const SET_ERROR = 'SET_ERROR';
export const LOADING = 'LOADING';

export const initialState = {
  analytic: {} as AnalyticType,
  isLoading: false,
  error: '',
};
