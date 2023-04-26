import React, { ChangeEvent } from 'react';

import { ReturnComponentType } from 'common/types';
import { TypeGroupNameType } from 'common/types/AnalyticType';

import './lineScheduleHeader.scss';

type LineScheduleHeaderType = {
  groupName: TypeGroupNameType;
  onYearChangeHandle: (e: ChangeEvent<HTMLSelectElement>) => void;
  onGroupNameChangeHandle: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const LineScheduleHeader = ({
  groupName,
  onYearChangeHandle,
  onGroupNameChangeHandle,
}: LineScheduleHeaderType): ReturnComponentType => {
  return (
    <div className="header">
      <span>График по литрам ({groupName})</span>
      <div className="selects">
        <select value={groupName} onChange={onGroupNameChangeHandle}>
          <option value="пиво в кегах">пиво в кегах</option>
          <option value="пиво">пиво</option>
          <option value="сидр">сидр</option>
        </select>
        <select onChange={onYearChangeHandle}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};
