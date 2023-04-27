import { getAnalytics, loading, setError, TypedDispatch } from 'state';

export const fetchAnalytics = () => async (dispatch: TypedDispatch) => {
  dispatch(loading(true));

  try {
    // const { data } = await requestAPI.getAnalytics();

    const response = await fetch('BI_analytics_for_test_task.json');
    const data = await response.json();

    dispatch(getAnalytics(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    }
  } finally {
    dispatch(loading(false));
  }
};
