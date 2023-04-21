import React from 'react';

import { ReturnComponentType } from 'common/types';
import { HorizontalSchedule, LineSchedule } from 'components';
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
        <HorizontalSchedule />
        <LineSchedule />
        {isLoading && <span>Loading...</span>}
        {error && <span>{error}</span>}
      </div>
    </main>
  );
};
