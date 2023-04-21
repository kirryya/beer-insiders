import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { ReturnComponentType } from 'common/types';
import { Charts, Footer, Header, Information, SideBar } from 'components';
import {
  AppRootStateType,
  fetchAnalytic,
  InitialStateType,
  useTypedDispatch,
} from 'state';

import './App.scss';

export const App = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const { isLoading, error } = useSelector<AppRootStateType, InitialStateType>(
    state => state.analytic,
  );

  useEffect(() => {
    dispatch(fetchAnalytic());
  }, []);

  return (
    <div className="main-container">
      <div className="main">
        <SideBar />
        <div className="analytic-container">
          <Header />
          <Charts isLoading={isLoading} error={error} />
        </div>
      </div>
      <div className="information-container">
        <Information />
        <Footer />
      </div>
    </div>
  );
};
