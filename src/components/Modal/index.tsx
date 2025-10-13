import React, { useEffect } from 'react';

import * as S from './styles';

interface Props {
  /**
   * Content of Modal
   */
  children: React.ReactNode;
  /**
   * Visibility of modal
   */
  show: boolean;
  /**
   * Function for hiding self
   */
  hide: () => void;
}

const Modal = ({ children, show, hide }: Props) => {
  useEffect(() => {
    if (show) {
      const escHandler = (event: KeyboardEvent): void => {
        if (event.keyCode === 27) {
          hide();
        }
      };
      document.addEventListener('keydown', escHandler);

      return (): void => {
        document.removeEventListener('keydown', escHandler);
      };
    }
    return undefined;
  }, [hide, show]);

  return (
    <S.Overlay
      $show={show}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          hide();
        }
      }}
    >
      <S.Body $show={show} />
      <S.Modal>{children}</S.Modal>
    </S.Overlay>
  );
};

export default Modal;
