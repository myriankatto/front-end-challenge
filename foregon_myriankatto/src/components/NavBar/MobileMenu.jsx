import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__button">
        <button className="navbar__button__mobile">Descubra seu score grátis</button>
      </div>
      <div className="mobile-menu__list">
        <ul>
          <Link to="">
            <li aria-haspopup="true"> 
              <h1 style={{ color: '#1e88e5' }}>Cartão de Crédito</h1>
              <p>Acumule milhas, anuidade grátis...</p>
            </li>
          </Link>
          <Link to="">
            <li aria-haspopup="true"> 
              <h1 style={{ color: '#f4771e' }}>Contas Digitais</h1>
              <p>Mensalidade grátis, saques grátis...</p>
            </li>
          </Link>
          <Link to="">
            <li aria-haspopup="true">
              <h1 style={{ color: '#7cb342' }}>Máquinas de pagamento</h1>
              <p>Mensalidade grátis, saques grátis...</p>
            </li >
          </Link>
          <Link to="">
            <li aria-haspopup="true">
              <h1 style={{ color: '#00acc1' }}>Empréstimos</h1>
              <p>Pessoa, para negativados...</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
