import React from 'react';

import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts';

import { ReturnComponentType } from 'common/types';

type ChartType = {
  data: DataType[];
};

type DataType = {
  name: string;
  color: string;
};

export const Chart = ({ data }: ChartType): ReturnComponentType => {
  return (
    <BarChart
      layout="vertical"
      width={500}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 25,
        left: 25,
      }}
    >
      <XAxis type="number" hide />
      <YAxis
        width={150}
        orientation="left"
        dataKey="name"
        type="category"
        axisLine={false}
        tickLine={false}
      />
      {data.map(({ name, color }) => {
        return (
          <Bar key={color} dataKey={name} fill={color} barSize={15} radius={10}>
            <LabelList dataKey={name} position="right" />
          </Bar>
        );
      })}
    </BarChart>
  );
};
