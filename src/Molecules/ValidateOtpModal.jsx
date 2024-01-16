import React, { useState, useEffect } from "react";

import { BaseModal } from "../pages/BaseModal";
import { WarningIcon } from "../Atoms/WarningIcon";
import Header from "../Molecules/Header";
import { Paragraph } from "../Atoms/Paragraph";
import { Input } from "../Atoms/Input";
import { Timer } from "../Atoms/Timer";
import Button from "../Atoms/Button";
import { CloseIcon } from "../Atoms/CloseIcon";

import "../styles/ValidateOtpModal.css";

const ValidateOtpModal = ({
  setShowValidateOtpModal,
  setShowContactModal,
  receivedOtp,
  handleClass,
  setHandleClass,
  disabled,
  setDisabled,
  email,
  cellphone,
  contactType,
  setOtpCode,
  subContactType,
  setShowPermissionModal,
  resendDisabled,
  setResendDisabled,
  goBackButton,
  setGoBackButton,
  otpError,
  setOtpError,
  callApi,
  formData,
}) => {
  /** Se crea el estado para los segundos y se inicializa en 60 segundos. */
  const [seconds, setSeconds] = useState(60);
  let text = "";
  let text2 = "";

  /** Se crea el useEffect para que cada vez que el estado de segundos cambie, se actualice el contador. Esto se hace cada 1000ms o 1s */
  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [finalOtp, setFinalOtp] = useState("");
  const [focusIndex, setFocusIndex] = useState(0);

  const validateOtp = () => {
    // console.log("finalOtp", finalOtp);
    // console.log("receivedOtp", receivedOtp);
    if (parseInt(finalOtp) === receivedOtp) {
      handleClickClose();
      setShowPermissionModal(true);
    } else {
      setOtpError(true);
      setHandleClass("error");
      setOtp(["", "", "", "", "", ""]);
      // setFinalOtp("");
      setFocusIndex(0);
      // alert("El código de seguridad es incorrecto. Por favor, inténtelo de nuevo.");
    }
  };

  const handleChange = (index) => (event) => {
    const value = event.target.value;
    // setHandleClass("success");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setFinalOtp(newOtp.join(""));

    if (value.length > 0 && index < newOtp.length - 1) {
      setFocusIndex(index + 1);
    }
  };

  const handleBackspace = (index) => (event) => {
    if (event.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      setFinalOtp(newOtp.join(""));

      if (index > 0) {
        setFocusIndex(index - 1);
      }
      setHandleClass("disabled");
    }
  };

  const handleClickClose = () => {
    setOtp(["", "", "", "", "", ""]);
    setFinalOtp("");
    setFocusIndex(0);
    setSeconds(60);
    setShowValidateOtpModal(false);
    setOtpError(false);
  };

  const handleClickBack = () => {
    setOtp(["", "", "", "", "", ""]);
    setFinalOtp("");
    setFocusIndex(0);
    setSeconds(60);
    setShowValidateOtpModal(false);
    setShowContactModal(true);
    setOtpError(false);
  };

  const handleClickResend = async () => {
    // setOtpCode(subContactType);
    let operation = "userConsultOTP";
    let typeId = formData.docType;
    let numId = formData.docNum;
    let userName = formData.fullName;
    let email = formData.userEmail;
    let cellphone = formData.cellphoneNum;
    let service = formData.serviceType;
    let contactMethod = subContactType;
    let otpForwarding = 1;

    // console.log("formData", formData);

    const apiCall = await callApi(
      operation,
      typeId,
      numId,
      userName,
      email,
      cellphone,
      service,
      contactMethod,
      otpForwarding
    );

    if (apiCall.status === 200) {
      setOtpCode(apiCall.message[0].codigoOtp);
      setShowValidateOtpModal(true);
      setShowContactModal(false);
    } else {
      console.log("Error al obtener el código de seguridad", apiCall);
    }

    // setOtp(["", "", "", "", "", ""]);
    setFocusIndex(0);
    setSeconds(60);
  };

  if (contactType === email) {
    text = "Correo: ";
    text2 = email;
  } else if (contactType === cellphone) {
    text = "Celular";
    text2 = cellphone;
  }

  useEffect(() => {
    if (focusIndex >= 0 && focusIndex < otp.length) {
      // Enfocar la entrada correspondiente
      // Aquí podrías usar useRef o alguna otra lógica para manejar el enfoque
      // console.log(`Enfocar entrada ${focusIndex}`);

      const input = document.getElementById(`input-${focusIndex}`);
      if (input) {
        input.focus();
        input.select(); // Para seleccionar el texto automáticamente
      }
    }

    // console.log("Otp ingresado " + finalOtp);
    if (finalOtp.length === 6) {
      setHandleClass("success");
      setDisabled(false);
    } else if (finalOtp.length < 6) {
      // setDisabled(true);
    }

    if (seconds === 0) {
      setResendDisabled(false);
      setGoBackButton(false);
    } else {
      setResendDisabled(true);
      setGoBackButton(true);
    }
  }, [
    focusIndex,
    otp.length,
    otp,
    finalOtp,
    setHandleClass,
    setDisabled,
    seconds,
    setResendDisabled,
    setGoBackButton,
  ]);

  return (
    <BaseModal>
      <div className="modal-close-icon">
        <span onClick={handleClickClose}>
          <CloseIcon />
        </span>
      </div>
      <WarningIcon />
      <Header type={3} text={"Código de seguridad"} />
      <Paragraph
        linesNumber={2}
        className={"otp-modal-paragraph"}
        text={`Revisa tu correo y/o celular 
        \nHemos enviado un código de confirmación de 6 dígitos. No olvides ingresar el código lo antes posible`}
      />
      <Paragraph
        className={"otp-modal-cellphone"}
        text={text2}
        span={true}
        spanPosition={"start"}
        spanText={text}
      />
      <form type="submit" className="otp-form">
        <div className="otp-input">
          {otp.map((value, index) => (
            <Input
              type={"otp"}
              key={index}
              value={value}
              onChange={handleChange(index)}
              id={`input-${index}`}
              onKeyDown={handleBackspace(index)}
              className={handleClass}
            />
          ))}
        </div>
        {otpError ? (
          <Paragraph linesNumber={1} className={"error-paragraph"} text={"Código incorrecto"} />
        ) : null}
        <div className="otp-modal-footer">
          <Paragraph
            linesNumber={1}
            className={"otp-modal-footer-paragraph"}
            text={"¿No tienes un código?"}
          />
          <Button
            variant={"resendOtp"}
            disabled={resendDisabled}
            value={"Volver a enviar el código"}
            onClick={handleClickResend}
            setResendDisabled={setResendDisabled}
          />
          <Timer seconds={seconds} />
        </div>
        <div className="otp-btn-container">
          <Button
            variant={"modalGoBackBtn"}
            value={"Regresar"}
            className={"modal-btn-back"}
            onClick={handleClickBack}
            disabled={goBackButton}
            setGoBackButton={setGoBackButton}
          />
          <Button
            variant={"primary"}
            value={"Ingresar"}
            disabled={disabled}
            className={"modal-btn-send"}
            onClick={validateOtp}
          />
        </div>
      </form>
    </BaseModal>
  );
};

export { ValidateOtpModal };
