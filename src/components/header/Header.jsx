import React from 'react';

import logotype from './../../assets/Logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header__logotype">
      <img src={logotype} alt="logotype avia-sales" />
    </header>
  );
};

export default Header;
