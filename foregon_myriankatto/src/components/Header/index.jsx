import React from 'react';

import logo from '../../assets/images/logo.svg';
import './styles.css';

function Header() {
  return (
    <div className="header">
      <img className="header__image" src={logo} alt="Foregon" />
      {/* <select>
        <option value="credito">
          <h1>Cartões de crédito</h1> 
        </option>
        <option value="contas">
          <h1>Contas digitais</h1>
         
        </option>
        <option value="pagamentos">
          <h1>Máquinas de pagamento</h1>
        
        </option>
        <option value="emprestimo">
          <h1>Empréstimos</h1>
        </option>
      </select> */}

      <button className="header__button">DESCUBRA SEU SCORE GRÁTIS</button>
    </div>
  );
}

export default Header;
