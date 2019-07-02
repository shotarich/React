import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  ItemLi,
  Search,
  Addition,
  Button
} from './style';

class Header extends Component {
  render() {
    return (
      <header>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <ul>
              <ItemLi className="left home">首页</ItemLi>
              <ItemLi className="left">下载App</ItemLi>
              <ItemLi className="left search">
                <div>
                  <Search></Search>
                </div>
              </ItemLi>
              <ItemLi className="right">登录</ItemLi>
              <ItemLi className="right">Aa</ItemLi>
            </ul>
          </Nav>
          <Addition>
            <Button>注册</Button>
            <Button className="write">写文章</Button>
          </Addition>
        </HeaderWrapper>
      </header>
    )
  }
}

export default Header;
