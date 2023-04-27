import { initialState } from 'constants/analytics';
import { getAnalytics, loading, setError } from 'state';

export type InitialStateType = typeof initialState;
export type AnalyticsActionsType =
  | ReturnType<typeof getAnalytics>
  | ReturnType<typeof loading>
  | ReturnType<typeof setError>;
