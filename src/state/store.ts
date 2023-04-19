import { useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { beerReducer } from './reducers/beer/beer';

import { BeersActionsType } from 'state/reducers/beer/types';

const rootReducer = combineReducers({
  beer: beerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionType = BeersActionsType;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;
