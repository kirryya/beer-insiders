import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import { AnalyticType, CurrentYearType, ReturnComponentType } from 'common/types';
import { AppRootStateType } from 'state';

import './verticalShedule.scss';

export const ProductsCountSchedule = (): ReturnComponentType => {
  const analytic = useSelector<AppRootStateType, AnalyticType>(
    state => state.analytic.analytic,
  );

  const [currentYear, setCurrentYear] = useState<CurrentYearType>('2022');

  const data = analytic.data?.productsCountByCountryTotals[currentYear].months.map(
    ({ month, productsCountByCountry }) => {
      return {
        name: month,
        Russia: productsCountByCountry['Россия'],
        Other: productsCountByCountry[''],
        Czech: productsCountByCountry['Чехия'],
      };
    },
  );

  return (
    <div className="vertical-schedule">
      <div className="vertical-schedule-header">
        <div className="header-block">
          <span>Динамика заказов</span>
          <span className="count">
            {analytic.data?.productsCountByCountryTotals[currentYear].totalProductsCount}
          </span>
        </div>
        <select onChange={e => setCurrentYear(e.currentTarget.value as CurrentYearType)}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <LineChart
        width={550}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis hide />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Other" stroke="#8884d8" />
        <Line type="monotone" dataKey="Russia" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Czech" stroke="#000000" />
      </LineChart>
    </div>
  );
};
