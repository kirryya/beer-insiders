import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { ProductCountChartHeader } from './ProductCountChartHeader';
import { ProductLineChart } from './ProductLineChart';

import { AnalyticsType, CurrentYearType, ReturnComponentType } from 'common';
import { CountryType, YearForSelectType } from 'enums';
import { AppRootStateType } from 'state';
import { getMonth } from 'utils';

import './productsCountChart.scss';

export const ProductsCountChart = (): ReturnComponentType => {
  const analytics = useSelector<AppRootStateType, AnalyticsType>(
    state => state.analytics.analytics,
  );

  const [currentYear, setCurrentYear] = useState<CurrentYearType>(
    YearForSelectType.YEAR_2022,
  );

  const totalCount =
    analytics.data?.productsCountByCountryTotals[currentYear].totalProductsCount;

  const data = analytics.data?.productsCountByCountryTotals[currentYear].months.map(
    ({ month, productsCountByCountry }) => {
      return {
        name: getMonth(month),
        Russia: productsCountByCountry[CountryType.Russia] || 0,
        Other: productsCountByCountry[CountryType.Other] || 0,
        Czech: productsCountByCountry[CountryType.Czech] || 0,
      };
    },
  );

  return (
    <div className="products-count-chart">
      <ProductCountChartHeader setCurrentYear={setCurrentYear} totalCount={totalCount} />
      <ProductLineChart data={data} />
    </div>
  );
};
