import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  background: ${colors.sonicSilver1};
  color: ${colors.richBlack};
  padding: 50px 0;

  &:before {
    display: block;
    content: '';
    margin-top: -80px;
    height: 80px;
  }
`;

export const InnerContainer = styled.div`
  width: 1200px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Banner = styled.div`
  font-family: Oswald;
  font-size: 3em;
  padding-top: 20px;
`;

export const PackagesContainer = styled.div``;

export const PackageContainer = styled.div`
  display: inline-block;
  width: 33.33333%;
  padding: 10px;
`;

export const QuoteInfo = styled.div`
  display: inline-block;
  width: 50%;
  line-height: 1.2;
  padding: 10px;
  margin: 10px 0;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Mileage = styled.div`
  display: block;
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 10px;
`;

export const WhatWillHappen = styled.div`
  display: block;
  font-weight: 300;
  font-size: 0.9em;
`;

export const IncludedFeatures = styled.div`
  display: inline-block;
  vertical-align: top;
  border-left: 1px solid ${colors.babyPowder};
  padding: 10px;
  margin: 10px 0;
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const IncludedFeaturesBanner = styled.div`
  font-family: Oswald;
  font-size: 1.6em;
  margin-bottom: 15px;
`;

export const Feature = styled.div`
  margin-bottom: 7.5px;
`;

export const FeatureIcon = styled(FontAwesomeIcon)`
  margin-right: 7.5px;
  color: ${colors.yellowGreen1};
`;
