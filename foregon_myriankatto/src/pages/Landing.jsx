import React from 'react';


import NavBar from '../components/NavBar';
import Menu from '../components/Menu';
import CreditCardInfo from '../components/CreditCardInfo';
import './styles.scss';

const Landing = () => {
  return (
    <div className="landing">
      <NavBar />
      <Menu />
      <CreditCardInfo />
    </div>
  );
};

export default Landing;
