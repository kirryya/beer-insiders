import { useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { analyticReducer } from 'state/reducers/analytic/analytic';
import { AnalyticActionsType } from 'state/reducers/analytic/types';

const rootReducer = combineReducers({
  analytic: analyticReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionType = AnalyticActionsType;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;
