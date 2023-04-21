import React from 'react';

import { useSelector } from 'react-redux';
import { Bar, CartesianGrid, ComposedChart, Tooltip, XAxis, YAxis } from 'recharts';

import { AnalyticType, ReturnComponentType } from 'common/types';
import { AppRootStateType } from 'state';

export const LineSchedule = (): ReturnComponentType => {
  const analytic = useSelector<AppRootStateType, AnalyticType>(
    state => state.analytic.analytic,
  );

  const dataChart = analytic.data?.litersByTypeGroupsAndStylesTotals?.find(({ year }) => {
    return year === '2022';
  })?.typeGroups[0].litersByStyles;

  const data = [];
  const N = 256;
  const M = 16;

  if (dataChart) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of Object.entries(dataChart)) {
      const r = Math.floor(Math.random() * N);
      const g = Math.floor(Math.random() * N);
      const b = Math.floor(Math.random() * N);
      const color = `#${r.toString(M)}${g.toString(M)}${b.toString(M)}`;
      const newObj = { name: item[0], [`${item[0]}`]: item[1], color };

      data.push(newObj);
    }
  }

  return (
    <ComposedChart
      layout="vertical"
      width={400}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" hide />
      <Tooltip />

      {data.map(({ name, color }) => {
        return <Bar key={color} dataKey={name} barSize={20} fill={color} />;
      })}
    </ComposedChart>
  );
};
