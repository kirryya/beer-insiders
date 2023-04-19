import { initialState } from 'constants/beer';
import { getBeers, loading, setError } from 'state';

export type InitialStateType = typeof initialState;
export type BeersActionsType =
  | ReturnType<typeof getBeers>
  | ReturnType<typeof loading>
  | ReturnType<typeof setError>;
