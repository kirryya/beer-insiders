import React from 'react';

import logo from 'assets/logo.jpg';
import { ReturnComponentType } from 'common/types';

import './sideBar.scss';

export const SideBar = (): ReturnComponentType => {
  return (
    <aside>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <span>О компании</span>
        </li>
        <li>
          <span className="active">Аналитика</span>
        </li>
        <li>
          <span>События</span>
        </li>
        <li>
          <span>Заказы</span>
        </li>
        <li>
          <span>Матрица заведения</span>
        </li>
      </ul>
    </aside>
  );
};
