import React from 'react';

import facebook from 'assets/facebook.jpg';
import github from 'assets/github.jpg';
import instagram from 'assets/instagram.jpg';
import nba from 'assets/nba.jpg';
import twitter from 'assets/twitter.jpg';
import { ReturnComponentType } from 'common';

import './footer.scss';

export const Footer = (): ReturnComponentType => {
  return (
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
  );
};
