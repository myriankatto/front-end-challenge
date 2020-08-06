import React, { useState, useEffect } from 'react';
import api from '../../services/api';

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
    <h1>Cartão de Crédito</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default Landing;
