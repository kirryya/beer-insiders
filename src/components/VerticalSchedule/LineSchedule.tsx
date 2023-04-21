import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { ReturnComponentType } from 'common/types';

export const LineSchedule = (): ReturnComponentType => {
  // const { beers } = useSelector<AppRootStateType, InitialStateType>(state => state.analytic);

  ChartJS.register(CategoryScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};
