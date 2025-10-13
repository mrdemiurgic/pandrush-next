import styled, { createGlobalStyle } from 'styled-components';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';

export const Form = styled.form`
  display: flex;
  flex-flow: nowrap column;
  justify-content: stretch;
  margin: ${spacing.med}px ${spacing.xs}px ${spacing.xs}px ${spacing.xs}px;
`;

export const TextInputContainer = styled.label`
  display: block;
  margin-bottom: ${spacing.sm}px;
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 0.8em;
  margin-bottom: ${spacing.xs}px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 0.9em;
  padding: ${spacing.xs}px ${spacing.sm}px;
  border-radius: ${spacing.xs}px;
  border: 1px solid ${colors.babyBlue3};
  background: #ffffff;
  color: ${colors.richBlack};
`;

export const DatePickerStyles = createGlobalStyle`

  .react-datepicker {
    font-family: Montserrat;
  }

  .react-datepicker__current-month {
    font-family: Oswald;
    font-weight: 500;
    text-transform: uppercase;

  }

  .react-datepicker__day--selected {
    background-color: ${colors.babyBlue3};
    transition: 0.3s background-color;
  }

  .react-datepicker__day--selected:hover {
    background-color: ${colors.babyBlue4};
  }

`;
