import React from "react";

import Header from "../Molecules/Header";
import { Image } from "../Atoms/Image";
import { AttentionSchedule } from "../Molecules/AttentionSchedule";
import { Paragraph } from "../Atoms/Paragraph";

import otImage from "../images/ilustracion-medico.svg";

import "../styles/OutOfTime.css";

const OutOfTime = () => {
  return (
    <>
      <div className="out-of-time">
        <Header type={1} text={"¡Bienvenidos!"} />
        <figure className="ot-image-cont">
          <Image
            src={otImage}
            alt="Ilustración de un médico"
            className="ot-image"
          />
        </figure>
        <Paragraph
          text={`Gracias por contactarnos, \nen este momento no podemos atenderte`}
          className={"ot-paragraph"}
          linesNumber={2}
        />
        <AttentionSchedule />
      </div>
    </>
  );
};

export { OutOfTime };
