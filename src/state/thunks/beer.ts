import { requestAPI } from 'api';
import { getBeers, loading, setError, TypedDispatch } from 'state';

export const fetchBeers = () => async (dispatch: TypedDispatch) => {
  dispatch(loading(true));

  try {
    const { data } = await requestAPI.getBeers();

    dispatch(getBeers(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    }
  } finally {
    dispatch(loading(false));
  }
};
