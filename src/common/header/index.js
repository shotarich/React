import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav
} from './style';

class Header extends Component {
  render() {
    return (
      <header>
        <HeaderWrapper>
          <Logo />
          <Nav />
        </HeaderWrapper>
      </header>
    )
  }
}

export default Header;
