export { store, useTypedDispatch } from './store';
export { getBeers, loading, setError } from './actions/beer';
export type { BeersActionsType } from './reducers/beer/types';
export type { TypedDispatch, AppRootStateType } from './store';
export { fetchBeers } from './thunks/beer';
