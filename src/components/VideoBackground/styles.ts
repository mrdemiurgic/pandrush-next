import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 100%;
  overflow: hidden;
`;

export const Video = styled.video`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  @media screen and (min-aspect-ratio: 21/9) {
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
  }
  @media screen and (max-aspect-ratio: 21/9) {
    left: 50%;
    transform: translate(-50%, 0);
    height: 100%;
  }
`;
