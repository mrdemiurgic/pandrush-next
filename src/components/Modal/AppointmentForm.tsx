import React from 'react';
import Modal from './';
import { useModal } from '../../contexts/Modal';

const AppointmentForm = () => {
  const { show, setShow } = useModal();

  return (
    <Modal show={show}>
      <h1>heyyyy</h1>
    </Modal>
  );
};

export default AppointmentForm;
