import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  background: ${colors.babyPowder};
  width: 100%;
  padding: 50px 0;
  color: ${colors.richBlack};
`;

export const InnerContainer = styled.div`
  margin: auto;
  width: 1200px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  flex: 1;
  padding: 10px;
  position: relative;
  border-left: 1px solid ${colors.richBlack};
  text-align: center;
  &:first-child {
    border-left: 0 solid ${colors.richBlack};
  }
  @media screen and (max-width: 700px) {
    flex-basis: 100%;
    border-left: 0;
  }
`;

export const ContactFormContainer = styled.div`
  text-align: left;
`;

export const Banner = styled.div`
  font-size: 3em;
  font-family: Oswald;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  padding-bottom: 20px;
`;

export const ContactPoints = styled.div`
  display: inline-block;
  text-align: left;
`;

export const ContactPoint = styled.div`
  margin-bottom: 10px;
`;

export const ContactLink = styled.a`
  color: ${colors.sonicSilver4};
  transition: 0.3s color;
  &:hover {
    color: ${colors.sonicSilver2};
  }
`;

export const ContactIconContainer = styled.div`
  background: ${colors.babyBlue};
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
  line-height: 50px;
  vertical-align: middle;
`;

export const ContactText = styled.div`
  display: inline-block;
  font-size: 1.2em;
  font-weight: 500;
  padding-left: 20px;
  vertical-align: middle;
  @media screen and (max-width: 720px) {
    font-size: 1em;
  }

  @media screen and (max-width: 340px) {
    font-size: 0.9em;
  }
`;
