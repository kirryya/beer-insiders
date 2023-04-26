import React, { ChangeEvent, useState } from 'react';

import { useSelector } from 'react-redux';

import {
  AnalyticType,
  CurrentYearType,
  ReturnComponentType,
  TypeGroupNameType,
} from 'common/types';
import {
  ApplicationForTraining,
  Chart,
  LineScheduleHeader,
} from 'components/LineSchedule';
import { COLOR, STRING } from 'constants/analytic';
import { AppRootStateType } from 'state';

import './lineShedule.scss';

export const LineSchedule = (): ReturnComponentType => {
  const analytic = useSelector<AppRootStateType, AnalyticType>(
    state => state.analytic.analytic,
  );

  const [currentYear, setCurrentYear] = useState<CurrentYearType>('2022');
  const [groupName, setGroupName] = useState<TypeGroupNameType>('пиво в кегах');

  const dataChart = analytic.data?.litersByTypeGroupsAndStylesTotals
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

  const onGroupNameChangeHandle = (e: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = e.currentTarget.value as TypeGroupNameType;

    setGroupName(newValue);
  };

  const onYearChangeHandle = (e: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = e.currentTarget.value as CurrentYearType;

    setCurrentYear(newValue);
  };

  return (
    <div className="line-schedule">
      <LineScheduleHeader
        groupName={groupName}
        onGroupNameChangeHandle={onGroupNameChangeHandle}
        onYearChangeHandle={onYearChangeHandle}
      />
      <Chart data={data} />
      <ApplicationForTraining />
    </div>
  );
};
