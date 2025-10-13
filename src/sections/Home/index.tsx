import React from 'react';
import Nav from '../../components/Nav';
import VideoBackground from '../../components/VideoBackground';
import CreateOrder from '../../components/CreateOrder';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Content,
  PandrushText,
  FilmmakerText,
  FadeBox,
  Slash,
  FadeBackground,
  CreateOrderContainer,
  ScrollingIndicator,
} from './styles';

import colors from '../../styles/colors';

const Home = () => {
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  return (
    <Container height={windowHeight} id="home">
      <VideoBackground />
      <FadeBackground height={windowHeight}>
        <Content>
          <PandrushText>Pandrush</PandrushText>
          <FilmmakerText>
            Filmmaker<Slash>/</Slash>Videographer
          </FilmmakerText>
          <FadeBox>
            <Nav
              textColor={colors.babyPowder}
              textHoverColor={colors.babyBlue}
              separatorColor={colors.babyBlue}
            />
          </FadeBox>
          <CreateOrderContainer>
            <CreateOrder />
          </CreateOrderContainer>
        </Content>

        <ScrollingIndicator icon={faArrowDown} />
      </FadeBackground>
    </Container>
  );
};

export default Home;
