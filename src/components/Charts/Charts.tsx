import React from 'react';

import { ReturnComponentType } from 'common/types';
import { LineSchedule } from 'components';
import './charts.scss';
import { ProductsCountSchedule } from 'components/ProductsCountSchedule/VerticalSchedule';

type ChartsType = {
  isLoading: boolean;
  error: string;
};

export const Charts = ({ isLoading, error }: ChartsType): ReturnComponentType => {
  return (
    <main>
      <span className="header">Аналитика</span>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="analytic-data">
          <LineSchedule />
          <ProductsCountSchedule />
          {error && <span>{error}</span>}
        </div>
      )}
    </main>
  );
};
