import React from "react";

/** Importación componentes */
import Formulario from "../pages/Formulario";
import { OutOfTime } from "../pages/OutOfTime";
import Footer from "../Molecules/Footer";
// import { Testing } from "../pages/Testing";
import logo from "../images/logo.png";

/** Importación imagenes */
import mainImage from "../images/main-img.jpg";

/** Importación estilos  */
import "./App.css";

const AppUI = ({
  date,
  initialData,
  validationArray,
  opcionesDocs,
  opcionesServ,
  checked,
  setChecked,
  disabled,
  setDisabled,
  checkDisabled,
  setCheckDisabled,
  showUnauthModal,
  setShowUnauthModal,
  showContactModal,
  setShowContactModal,
  showValidateOtpModal,
  setShowValidateOtpModal,
  handleClass,
  setHandleClass,
  formData,
  setFormData,
  selectedEmail,
  setSelectedEmail,
  selectedCellphone,
  setSelectedCellphone,
  otpCode,
  setOtpCode,
  hideData,
  subContactType,
  setSubContactType,
  showPermissionModal,
  setShowPermissionModal,
  isHoliday,
  actualDay,
  actualHour,
  resendDisabled,
  setResendDisabled,
  goBackButton,
  setGoBackButton,
  client,
  otpError,
  setOtpError,
}) => {
  return (
    <div className="container">
      <figure className="logo-cont">
        <img src={logo} alt="Logo Colsanitas" className="logo-colsanitas" />
      </figure>
      <img src={mainImage} alt="Personas interactuando con el computador" className="main-image" />
      {actualDay === 0 ||
      (actualDay === 6 && actualHour < 8) ||
      (actualDay === 6 && actualHour >= 14) ||
      (actualDay !== 6 && actualHour < 8) ||
      (actualDay !== 6 && actualHour >= 18) ||
      isHoliday === true ? (
        <div className="ot-cont">
          <OutOfTime />
          <Footer />
        </div>
      ) : (
        <div className="form-container">
          <Formulario
            opcionesDocs={opcionesDocs}
            opcionesServ={opcionesServ}
            checked={checked}
            setChecked={setChecked}
            disabled={disabled}
            setDisabled={setDisabled}
            checkDisabled={checkDisabled}
            setCheckDisabled={setCheckDisabled}
            showUnauthModal={showUnauthModal}
            setShowUnauthModal={setShowUnauthModal}
            showContactModal={showContactModal}
            setShowContactModal={setShowContactModal}
            showValidateOtpModal={showValidateOtpModal}
            setShowValidateOtpModal={setShowValidateOtpModal}
            handleClass={handleClass}
            setHandleClass={setHandleClass}
            formData={formData}
            setFormData={setFormData}
            selectedEmail={selectedEmail}
            setSelectedEmail={setSelectedEmail}
            selectedCellphone={selectedCellphone}
            setSelectedCellphone={setSelectedCellphone}
            otpCode={otpCode}
            setOtpCode={setOtpCode}
            hideData={hideData}
            subContactType={subContactType}
            setSubContactType={setSubContactType}
            showPermissionModal={showPermissionModal}
            setShowPermissionModal={setShowPermissionModal}
            resendDisabled={resendDisabled}
            setResendDisabled={setResendDisabled}
            goBackButton={goBackButton}
            setGoBackButton={setGoBackButton}
            client={client}
            otpError={otpError}
            setOtpError={setOtpError}
            date={date}
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default AppUI;
