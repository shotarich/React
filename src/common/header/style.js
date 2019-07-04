import styled from 'styled-components';
import logoPic from '../../static/imgs/header/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.nav`
  width: 946px;
  height: 100%;
  margin: 0 auto;
`;

export const ItemLi = styled.li`
  padding: 0 16px;
  line-height: 58px;
  color: #333;
  cursor: pointer;
  &.home{
    color: #ea6f5a;
  }
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
`;

export const Search = styled.input.attrs({
  placeholder: '搜索'
})`
  display: inline-block;
  padding: 0 40px 0 20px
  width: 160px;
  height: 38px;
  line-height: 38px;
  border: none;
  outline: none;
	box-sizing: border-box;
  border-radius: 40px;
  background: #eee;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 8px 6px 0 15px;
  width: 80px;
  height: 38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  color: #ea6f5a;

  &.write{
    color: #fff;
    background: #ec6149;
  }
`
