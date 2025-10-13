import React from 'react';
import { Container, Video } from './styles';

const VideoBackground = () => {
  return (
    <Container role="img">
      <Video autoPlay muted loop>
        <source src="/assets/cover-desktop.mp4" type="video/mp4" />
      </Video>
    </Container>
  );
};

export default VideoBackground;
