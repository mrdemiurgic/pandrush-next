import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  height: number;
}

const downwards = keyframes`
from {
  transform: translate(-50%, 0px);
}

to {
  transform: translate(-50%, 25px);
}
`;

export const Container = styled.div<Props>`
  height: ${({ height }) => height}px;
  position: relative;
`;

export const FadeBackground = styled.div<Props>`
  width: 100%;
  height: ${({ height }) => height}px;
  position: absolute;
  z-index: 2;
  background: ${colors.richBlack}33;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const Text = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  color: ${colors.babyPowder};
  line-height: 1;
`;

export const PandrushText = styled(Text)`
  font-size: 5.5em;
  line-height: 1;
  font-weight: 900;
  font-family: 'Oswald';
  margin-bottom: 7px;

  @media only screen and (max-width: 600px) {
    font-size: 4em;
  }

  @media only screen and (min-width: 1350px) {
    font-size: 7em;
  }
`;

export const FilmmakerText = styled(Text)`
  font-size: 1.1em;
  margin-bottom: 30px;
  font-weight: 200;
  text-transform: uppercase;
  font-family: 'Montserrat';

  @media only screen and (max-width: 600px) {
    font-size: 0.9em;
  }
`;

export const FadeBox = styled.div`
  @media only screen and (max-height: 420px) {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 ${spacing.sm}px;
  }

  background: #00000044;
  border-radius: 10px;
  padding: ${spacing.sm}px;
  /* backdrop-filter: blur(10px); */
`;

export const Slash = styled.span`
  padding: 0 10px;
`;

export const CreateOrderContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  text-align: center;
`;

export const ScrollingIndicator = styled(FontAwesomeIcon)`
  position: absolute;
  color: ${colors.babyPowder};
  bottom: 50px;
  left: 50%;
  animation-name: ${downwards};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 0.2s;

  transform: translateX(-50%);
  font-size: 3em;
  z-index: 10;

  @media screen and (max-width: 350px) {
    font-size: 1.2em;
    bottom: 40px;
  }
`;

export const SocialMediaContainer = styled.div`
  /* background: ${colors.richBlack}66; */
  margin: auto;
  text-align: center;
`;
