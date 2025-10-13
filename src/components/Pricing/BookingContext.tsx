import * as React from 'react';

import { BookFormData, PricingProps } from './types';

const defaultValue: BookFormData = {
  date: new Date(),
  name: '',
  email: '',
  note: '',
};

type Action =
  | { type: 'setDate'; payload: Date }
  | { type: 'setName'; payload: string }
  | { type: 'setEmail'; payload: string }
  | { type: 'setNote'; payload: string }
  | { type: 'reset' };

type State = BookFormData;
type Dispatch = (action: Action) => void;

const BookingContext = React.createContext<
  | {
      state: State;
      dispatch: Dispatch;
    }
  | undefined
>(undefined);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setDate':
      return { ...state, date: action.payload };
    case 'setName':
      return { ...state, name: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    case 'setNote':
      return { ...state, note: action.payload };
    case 'reset':
      return defaultValue;
    default:
      throw new Error(
        `Unhandled action type in BookingContext: ${(action as Action).type}`,
      );
  }
};

const Provider = ({ children }: PricingProps) => {
  const [state, dispatch] = React.useReducer(reducer, defaultValue);

  const value = { state, dispatch };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

const useBookingData = () => {
  const value = React.useContext(BookingContext);

  if (value === undefined) {
    throw new Error(
      `useBookingData should be used within the BookingContext provider.`,
    );
  }

  return value;
};

export { Provider as BookingDataProvider, useBookingData };
