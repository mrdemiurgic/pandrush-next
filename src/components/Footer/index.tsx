import React from 'react';

import { Container } from './styles';

const year = new Date().getFullYear();

const Footer = () => {
  return <Container>Pandrush © {year}</Container>;
};

export default Footer;
