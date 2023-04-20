import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import facebook from 'assets/facebook.jpg';
import github from 'assets/github.jpg';
import instagram from 'assets/instagram.jpg';
import logo from 'assets/logo.jpg';
import nba from 'assets/nba.jpg';
import twitter from 'assets/twitter.jpg';
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
    <div className="main-container">
      <div className="main">
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
        <div className="analytic">
          <header>
            <ul>
              <li>
                <span className="active">Каталог</span>
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
              <li>
                <span>Личный кабинет</span>
              </li>
            </ul>
          </header>
          <main>
            <span>Аналитика</span>

            <span>
              {beers.data?.countByProductVolumeTotals.map(({ year, volumes }) => {
                return <span key={year}>{volumes['0,5']}</span>;
              })}
            </span>
            {isLoading && <span>Loading...</span>}
            {error && <span>{error}</span>}
          </main>
        </div>
      </div>
      <div className="information-container">
        <div className="information">
          <div className="distribution">
            <span className="heading">BEER INSIDERS — ДИСТРИБУЦИЯ В ОДИН КЛИК</span>
            <span className="content">
              Узнавайте первыми про актуальные цены и остатки. Скачивайте приложение,
              которое делает торговлю простой и удобной.{' '}
            </span>
          </div>
          <div className="useful-links">
            <span className="heading">Полезные ссылки</span>
            <span className="content">
              Что нужно, чтобы начать работать с нами Посмотреть портфолио брендов Адреса
              и контакты для связи Поставщикам и вакансии
            </span>
          </div>
        </div>
        <footer>
          <span>BEER INSIDERS 2018 → 2022</span>
          <div className="links-block">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={github} alt="github" />
            <img src={nba} alt="nba" />
          </div>
        </footer>
      </div>
    </div>
  );
};
