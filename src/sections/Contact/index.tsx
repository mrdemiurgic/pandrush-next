import React from 'react';

import SocialMedia from '../../components/SocialMedia';

import ContactForm from '../../components/ContactForm';

import {
  faEnvelope,
  faMobileAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

import { ContactPointProps } from './types';

const contactPoints = [
  {
    icon: faEnvelope,
    label: 'pandrushllc@gmail.com',
    url: 'mailto:pandrushllc@gmail.com',
  },
  {
    icon: faMobileAlt,
    label: 'Text: (346) 276-5915',
    url: 'sms://+13462765915',
  },
  {
    icon: faPhone,
    label: 'VP/VRS: (281) 241-1689',
    url: 'tel://+2812411689',
  },
];

const ContactPoint = ({ icon, url, label }: ContactPointProps) => {
  return (
    <S.ContactPoint>
      <S.ContactIconContainer>
        <S.ContactIcon icon={icon} />
      </S.ContactIconContainer>
      <S.ContactText>
        <S.ContactLink href={url}>{label}</S.ContactLink>
      </S.ContactText>
    </S.ContactPoint>
  );
};

const Contact = () => {
  return (
    <S.Container id="contact">
      <S.InnerContainer>
        <S.Column>
          <S.ContactPoints>
            {contactPoints.map(({ icon, label, url }) => (
              <ContactPoint key={url} icon={icon} label={label} url={url} />
            ))}
          </S.ContactPoints>

          <SocialMedia includeEmail={false} />
        </S.Column>
        <S.Column>
          <S.ContactFormContainer>
            <ContactForm />
          </S.ContactFormContainer>
        </S.Column>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Contact;
