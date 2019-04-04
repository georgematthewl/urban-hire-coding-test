import React from 'react';

import { HeaderContainer } from './style';
import logo from 'assets/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <header>
          <nav className="navbar navbar-expand-lg bg-light fixed-top navbar-light">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Customers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Partners</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Job Search</a>
                </li>
                <li className="nav-item vertical-line">
                  <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-success" type="submit">Try for Free</button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </HeaderContainer>
    );
  }
}


export default Header;
