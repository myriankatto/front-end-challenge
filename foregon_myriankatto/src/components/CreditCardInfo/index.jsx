import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import api from '../../services/api';

import pathImg from '../../assets/images/path.svg';
import starImg from '../../assets/images/inteira.svg';
import lockerImg from '../../assets/images/locker.svg';
import visaImg from '../../assets/images/visa.svg';
import InfoIcon from '../../assets/images/info.svg';
import AppIcon from '../../assets/images/app.svg';
import PlaneIcon from '../../assets/images/milhas.svg';
import Person1Icon from '../../assets/images/person1.jpg';
import Person2Icon from '../../assets/images/person2.jpg';
import Person3Icon from '../../assets/images/person3.jpg';
import ScoreIcon from '../../assets/images/3.svg';

import NoAnnuityCard from '../NoAnnuityCard';

import './styles.scss';

const CreditCardInfo = () => {
  const [data, setData] = useState({ data: {} });
  useEffect(() => {
    api.get('/').then((res) => {
      setData(res.data);
    });
  }, []);

  const cardTitle = data.name;

  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <Fade>
            <div className="card__container">
              <div className="name first">
                <div className="card__title">
                  <h1>{cardTitle && cardTitle.split(' ').slice(1, 4).join(' ')}</h1>
                  <img src={visaImg} alt={data.network && data.network.name} />
                </div>

                <div className="card__name">
                  <h2>
                    {cardTitle &&
                      cardTitle
                        .split(' ')
                        .slice(4, cardTitle.length - 1)
                        .join(' ')}
                  </h2>
                </div>

                <div className="card__rating">
                  {[...Array(data.rating && data.rating.average_score)].map((n, i) => (
                    <img key={i} src={starImg} alt="Rating" />
                  ))}

                  <span>{data.rating && data.rating.total_reviews} avaliações</span>
                </div>
              </div>

              <div className="card__image second">
                <img src={data.imageUrl} alt={data.name} />
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="card__info">
              <div className="card__info__container">
                <img style={{ marginTop: '-0.2em' }} src={InfoIcon} alt="Info" />
                <div>
                  <h4>Anuidade</h4>
                  <span>
                    {data.firstAnnuity && data.firstAnnuity.installments} x{' '}
                    {data.firstAnnuity && data.firstAnnuity.installmentValueFormatted}
                  </span>
                </div>
              </div>
              <div className="card__info__container">
                <img style={{ marginTop: '-0.2em' }} src={InfoIcon} alt="Info" />
                <div>
                  <h4>Renda Mínima</h4>
                  <span>R$ {data.valueOfMinimalIncomeRequired},00</span>
                </div>
              </div>
              <div className="card__info__container no-mobile">
                <img style={{ width: '1.5em' }} src={AppIcon} alt="Info" />
                <div>
                  <h4>Aplicativo</h4>
                  <span>para controlar seus gastos</span>
                </div>
              </div>
              <div className="card__info__container no-mobile">
                <img style={{ width: '1.5em' }} src={PlaneIcon} alt="Info" />
                <div>
                  <h4>Milhas aéreas</h4>
                  <span>pelo programa Smiles</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Fade>
          <div className="score">
            <div className="score__tip no-mobile">
              <img src={pathImg} alt="arrow" />
              <p>Economize tempo e descubra suas chances de aprovação.</p>
            </div>

            <div className="score__button">
              <Link to="">
                <button>
                  <img style={{ width: '3em', marginRight: '1em' }} src={lockerImg} alt="Locker" />
                  <p>Descubra suas chances</p>
                </button>
              </Link>
            </div>

            <div className="score__person">
              <div className="score__person__avatar">
                <img src={Person1Icon} alt="Person" />
                <img src={Person2Icon} alt="Person" />
                <img src={Person3Icon} alt="Person" />
                <span>+ 10 mil</span>
              </div>
              <p>Pessoas descobriram se podem ter este cartão antes de pedir</p>
            </div>

            <div className="score__card">
              <div>
                <img src={ScoreIcon} alt="Score" />
              </div>
              <div>
                <h1>Score Necessário</h1>
                <h2>
                  {data.creditLimit}, <span>descubra seu score</span>
                </h2>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Fade>
        <NoAnnuityCard />
      </Fade>
    </Fragment>
  );
};

export default CreditCardInfo;
