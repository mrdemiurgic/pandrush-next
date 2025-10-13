import styled from "styled-components";
import spacing from "../../styles/spacing";

export const Container = styled.div`
  display: flex;
  text-align: center;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-flow: column;
  }
`;

type ItemProps = {
  $textColor: string;
  $textHoverColor: string;
  $separatorColor: string;
};

export const Item = styled.a<ItemProps>`
  /* display: inline-block; */
  margin: 0;
  outline: 0;
  font-family: Oswald;
  font-weight: 400;
  text-transform: uppercase;
  border: 0;
  padding: ${spacing.sm}px ${spacing.lrg}px;
  cursor: pointer;
  min-width: 165px;
  text-transform: uppercase;
  color: ${({ $textColor }) => $textColor};
  text-decoration: none;
  transition: 0.2s color;
  border-right: 1px solid ${({ $separatorColor }) => $separatorColor};

  text-align: center;
  &:hover {
    color: ${({ $textHoverColor }) => $textHoverColor};
  }
  &:active {
    color: ${({ $textColor }) => $textColor};
  }
  &:last-child {
    border-right: 0;
    border-bottom: 0;
  }

  @media screen and (max-width: 750px) {
    min-width: 145px;
    font-size: 0.8em;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 1em;
    padding: ${spacing.med}px ${spacing.sm}px;
    border-right: 0;

    border-bottom: 1px solid ${({ $separatorColor }) => $separatorColor};
  }
`;
