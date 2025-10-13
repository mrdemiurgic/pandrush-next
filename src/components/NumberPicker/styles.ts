import styled from 'styled-components';

import colors from '../../styles/colors';

interface HoursProps {
  $currentValue: number;
}

export const Container = styled.div<HoursProps>`
  border: 1px solid ${colors.babyBlue};
  cursor: pointer;
  display: inline-block;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s background;
  background: ${({ $currentValue }) =>
    $currentValue === 0 ? 'none' : colors.babyBlue2 + 'dd'};
`;

export const Button = styled.button`
  display: inline-block;
  border: 0;
  cursor: pointer;

  outline: none;
  padding: 5px;
  background: ${colors.babyBlue3};
  transition: 0.3s background;
  &:hover {
    background: ${colors.babyBlue4};
  }
  &:active {
    background: ${colors.babyBlue3};
  }
`;

export const DecrementButton = styled(Button)``;

export const Hours = styled.div<HoursProps>`
  display: inline-block;
  width: 30px;
  transition: 0.3s color;
  text-align: center;
  font-weight: ${({ $currentValue }) => ($currentValue === 0 ? 300 : 500)};
  color: ${({ $currentValue }) =>
    $currentValue === 0 ? colors.sonicSilver2 : colors.richBlack};
`;

export const IncrementButton = styled(Button)``;
