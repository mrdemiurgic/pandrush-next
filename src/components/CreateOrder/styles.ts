import styled from 'styled-components';

import colors from '../../styles/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = styled.a`
  background: ${colors.babyBlue};
  color: ${colors.richBlack};
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.3em;
  padding: 10px 30px;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  box-shadow: 0 0 10px ${colors.richBlack};
  border: 0;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.2s background;
  &:hover {
    background: ${colors.babyBlue2};
  }
  &:active {
    background: ${colors.babyBlue3};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`;
