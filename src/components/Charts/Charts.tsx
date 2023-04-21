import React from 'react';

import { ReturnComponentType } from 'common/types';
import { LineSchedule } from 'components';
import './charts.scss';

type ChartsType = {
  isLoading: boolean;
  error: string;
};

export const Charts = ({ isLoading, error }: ChartsType): ReturnComponentType => {
  return (
    <main>
      <span className="header">Аналитика</span>
      <div className="analytic-data">
        <LineSchedule />
        {isLoading && <span>Loading...</span>}
        {error && <span>{error}</span>}
      </div>
    </main>
  );
};
