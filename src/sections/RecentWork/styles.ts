import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  background: ${colors.sonicSilver4};
  padding: 50px 0;

  &:before {
    display: block;
    content: '';
    margin-top: -80px;
    height: 80px;
  }
`;

export const InnerContainer = styled.div`
  margin: auto;
  width: 1200px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Banner = styled.div`
  font-family: Oswald;
  font-size: 3em;
  background: red;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 200;
  line-height: 1;
`;

export const WorksContainer = styled.div``;

export const SeeMoreContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const SeeMore = styled.a`
  display: inline-block;
  padding: 10px 50px;
  background: ${colors.babyBlue};
  border-radius: 10px;
  font-family: Oswald;
  font-weight: 300;
  font-size: 1.5em;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s background;
  color: ${colors.richBlack};
  &:hover {
    background: ${colors.babyBlue2};
  }
`;

export const YoutubeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 1.5em;
  display: inline-block;
  vertical-align: text-top;
`;
