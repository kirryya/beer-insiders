import { AnalyticsType } from 'common';
import { GET_ANALYTICS, LOADING, SET_ERROR } from 'constants/analytics';

export const getAnalytics = (analytics: AnalyticsType) =>
  ({ type: GET_ANALYTICS, analytics } as const);
export const loading = (isLoading: boolean) => ({ type: LOADING, isLoading } as const);
export const setError = (error: string) => ({ type: SET_ERROR, error } as const);
