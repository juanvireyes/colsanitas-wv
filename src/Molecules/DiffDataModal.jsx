import React, { useEffect, useCallback } from "react";
import { BaseModal } from "../pages/BaseModal";
import { CloseIcon } from "../Atoms/CloseIcon";
import { WarningIcon } from "../Atoms/WarningIcon";
import { Paragraph } from "../Atoms/Paragraph";
import { WebLink } from "../Atoms/WebLink";
// import Button from "../Atoms/Button";
import "../styles/DiffDataModal.css";

const DiffDataModal = ({
  setShowDiffDataModal,
  client,
  url,
  setVideoCallLink,
  videoCallLink,
  formData,
}) => {
  const handleClickClose = (e) => {
    e.preventDefault();
    setShowDiffDataModal(false);
  };

  const callApi = async (typeId, numId, userName, email, cellphone, service, subContactType) => {
    let data = new FormData();
    data.append("operation", "userConsultOTP");
    data.append("token", "Contraseña123@");
    data.append("useProduction", "false");
    data.append("typeDocument", typeId);
    data.append("numberDocument", numId);
    data.append("fullUserName", userName);
    data.append("emailUser", email);
    data.append("phoneUser", cellphone);
    data.append("serviceType", service);
    data.append("otpMetod", subContactType);

    let headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");

    try {
      const response = await client.postData(url, data, headers);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      let idType = formData.docType;
      let idNum = formData.docNum;
      let userName = formData.fullName;
      let email = formData.userEmail;
      let cellphone = formData.cellphoneNum;
      let service = formData.serviceType;
      let contactMethod = "no";

      const apiCallResult = await callApi(
        idType,
        idNum,
        userName,
        email,
        cellphone,
        service,
        contactMethod
      );

      if (apiCallResult.status === 200) {
        setVideoCallLink(apiCallResult.message[0].url);
      } else {
        console.log("Hubo un error en el servicio", apiCallResult);
      }
    } catch (error) {
      console.error(error);
    }
  }, [formData, setVideoCallLink]);

  useEffect(() => {
    fetchData(); // Llamada a la función fetchData al montar el componente
  }, [fetchData]);

  return (
    <BaseModal>
      <div className="modal-close-icon">
        <span onClick={handleClickClose}>
          <CloseIcon />
        </span>
      </div>
      <WarningIcon />
      <Paragraph
        className={"diff-data-modal-paragraph"}
        text={
          "Los datos de correo y teléfono que ingresaste no coinciden con nuestros registros. No obstante, tu solicitud será transferida con uno de nuestros asesores."
        }
      />
      <WebLink linkString={videoCallLink} className={"video-call-link"}>
        {/* <Button
          variant={"primary"}
          value={"Ingresar"}
          className={"modal-btn-send"}
          onClick={handleClick}
        /> */}
        <span className="link-button">Ingresar</span>
      </WebLink>
    </BaseModal>
  );
};

export { DiffDataModal };
