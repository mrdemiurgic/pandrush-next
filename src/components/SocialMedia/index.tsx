import React from 'react';

import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

import socialMedia from '../../content/socialMedia.json';

import { Container, Icon, IconContainer, Link } from './styles';

interface Props {
  includeEmail?: boolean;
}

type IconDeclaration = {
  [key: string]: IconDefinition;
};

const icon: IconDeclaration = {
  youtube: faYoutube,
  email: faEnvelope,
  facebook: faFacebook,
};

const SocialMedia = ({ includeEmail = true }: Props) => {
  return (
    <Container>
      {socialMedia
        .filter(({ type }) => (includeEmail ? true : type !== 'email'))
        .map(({ type, url, color, hoverColor }) => (
          <Link
            key={url}
            href={url}
            target="_blank"
            rel="noreferrer"
            $color={color}
            $hoverColor={hoverColor}
          >
            <IconContainer>
              <Icon icon={icon[type]} />
            </IconContainer>
          </Link>
        ))}
    </Container>
  );
};

export default SocialMedia;
