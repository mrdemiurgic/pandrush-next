import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

import navItems from '../../content/nav.json';

const height = spacing.xl + navItems.length * 50;

export const Container = styled.div`
  position: fixed;
  z-index: 100000000000000;
  top: -${height}px;
  height: ${height}px;
  background: ${colors.babyBlue}ee;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const logoHeight = 50;

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: ${spacing.med}px;
  z-index: 100;
  margin-top: -${logoHeight / 2}px;
  height: ${logoHeight}px;
  width: auto;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  height: ${spacing.xl}px;
  width: 100%;
  position: relative;
  align-items: center;
`;

export const NavContainer = styled.div`
  flex: 1;

  align-self: center;
`;

export const HamburgerIcon = styled(FontAwesomeIcon)`
  font-size: 2em;
  color: ${colors.richBlack};
  margin-right: 10px;
  box-sizing: border-box;
  background: blue;
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  height: ${spacing.xl}px;
`;
