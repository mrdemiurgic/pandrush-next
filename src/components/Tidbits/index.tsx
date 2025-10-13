import React from 'react';

import * as S from './styles';

interface Props {
  /**
   * children of Tidbits
   */
  children: React.ReactNode;
}

const Tidbits = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Banner>I am...</S.Banner>
      {children}
    </S.Container>
  );
};

interface BitProps {
  /**
   *
   */
  text: string;
  /**
   *
   */
  subtext: string;
  /**
   *
   */
  icon: React.ReactNode;
}

const Bit = ({ text, subtext, icon }: BitProps) => {
  return (
    <S.BitContainer>
      <S.BitIcon>{icon}</S.BitIcon>
      <S.BitText>
        <S.BitPrimaryText>{text}</S.BitPrimaryText>
        <S.BitSecondaryText>{subtext}</S.BitSecondaryText>
      </S.BitText>
    </S.BitContainer>
  );
};

Tidbits.Bit = Bit;
export default Tidbits;
