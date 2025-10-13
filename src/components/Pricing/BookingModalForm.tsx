import * as React from "react";

import { useBookingData } from "./BookingContext";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as S from "./BookingModalFormStyles";

interface Props {
  formRef: React.RefObject<HTMLFormElement | null>;
}

const BookingModalForm = ({ formRef }: Props) => {
  const { state, dispatch } = useBookingData();

  const { date, name, email, note } = state;

  const onDateChange = (date: Date | null) => {
    if (!date) return;

    dispatch({ type: "setDate", payload: date });
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setName", payload: e.currentTarget.value });
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setEmail", payload: e.currentTarget.value });
  };

  const onNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: "setNote", payload: e.currentTarget.value });
  };

  return (
    <S.Form ref={formRef}>
      <S.TextInputContainer>
        <S.Label>Date</S.Label>
        <S.Input as={DatePicker} selected={date} onChange={onDateChange} />
        <S.DatePickerStyles />
      </S.TextInputContainer>
      <S.TextInputContainer>
        <S.Label>Your name</S.Label>
        <S.Input type="text" required value={name} onChange={onNameChange} />
      </S.TextInputContainer>
      <S.TextInputContainer>
        <S.Label>Your email</S.Label>
        <S.Input type="email" required value={email} onChange={onEmailChange} />
      </S.TextInputContainer>
      <S.TextInputContainer>
        <S.Label>Note</S.Label>
        <S.Input as="textarea" onChange={onNoteChange} value={note} rows={4} />
      </S.TextInputContainer>
    </S.Form>
  );
};

export default BookingModalForm;
