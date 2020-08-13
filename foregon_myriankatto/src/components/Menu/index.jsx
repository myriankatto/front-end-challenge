import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
function Menu() {
  return (
    <div className="menu">
    <div className="menu__container">
      <ul className="menu__list">
        <Link to="">
          <li className="menu__item">Cartões sem anuidade</li>
        </Link>
        <Link to="">
          <li className="menu__item">Cartões com milhas</li>
        </Link>
        <Link to="">
          <li className="menu__item">Cartões para estudantes</li>
        </Link>
        <Link to="">
          <li className="menu__item">Cartões com mais benefícios</li>
        </Link>
        <Link to="">
          <li className="menu__item">Cartõs para negativados</li>
        </Link>
      </ul>
      </div>
    </div>
  );
}

export default Menu;
