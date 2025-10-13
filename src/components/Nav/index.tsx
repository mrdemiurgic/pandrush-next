import React from 'react';

import navItems from '../../content/nav.json';

import { Container, Item } from './styles';

export interface Props {
  /**
   * Include a link for going back to top of page on index
   */
  includeHome?: boolean;
  /**
   * Color of text
   */
  textColor: string;
  /**
   * Color of text on hover
   */
  textHoverColor: string;
  /**
   * Color of separator lines
   */
  separatorColor: string;
}

const Nav = ({
  includeHome = false,
  textColor,
  textHoverColor,
  separatorColor,
}: Props) => {
  return (
    <Container>
      {includeHome && (
        <Item
          key="home"
          $textColor={textColor}
          $separatorColor={separatorColor}
          $textHoverColor={textHoverColor}
          href="#home"
        >
          Back to Top
        </Item>
      )}
      {navItems.map((nav) => (
        <Item
          key={nav.label}
          href={`#${nav.hash}`}
          $textColor={textColor}
          $textHoverColor={textHoverColor}
          $separatorColor={separatorColor}
        >
          {nav.label}
        </Item>
      ))}
    </Container>
  );
};

export default Nav;
