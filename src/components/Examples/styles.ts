import styled from 'styled-components';
import colors from '../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const VideoContainer = styled.div`
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const VideoInnerContainer = styled.div`
  position: relative;
  border: 1px solid ${colors.sonicSilver3}22;
  box-shadow: 0 2px 4px ${colors.richBlack};
  border-radius: 5px;
`;
type VideoProps = {
  $show: boolean;
}

export const Thumbnail = styled.div`
  margin: 0;
  border-radius: 5px;
  display: block;
  width: 100%;
  height: auto;
  cursor: pointer;
  box-sizing: border-box;
`;

export const YoutubeVideo = styled(Thumbnail)<VideoProps>`
  position: absolute;
  z-index: 3;
  border: 0;
  height: 100%;
  top: 0px;
  left: 0px;
  transition: 0.3s opacity;
  pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
`;

export const Overlay = styled(Thumbnail)`
  position: absolute;
  z-index: 2;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: ${colors.richBlack}88;
  &:hover {
    & > svg {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }
`;

export const KindText = styled.div`
  position: absolute;
  color: ${colors.babyPowder};
  left: 30px;
  top: 30px;
  font-family: Oswald;
  text-transform: uppercase;
  font-size: 2.5em;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1;
  @media screen and (max-width: 1000px) {
    left: 20px;
    top: 20px;
    font-size: 2em;
  }
  @media screen and (max-width: 975px) {
    left: 10px;
    top: 10px;
    font-size: 1.5em;
  }
`;

export const DescriptionText = styled.div`
  font-family: Montserrat;
  position: absolute;
  color: ${colors.babyPowder};
  text-align: center;
  font-weight: 300;
  width: 100%;
  bottom: 30px;
  font-size: 1em;
  @media screen and (max-width: 1000px) {
    bottom: 20px;
    font-size: 0.9em;
  }
  @media screen and (max-width: 975px) {
    bottom: 20px;
    font-size: 0.8em;
  }
`;

export const PlayIcon = styled(FontAwesomeIcon)`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  color: ${colors.babyPowder};
  font-size: 3em;
  transition: 0.3s transform;
  transform: translate(-50%, -50%) scale(1);
`;
