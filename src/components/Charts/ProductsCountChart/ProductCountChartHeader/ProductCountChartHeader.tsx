import React, { Dispatch, SetStateAction } from 'react';

import { CurrentYearType, ReturnComponentType } from 'common';
import { CustomSelect } from 'components';
import { OptionsForSelectYear } from 'constants/optionsForSelects';

import './productCountChartHeader.scss';

type ProductCountChartHeaderType = {
  setCurrentYear: Dispatch<SetStateAction<CurrentYearType>>;
  totalCount: number;
};

export const ProductCountChartHeader = ({
  setCurrentYear,
  totalCount,
}: ProductCountChartHeaderType): ReturnComponentType => {
  return (
    <div className="products-count-header">
      <div className="header-block">
        <span>Динамика заказов</span>
        <span className="count">{totalCount}</span>
      </div>
      <CustomSelect setCurrent={setCurrentYear} options={OptionsForSelectYear} />
    </div>
  );
};
