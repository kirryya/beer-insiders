import { GET_ANALYTIC, initialState, LOADING, SET_ERROR } from 'constants/analytic';
import { InitialStateType, AnalyticActionsType } from 'state/reducers/analytic/types';

export const analyticReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: AnalyticActionsType,
): InitialStateType => {
  switch (action.type) {
    case GET_ANALYTIC:
      return { ...state, analytic: action.analytic };
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
