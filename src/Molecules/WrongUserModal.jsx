import React from "react";
import { BaseModal } from "../pages/BaseModal";
import { Image } from "../Atoms/Image";
import Header from "./Header";
import Button from "../Atoms/Button";
import { Paragraph } from "../Atoms/Paragraph";
import { CloseIcon } from "../Atoms/CloseIcon";
import infoIcon from "../images/info-circle.svg";
import "../styles/WrongUserModal.css";

const WrongUserModal = ({ setShowModal }) => {
  return (
    <BaseModal>
      <div className="modalHeader">
        <figure className="close-permission">
          <span onClick={() => setShowModal(false)}>
            <CloseIcon />
          </span>
        </figure>
        <Image src={infoIcon} alt={"circulo de información"} />
        <Header text={"Aviso"} type={3} />
      </div>
      <Paragraph
        text={
          "Tus datos no coinciden con nuestros registros. Verifica e inténtalo de nuevo"
        }
        linesNumber={1}
      />
      <div className="bodyModal">
        <Paragraph
          text={`Te recordamos que el servicio de Asesor en Linea es exclusivo para uso exclusivo de
          usuarios `}
          span={true}
          spanText={"Colsanitas/Medisanitas"}
          spanClassName={"bold"}
        />
      </div>
      <Button
        variant={"primary"}
        className={"acceptButton"}
        value={"Aceptar"}
        onClick={() => setShowModal(false)}
      />
    </BaseModal>
  );
};

export default WrongUserModal;
