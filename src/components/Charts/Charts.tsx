import React from 'react';

import { ReturnComponentType } from 'common';
import { LitresByTypeChart, ProductsCountChart } from 'components';

import './charts.scss';

type ChartsType = {
  isLoading: boolean;
  error: string;
};

export const Charts = ({ isLoading, error }: ChartsType): ReturnComponentType => {
  return (
    <main>
      <span className="header">Аналитика</span>
      <div className="analytics-data">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            <LitresByTypeChart />
            <ProductsCountChart />
          </>
        )}
      </div>
      {error && <span className="error">{error}</span>}
    </main>
  );
};
