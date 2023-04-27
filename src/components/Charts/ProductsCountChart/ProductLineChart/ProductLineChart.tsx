import React from 'react';

import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import { ReturnComponentType } from 'common';
import { CountryType } from 'enums';

type ProductLineChartType = {
  data: DataType[];
};

type DataType = {
  name: string;
  [CountryType.Russia]?: number;
  [CountryType.Other]?: number;
  [CountryType.Czech]?: number;
};

export const ProductLineChart = ({ data }: ProductLineChartType): ReturnComponentType => {
  return (
    <LineChart
      width={570}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
    >
      <XAxis dataKey="name" tickLine={false} />
      <YAxis hide />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Other"
        stroke="#8884d8"
        strokeWidth={4}
        dot={false}
        activeDot={{ r: 6 }}
      />
      <Line
        type="monotone"
        dataKey="Russia"
        stroke="#82ca9d"
        strokeWidth={4}
        dot={false}
        activeDot={{ r: 6 }}
      />
      <Line
        type="monotone"
        dataKey="Czech"
        stroke="#2a6a80"
        strokeWidth={4}
        dot={false}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
};
