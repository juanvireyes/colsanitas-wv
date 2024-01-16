import React from "react";
import "../styles/Footer.css";
import { InfoIcon } from "../Atoms/InfoIcon";
import pc from "../images/pc.svg";
import cellphone from "../images/Cellphone.svg";
import kiosco from "../images/Kiosco.svg";

const Footer = () => {
  return (
    <footer className="footer-cont">
      <h6>Recuerda que nuestros canales digitales están disponibles 24/7</h6>
      <div className="hyperlinks">
        <div className="main-cont">
          <InfoIcon
            name="pc"
            image={pc}
            imageText="Icono computador"
            text="Oficina virtual"
            url="https://www.colsanitas.com/en/servicios-oficina-virtual"
          />

          <InfoIcon
            name="cellphone"
            image={cellphone}
            imageText="Icono celular"
            text="App Colsanitas"
            url="https://www.colsanitas.com/en/colsanitas-app"
          />

          <InfoIcon
            name="kiosco"
            image={kiosco}
            imageText="Icono kiosco"
            text="Kiosco"
            url="https://www.colsanitas.com/en/kioscos"
          />
        </div>

        <div className="second-main-cont">
          <InfoIcon
            name="whatsapp"
            image={cellphone}
            imageText="Icono celular"
            text="Whatsapp"
            url="https://wa.me/573103107676"
            paragraphNum={2}
            text2="(+57)3103107676"
          />

          <InfoIcon
            name="chatbot"
            text="Chatbot María Paula"
            url="https://www.colsanitas.com/en/home"
            paragraphNum={2}
            text2="Colsanitas.com"
          />

          <InfoIcon
            name="webchat"
            text="Chat"
            url="https://www.facebook.com/ColsanitasMedicinaPrepagada"
            paragraphNum={2}
            text2="Facebook y messenger"
          />
        </div>
      </div>
      <div className="funcionalidades-cont">
        <p className="funcionalidades">
          Conoce todas las funcionalidades
          <a
            href="https://www.colsanitas.com/documents/44695/268305337/ago_Canales_oficinas_op.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aquí
          </a>
        </p>
      </div>

      <div className="copyright-cont">
        <p className="copyright">© Copyright 2023 Colsanitas</p>
      </div>
    </footer>
  );
};

export default Footer;
