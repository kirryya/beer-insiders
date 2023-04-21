import React from 'react';

import { ReturnComponentType } from 'common/types';

import './information.scss';

export const Information = (): ReturnComponentType => {
  return (
    <div className="information">
      <div className="distribution">
        <span className="heading">Beer Insiders — Дистрибуция в один клик</span>
        <span className="content">
          Узнавайте первыми про актуальные цены и остатки. Скачивайте приложение, которое
          делает торговлю простой и удобной.
        </span>
      </div>
      <div className="useful-links">
        <span className="heading">Полезные ссылки</span>
        <span className="content">
          Что нужно, чтобы начать работать с нами Посмотреть портфолио брендов Адреса и
          контакты для связи Поставщикам и вакансии
        </span>
      </div>
    </div>
  );
};
