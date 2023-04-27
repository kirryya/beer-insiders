import React, { Dispatch, SetStateAction } from 'react';

import { CurrentYearType, ReturnComponentType, TypeGroupNameType } from 'common';
import { CustomSelect } from 'components';
import { OptionsForSelectType, OptionsForSelectYear } from 'constants/optionsForSelects';

import './litresByTypeChartHeader.scss';

type LineScheduleHeaderType = {
  groupName: TypeGroupNameType;
  setGroupName: Dispatch<SetStateAction<TypeGroupNameType>>;
  setCurrentYear: Dispatch<SetStateAction<CurrentYearType>>;
};

export const LitresByTypeChartHeader = ({
  groupName,
  setGroupName,
  setCurrentYear,
}: LineScheduleHeaderType): ReturnComponentType => {
  return (
    <div className="litres-chart-header">
      <span>График по литрам ({groupName})</span>
      <div className="selects">
        <CustomSelect setCurrent={setGroupName} options={OptionsForSelectType} />
        <CustomSelect setCurrent={setCurrentYear} options={OptionsForSelectYear} />
      </div>
    </div>
  );
};
