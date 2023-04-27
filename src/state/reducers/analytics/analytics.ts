import { InitialStateType, AnalyticsActionsType } from './types';

import { GET_ANALYTICS, initialState, LOADING, SET_ERROR } from 'constants/analytics';

export const analyticsReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: AnalyticsActionsType,
): InitialStateType => {
  switch (action.type) {
    case GET_ANALYTICS:
      return { ...state, analytics: action.analytics };
    case LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
