import { AnalyticType } from 'common/types';
import { GET_ANALYTIC, LOADING, SET_ERROR } from 'constants/analytic';

export const getAnalytic = (analytic: AnalyticType) =>
  ({ type: GET_ANALYTIC, analytic } as const);
export const loading = (isLoading: boolean) => ({ type: LOADING, isLoading } as const);
export const setError = (error: string) => ({ type: SET_ERROR, error } as const);
