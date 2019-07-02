import styled from 'styled-components';
import logoPic from '../../static/logo.png';

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
  width: 960px;
  height: 100%;
  margin: 0 auto;
  background: green;
`;
