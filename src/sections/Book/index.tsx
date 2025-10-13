import React from 'react';

import * as S from './styles';

import { Option } from '../../components/Pricing/types';

import offerings from '../../content/offerings.json';

import { faCar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Pricing from '../../components/Pricing';

const { packages, featuresInAll } = offerings;
const Book = () => {
  return (
    <S.Container id="book">
      <S.InnerContainer>
        <Pricing>
          {packages.map(
            ({
              name,
              description,
              options,
              features,
              basePrice,
              basePriceLabel,
            }) => (
              <Pricing.Package
                key={name}
                name={name}
                description={description}
                options={options as Option[]}
                features={features}
                basePrice={basePrice}
                basePriceLabel={basePriceLabel}
              />
            ),
          )}
        </Pricing>
        <S.QuoteInfo>
          <S.Mileage>
            <S.FeatureIcon icon={faCar} />
            Mileage will also apply if the project is outside of the DFW
            metroplex (Dallas - Fort Worth, TX).
          </S.Mileage>
          <S.WhatWillHappen>
            Given quotes are estimates, subject to adjustments as necessary to
            complete your project. You will be invoiced upon completion of
            project to your satisfaction.
          </S.WhatWillHappen>
        </S.QuoteInfo>
        <S.IncludedFeatures>
          <S.IncludedFeaturesBanner>
            Included in all packages:
          </S.IncludedFeaturesBanner>
          <div>
            {featuresInAll.map((feature) => (
              <S.Feature key={feature}>
                <S.FeatureIcon icon={faCheckCircle} />
                {feature}
              </S.Feature>
            ))}
          </div>
        </S.IncludedFeatures>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Book;
