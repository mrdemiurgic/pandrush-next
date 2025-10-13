import styled from 'styled-components';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  background: ${colors.richBlack};
  color: ${colors.babyPowder};
  padding: 50px 0;
  font-family: Montserrat;

  &:before {
    display: block;
    content: '';
    position: relative;
    margin-top: -80px;
    height: 80px;
  }
`;

export const InnerContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 20px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const CenterContainer = styled.div`
  /* margin-left: 33.3333%; */
  text-align: center;
`;

export const SelfieContainer = styled.div`
  height: 400px;
  width: 400px;
  margin: auto;

  @media screen and (max-width: 500px) {
    margin: ${spacing.lrg}px;
    height: auto;
    width: auto;
  }
`;

export const NameContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 0.8em;
  }
`;

export const Name = styled.div`
  font-family: Oswald;
  font-size: 3.5em;
  @media screen and (max-width: 600px) {
    font-size: 3em;
  }
  @media screen and (max-width: 400px) {
    font-size: 2em;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: ${spacing.sm}px;
  display: inline-block;
  color: ${colors.babyBlue4};
  @media screen and (max-width: 400px) {
    margin-right: ${spacing.xs}px;
  }
`;

export const Position = styled.div`
  color: ${colors.babyBlue2};
  text-transform: uppercase;
  padding-top: 5px;
  font-size: 1.2em;
  font-weight: 200;
  @media screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;

export const Slash = styled.span`
  padding: 0 5px;
  &::after {
    content: '/';
  }
`;

export const Who = styled.div`
  /* padding: 20px 30px 0 0; */
  line-height: 1.33;
  font-size: 0.9em;
`;

export const HowBanner = styled.div`
  font-family: Oswald;
  font-size: 2em;
  font-weight: 400;
  /* padding: 20px 30px 0 0; */
`;

export const How = styled.div`
  /* padding: 20px 30px 30px 0; */
  line-height: 1.33;
`;

export const ContentContainer = styled.div`
  text-align: center;
`;

export const Column = styled.div`
  width: 50%;
  display: inline-block;
  padding: 20px;
  vertical-align: top;
  border-right: 1px solid ${colors.babyBlue3};
  &:last-child {
    border-right: 0;
  }
`;
