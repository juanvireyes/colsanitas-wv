import React from "react";
import { BaseModal } from "../pages/BaseModal";
import Button from "../Atoms/Button";
import { Image } from "../Atoms/Image";
import { CloseIcon } from "../Atoms/CloseIcon";
import { WebLink } from "../Atoms/WebLink";
import PermissionIMG from "../images/Permissions.jpg";
import exclamationCircle from "../images/circle-exclamation.svg";
import "../styles/ModalInfo.css";

const PermissionModal = ({ setShowPermissionModal, setShowContactModal, videoCallLink }) => {
  const handleGoBack = (e) => {
    e.preventDefault();
    setShowPermissionModal(false);
    setShowContactModal(true);
  };

  return (
    <BaseModal>
      <div className="modal-header">
        <figure className="close-permission">
          <span onClick={() => setShowPermissionModal(false)}>
            <CloseIcon />
          </span>
        </figure>
        <Image src={exclamationCircle} alt={"símbolo de exlamación"} />
        <h2>Para prestarte un mejor servicio te recomendamos</h2>
        <div className="underLine"></div>
      </div>
      <ul>
        <li>Usa navegadores como Chrome y Firefox</li>
        <li>Permite el acceso al micrófono y cámara de tu dispositivo</li>
      </ul>
      <Image src={PermissionIMG} alt={"personas interactuando con el computador"} />
      <div className="modal-footer">
        <Button variant={"secondary"} onClick={handleGoBack} value={"Regresar"} />
        <WebLink linkString={videoCallLink} className={"video-call-link"}>
          <Button variant={"primary"} value={"Ingresar"} className={"modal-btn-send"} />
        </WebLink>
      </div>
    </BaseModal>
  );
};

export default PermissionModal;
