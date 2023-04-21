import { initialState } from 'constants/analytic';
import { getAnalytic, loading, setError } from 'state';

export type InitialStateType = typeof initialState;
export type AnalyticActionsType =
  | ReturnType<typeof getAnalytic>
  | ReturnType<typeof loading>
  | ReturnType<typeof setError>;
