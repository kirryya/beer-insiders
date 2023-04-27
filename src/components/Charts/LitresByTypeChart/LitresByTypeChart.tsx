import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { ApplicationForTraining } from './ApplicationForTraining';
import { LitresBarChart } from './LitresBarChart';
import { LitresByTypeChartHeader } from './LitresByTypeChartHeader';

import {
  AnalyticsType,
  CurrentYearType,
  ReturnComponentType,
  TypeGroupNameType,
} from 'common';
import { COLOR, STRING } from 'constants/analytics';
import { ProductType, YearForSelectType } from 'enums';
import { AppRootStateType } from 'state';

import './litresByTypeChart.scss';

export const LitresByTypeChart = (): ReturnComponentType => {
  const analytics = useSelector<AppRootStateType, AnalyticsType>(
    state => state.analytics.analytics,
  );

  const [currentYear, setCurrentYear] = useState<CurrentYearType>(
    YearForSelectType.YEAR_2022,
  );
  const [groupName, setGroupName] = useState<TypeGroupNameType>(ProductType.BEER_IN_KEGS);

  const dataChart = analytics.data?.litersByTypeGroupsAndStylesTotals
    ?.find(({ year }) => {
      return year === currentYear;
    })
    ?.typeGroups.find(({ typeGroupName }) => {
      return typeGroupName === groupName;
    })?.litersByStyles;

  const data = [];

  if (dataChart) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of Object.entries(dataChart)) {
      const r = Math.floor(Math.random() * COLOR);
      const g = Math.floor(Math.random() * COLOR);
      const b = Math.floor(Math.random() * COLOR);
      const color = `#${r.toString(STRING)}${g.toString(STRING)}${b.toString(STRING)}`;
      const newObj = { name: item[0], [`${item[0]}`]: item[1], color };

      data.push(newObj);
    }
  }

  return (
    <div className="litres-by-type-chart">
      <LitresByTypeChartHeader
        groupName={groupName}
        setCurrentYear={setCurrentYear}
        setGroupName={setGroupName}
      />
      <LitresBarChart data={data} />
      <ApplicationForTraining />
    </div>
  );
};
