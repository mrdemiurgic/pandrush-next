import React from 'react';
import { Button, Icon } from './styles';

import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const CreateOrder = () => {
  return (
    <Button href="#book">
      <Icon icon={faCalendarAlt} />
      Book Now
    </Button>
  );
};

export default CreateOrder;
