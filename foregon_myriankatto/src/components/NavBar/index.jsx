import React from 'react';
import './styles.css';
function index() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">Cartõs para negativados</li>
        <li className="navbar__item">Cartões sem anuidade</li>
        <li className="navbar__item">Cartões com milhas</li>
        <li className="navbar__item">Cartões para estudantes</li>
        <li className="navbar__item">Cartões com mais benefícios</li>
      </ul>
    </div>
  );
}

export default index;
