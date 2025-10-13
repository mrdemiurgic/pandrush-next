import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { Container, DecrementButton, Hours, IncrementButton } from './styles';

export interface Props {
  /**
   * The initial value
   */
  initialValue: number;
  /**
   * Maximum number allowed in range
   */
  max: number;
  /**
   * Minimum number allowed in range
   */
  min: number;
  /**
   * Size of incremental value. Defaults to 1
   */
  step?: number;
  /**
   * Called after incrementing or decrementing. Will be called even if value doesn't change.
   */
  onChange: (newValue: number) => void;
}

const NumberPicker = ({
  initialValue,
  max,
  min,
  step = 1,
  onChange,
}: Props) => {
  const [value, setValue] = useState<number>(initialValue);

  const onDecrement = () => {
    const newValue = Math.max(value - step, min);
    setValue(newValue);
    onChange(newValue);
  };

  const onIncrement = () => {
    const newValue = Math.min(value + step, max);
    setValue(newValue);
    onChange(newValue);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 38:
      case 39:
        onIncrement();
        break;
      case 40:
      case 37:
        onDecrement();
        break;
    }
  };

  return (
    <Container role="group" $currentValue={value}>
      <DecrementButton
        aria-label="decrement"
        tabIndex={-1}
        onClick={onDecrement}
      >
        <FontAwesomeIcon icon={faMinus} />
      </DecrementButton>
      <Hours
        role="spinbutton"
        aria-label="hours"
        tabIndex={0}
        $currentValue={value}
        onKeyDown={onKeyDown}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {value}
      </Hours>
      <IncrementButton
        aria-label="increment"
        tabIndex={-1}
        onClick={onIncrement}
      >
        <FontAwesomeIcon icon={faPlus} />
      </IncrementButton>
    </Container>
  );
};

export default NumberPicker;
