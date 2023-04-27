import { useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { analyticsReducer } from './reducers/analytics/analytics';

import { AnalyticsActionsType } from 'state';

const rootReducer = combineReducers({
  analytics: analyticsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionType = AnalyticsActionsType;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;
