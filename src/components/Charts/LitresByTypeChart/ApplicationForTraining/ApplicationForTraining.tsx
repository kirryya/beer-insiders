import React from 'react';

import { ReturnComponentType } from 'common/types';

import './applicationForTraining.scss';

export const ApplicationForTraining = (): ReturnComponentType => {
  return (
    <div className="application-for-training">
      <button type="button">
        <span>Заявка на обучение от пивного сомелье</span>
      </button>
    </div>
  );
};
