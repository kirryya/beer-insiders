import React from 'react';

import { ReturnComponentType } from 'common';

import './header.scss';

export const Header = (): ReturnComponentType => {
  return (
    <header>
      <ul>
        <li>
          <span>Каталог</span>
        </li>
        <li>
          <span>Клиентам</span>
        </li>
        <li>
          <span>Что за люди</span>
        </li>
        <li>
          <span>BI app</span>
        </li>
        <li>
          <span>Контакты</span>
        </li>
      </ul>
    </header>
  );
};
