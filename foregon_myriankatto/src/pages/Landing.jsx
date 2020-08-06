import React, { useState, useEffect } from 'react';
import api from '../services/api';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CreditCardInfo from '../components/CreditCardInfo';

function Landing() {
  const [name, setName] = useState(0);

  useEffect(() => {
    api.get('/').then((res) => {
      const { name } = res.data;
      setName(name);
    });
  }, []);
  return (
    <div>
      <Header />
      <NavBar />
     <CreditCardInfo />
    </div>
  );
}

export default Landing;
