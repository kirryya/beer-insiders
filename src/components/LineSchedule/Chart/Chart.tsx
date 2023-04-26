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
  const bars = data.map(({ name, color }) => {
    return (
      <Bar
        key={color}
        dataKey={name}
        fill={color}
        barSize={15}
        radius={10}
        style={{ padding: '20px' }}
        stackId="a"
      >
        <LabelList dataKey={name} position="right" />
      </Bar>
    );
  });

  return (
    <BarChart
      layout="vertical"
      width={420}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 15,
        left: 5,
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
        allowDecimals={false}
      />
      {bars}
    </BarChart>
  );
};
