import React, { ChangeEvent } from 'react';

import { ReturnComponentType } from 'common';

type CustomSelectType = {
  options: string[];
  setCurrent: Function;
};

export const CustomSelect = ({
  setCurrent,
  options,
}: CustomSelectType): ReturnComponentType => {
  const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = e.currentTarget.value;

    setCurrent(newValue);
  };

  return (
    <select onChange={onChangeHandle}>
      {options.map((el: string) => {
        return (
          <option key={el} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};
