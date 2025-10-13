'use client';

import React, { useContext, useState, useMemo } from 'react';

interface Value {
  show: boolean;
  setShow: (val: boolean) => void;
}

const initialValue = false;

const ModalContext = React.createContext<Value | undefined>(undefined);

export const useModal = () => {
  const val = useContext(ModalContext);

  if (val === undefined) {
    throw new Error(`useModal must be used within the Modal Provider`);
  }

  return val;
};

interface Props {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: Props) => {
  const [show, setShow] = useState<boolean>(initialValue);

  const value = useMemo(
    () => ({
      show,
      setShow,
    }),
    [show, setShow],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
