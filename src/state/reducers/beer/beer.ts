import { GET_BEERS, initialState, LOADING, SET_ERROR } from 'constants/beer';
import { InitialStateType, BeersActionsType } from 'state/reducers/beer/types';

export const beerReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: BeersActionsType,
): InitialStateType => {
  switch (action.type) {
    case GET_BEERS:
      return { ...state, beers: action.beers };
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
