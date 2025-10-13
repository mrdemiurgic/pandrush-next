"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

import { BeatLoader } from "react-spinners";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { sendContactForm } from "@/lib/email-client";

import * as S from "./styles";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [statusType, setStatusType] = useState<"error" | "success">("success");
  const [isAttempting, setIsAttempting] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [status, setStatus] = useState<string>("");
  const [showStatus, setShowStatus] = useState<boolean>(false);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsAttempting(true);
    const status = await sendContactForm(name, email, message);
    setIsAttempting(false);

    if (status === 200) {
      setTimeout(() => {
        setShowStatus(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 2000);

      setStatusType("success");
      setStatus("Thank you for your message! We will be in touch soon.");
    } else {
      setTimeout(() => {
        setShowStatus(false);
      }, 2000);

      setStatusType("error");
      setStatus("Unable to submit form. Please try again later.");
    }

    setShowStatus(true);
  };

  return (
    <S.Container>
      <S.StatusBox $show={showStatus} type={statusType}>
        {status}
      </S.StatusBox>
      <form onSubmit={onSubmit}>
        <S.InputContainer>
          <S.Label>Your Name</S.Label>
          <S.Input
            required
            name="name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Your E-mail</S.Label>
          <S.Input
            required
            name="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Message</S.Label>
          <S.TextArea
            required
            name="message"
            value={message}
            onChange={onChangeMessage}
          />
        </S.InputContainer>
        <S.Button type="submit" disabled={showStatus}>
          {isAttempting ? (
            <S.Spinner>
              <BeatLoader />
            </S.Spinner>
          ) : (
            <>
              <S.SendIcon icon={faPaperPlane} />
              Send
            </>
          )}
        </S.Button>
      </form>
    </S.Container>
  );
};

export default ContactForm;
