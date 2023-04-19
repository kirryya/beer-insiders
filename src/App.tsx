import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { ReturnComponentType } from 'common/types';
import { AppRootStateType, fetchBeers, useTypedDispatch } from 'state';
import { InitialStateType } from 'state/reducers/beer/types';

import 'App.scss';

export const App = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const { beers, isLoading, error } = useSelector<AppRootStateType, InitialStateType>(
    state => state.beer,
  );

  useEffect(() => {
    dispatch(fetchBeers());
  }, []);

  return (
    <>
      <header className="header">
        <div>
          <span>Каталог</span>
          <span>Клиентам</span>
          <span>Что за люди</span>
          <span>BI app</span>
          <span>Контакты</span>
          <span>Личный кабинет</span>
        </div>
      </header>
      <main>
        <span>Аналитика</span>

        <span>{beers.ordersCount}</span>
        {isLoading && <span>Loading...</span>}
        {error && <span>{error}</span>}

        <div>
          <span>BEER INSIDERS — ДИСТРИБУЦИЯ В ОДИН КЛИК</span>
          <span>
            Узнавайте первыми про актуальные цены и остатки. Скачивайте приложение,
            которое делает торговлю простой и удобной.{' '}
          </span>
        </div>
        <div>
          <span>Полезные ссылки</span>
          <span>
            Что нужно, чтобы начать работать с нами Посмотреть портфолио брендов Адреса и
            контакты для связи Поставщикам и вакансии
          </span>
        </div>
      </main>
      <footer>
        <span>BEER INSIDERS 2018 → 2022</span>
      </footer>
    </>
  );
};
