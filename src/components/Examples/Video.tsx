import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

import * as S from './styles';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { getThumbnailUrl } from '../../utils/youtube';

const youtubeOpts  = {
  playerVars: {
    autoplay: 0,
    controls: 1,
    loop: 1,
    showinfo: 0,
  },
};

export interface VideoProps {
  /**
   * Kind of project (Musical, Event, Wedding, etc)
   */
  kind: string;
  /**
   * Youtube embed ID
   */
  youtubeId: string;
  /**
   * Description of what this project is about
   */
  description: string;
  /**
   * Currently selected youtube ID
   */
  selectedId?: string;
  /**
   * Handler for making self visible
   */
  select?: React.Dispatch<React.SetStateAction<string>>;
}

const Video = ({
  kind,
  youtubeId,
  description,
  selectedId,
  select = () => {},
}: VideoProps) => {
  const videoRef = useRef<any>(null);
  const show = youtubeId === selectedId;

  useEffect(() => {
    // if (!show && videoRef.current !== undefined) {
      videoRef.current?.pauseVideo();
    // }
  }, [show]);

  const handler = () => {
    select(youtubeId);
    if (videoRef.current !== undefined) {
      videoRef.current.playVideo();
    }
  };

  const onReady = (e: { target: any }) => {
    videoRef.current = e.target;
  };

  return (
    <S.VideoContainer
      onClick={handler}
      onKeyPress={handler}
      tabIndex={0}
      role="button"
    >
      <S.VideoInnerContainer>
        <S.YoutubeVideo
          as={YouTube}
          opts={youtubeOpts}
          onReady={onReady}
          videoId={youtubeId}
          $show={show}
        />
        <S.Thumbnail as="img" src={getThumbnailUrl(youtubeId)} />
        <S.Overlay>
          <S.KindText>{kind}</S.KindText>
          <S.PlayIcon icon={faPlay} />
          <S.DescriptionText>{description}</S.DescriptionText>
        </S.Overlay>
      </S.VideoInnerContainer>
    </S.VideoContainer>
  );
};

export default Video;
