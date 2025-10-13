import React, { useRef, useState } from "react";

import Modal from "../Modal";

import BookingModalForm from "./BookingModalForm";

import { useBookingData } from "./BookingContext";

import { calculateTotal } from "../../utils/pricing";

import * as S from "./BookingModalStyles";

import { BookingModalProps } from "./types";
import { faUndo, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { sendBookingForm } from "@/lib/email-client";
import { BeatLoader } from "react-spinners";

const BookingModal = ({
  show,
  close,
  selectedPackage,
  selectedOptions = [],
}: BookingModalProps) => {
  const { name, options = [], basePrice } = selectedPackage || {};
  const total = calculateTotal(basePrice || 0, options, selectedOptions);

  const formRef = useRef<HTMLFormElement>(null);

  const { state, dispatch } = useBookingData();
  const [isAttempting, setIsAttempting] = useState<boolean>(false);
  const [showStatus, setShowStatus] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error">("success");

  const cancel = () => {
    dispatch({ type: "reset" });
    close();
  };

  const book = async () => {
    // email data
    const isFormValid = formRef.current?.reportValidity();

    if (!isFormValid) {
      return;
    }

    setIsAttempting(true);
    const result = await sendBookingForm(
      selectedPackage?.name || "unset",
      `${total}`,
      state.date.toLocaleDateString(),
      state.name,
      state.email,
      state.note
    );

    setIsAttempting(false);

    if (result === 200) {
      setStatusType("success");
      setStatusMessage(" Form submitted. Thank you!");
      setShowStatus(true);
      setTimeout(() => {
        setShowStatus(false);
        dispatch({ type: "reset" });
        close();
      }, 2000);
    } else {
      setStatusType("error");
      setStatusMessage("Unable to submit form. Please try again later.");
      setShowStatus(true);

      setTimeout(() => {
        setShowStatus(false);
      }, 2000);
    }
  };

  return (
    <Modal show={show} hide={cancel}>
      <S.StatusBox $show={showStatus} $type={statusType}>
        {statusMessage}
      </S.StatusBox>
      <S.Banner>Your selected package:</S.Banner>
      <S.SelectedPackage>
        <S.PackageName>{name}</S.PackageName>
        <S.TotalPrice>Total: ${total}</S.TotalPrice>
      </S.SelectedPackage>
      <BookingModalForm formRef={formRef} />
      <S.Message>
        Thank you for doing business with us! You will hear from us within 24
        hours.
      </S.Message>

      <S.ButtonBar>
        <S.CancelButton onClick={cancel}>
          <S.ButtonIcon icon={faUndo} />
          Cancel
        </S.CancelButton>

        <S.Button onClick={book}>
          {isAttempting ? (
            <S.Spinner>
              <BeatLoader />
            </S.Spinner>
          ) : (
            <>
              {" "}
              <S.ButtonIcon icon={faCalendarCheck} />
              Book
            </>
          )}
        </S.Button>
      </S.ButtonBar>
    </Modal>
  );
};

export default BookingModal;
