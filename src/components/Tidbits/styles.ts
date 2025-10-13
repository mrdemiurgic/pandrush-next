import styled from "styled-components";

import colors from "../../styles/colors";
import spacing from "../../styles/spacing";

export const Container = styled.div`
  display: inline-block;
  text-align: left;
  /* display: flex;
  flex-flow: column;
  margin: auto;
  background: pink; */
`;

export const Banner = styled.div`
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  color: ${colors.babyPowder};
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

export const BitContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  height: 140px;
  @media screen and (max-width: 500px) {
    flex-flow: column;
    align-items: flex-start;

    height: auto;
  }
`;

export const BitText = styled.div`
  flex: 1;
  padding: 0 ${spacing.med}px 0 0;

  @media screen and (max-width: 500px) {
    padding: 0 ${spacing.lrg}px;
  }
`;

export const BitPrimaryText = styled.div`
  font-size: 2em;
  font-weight: 100;
  color: ${colors.babyPowder};
  @media screen and (max-width: 500px) {
    font-size: 1.3em;
    font-weight: 200;
  }
`;

export const BitSecondaryText = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  margin-top: ${spacing.sm}px;
  color: ${colors.babyPowder};
  @media screen and (max-width: 500px) {
    margin-top: ${spacing.xs}px;
    font-size: 0.7em;
  }
`;

export const BitIcon = styled.div`
  width: 150px;
  fill: ${colors.babyBlue4};
  color: ${colors.babyBlue4};
  text-align: center;
  font-size: 5em;
  padding: ${spacing.med}px;
  @media screen and (max-width: 500px) {
    align-self: center;
    padding: ${spacing.lrg}px 0 ${spacing.xs}px 0;
  }
`;
