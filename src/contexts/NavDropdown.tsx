'use client';

import React, { useContext, useState } from 'react';

interface NavDropdown {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDropdownContext = React.createContext<NavDropdown | undefined>(
  undefined,
);

export const useNavDropdown = () => {
  const val = useContext(NavDropdownContext);

  if (val === undefined) {
    throw new Error(
      `useNavDropdown must be used within the NavDropdown Provider`,
    );
  }

  return val;
};

interface Props {
  children: React.ReactNode;
}

const NavDropdownProvider = ({ children }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const value = { show, setShow };

  return (
    <NavDropdownContext.Provider value={value}>
      {children}
    </NavDropdownContext.Provider>
  );
};

export default NavDropdownProvider;
