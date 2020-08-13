import React from 'react';

import './styles.scss';

function NoAnnuityCard() {
  return (
    <div className="annuity">
      <div className="annuity__container">
        <div className="annuity__card">
          <h1>Cartão sem Anuidade</h1>
          <p>Inúmeras vantagens, facilidades e você pode ficar livre de anuidade.</p>
        </div>
        <div className="annuity__footer">
          <span>Santander</span>
          <button>Abrir</button>
        </div>
      </div>
    </div>
  );
}

export default NoAnnuityCard;
