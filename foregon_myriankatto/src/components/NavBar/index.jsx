import React, {  Component } from 'react';

import logo from '../../assets/images/logo.svg';

import DropdownMenu from './DropdownMenu';

import { HamburgerCollapse } from 'react-animated-burgers';

import './styles.scss';
import MobileMenu from './MobileMenu';

class NavBar extends Component {
  state = {
    isActive: false,
  };

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__right">
            <div className="burger-menu">
              <HamburgerCollapse
                isActive={this.state.isActive}
                toggleButton={this.toggleButton}
                barColor="white"
                buttonWidth={30}
              />
            </div>
           
            <img className="navbar__image" src={logo} alt="Foregon" />

            <DropdownMenu />
          </div>
       {this.state.isActive ? <MobileMenu /> : ''}

          <button className="navbar__button">Descubra seu score grátis</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
