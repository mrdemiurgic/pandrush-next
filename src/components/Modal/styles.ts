import styled, { createGlobalStyle } from 'styled-components';

import colors from '../../styles/colors';

interface OverlayProps {
  $show: boolean;
}

export const Body = createGlobalStyle<OverlayProps>`
  html, body {
    overflow-y: ${({ $show }) => ($show ? 'hidden' : 'auto')};
  }
`;

export const Overlay = styled.div<OverlayProps>`
  background: ${colors.richBlack}77;
  position: fixed;
  z-index: 100000;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
  transition: 0.3s opacity;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  background: ${colors.babyPowder};
  color: ${colors.richBlack};
  padding: 10px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
`;
