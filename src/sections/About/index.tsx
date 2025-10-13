import React from 'react';

import * as S from './styles';
import Selfie from '../../components/Selfie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TexasIcon from '../../components/TexasIcon';

import Tidbits from '../../components/Tidbits';

import { faFilm, faImages, faPlane } from '@fortawesome/free-solid-svg-icons';

import about from '../../content/about.json';

// import texas from '../../assets/texas.svg';

const tidbits = [
  {
    text: 'based in Dallas - Fort Worth, Texas',
    subtext: "The heat doesn't bother me.",
    icon: <TexasIcon />,
  },
  {
    text: 'flexible with time and location',
    subtext: "Hawaii, 2am in the morning? I'll be there!",
    icon: <FontAwesomeIcon icon={faPlane} />,
  },
  {
    text: 'skilled in various video genres',
    subtext: 'Weddings, trade shows, documentaries, movies, you name it!',
    icon: <FontAwesomeIcon icon={faImages} />,
  },
];

const About = () => {
  return (
    <S.Container id="about">
      <S.InnerContainer>
        <S.SelfieContainer>
          <Selfie />
        </S.SelfieContainer>
        <S.CenterContainer>
          <S.NameContainer>
            <S.Name>Pavlo Andrushchak</S.Name>
            <S.Position>
              <S.Icon icon={faFilm} />
              Filmmaker
              <S.Slash />
              Videographer
            </S.Position>
          </S.NameContainer>
        </S.CenterContainer>
        <S.ContentContainer>
          <Tidbits>
            {tidbits.map(({ text, subtext, icon }) => (
              <Tidbits.Bit
                key={text}
                text={text}
                subtext={subtext}
                icon={icon}
              />
            ))}
          </Tidbits>
        </S.ContentContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default About;
