import React, { useMemo } from 'react';

import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts';

import { ReturnComponentType } from 'common';

type ChartType = {
  data: DataType[];
};

type DataType = {
  name: string;
  color: string;
};

export const LitresBarChart = ({ data }: ChartType): ReturnComponentType => {
  const bars = useMemo(
    () =>
      data.map(({ name, color }) => {
        return (
          <Bar
            key={color}
            dataKey={name}
            fill={color}
            barSize={15}
            radius={10}
            stackId="a"
          >
            <LabelList dataKey={name} position="right" />
          </Bar>
        );
      }),
    [data],
  );

  return (
    <BarChart
      layout="vertical"
      width={450}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 25,
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
