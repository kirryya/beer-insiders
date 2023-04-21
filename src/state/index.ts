export { store, useTypedDispatch } from './store';
export { getAnalytic, loading, setError } from 'state/actions/analytic';
export type { AnalyticActionsType } from './reducers/analytic/types';
export type { TypedDispatch, AppRootStateType } from './store';
export { fetchAnalytic } from 'state/thunks/analytic';
export type { InitialStateType } from 'state/reducers/analytic/types';
