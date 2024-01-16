import React from "react";
import "../styles/Button.css";
import { VideoIcon } from "../Atoms/VideoIcon";

const Button = ({ variant, value, type, onClick, disabled, className }) => {
  let style = {
    fill: "#FFFFFF",
  };

  // if (checked && !disabled) {
  //   style = {
  //     fill: "#E4E4E4",
  //   };
  // } else {
  //   style = {
  //     fill: "#757575",
  //   };
  // }

  const typeVariant = () => {
    switch (variant) {
      case "primary":
        if (className) {
          return "primary-button " + className;
        }
        return "primary-button";

      case "secondary":
        if (className) {
          return "secondary-button " + className;
        }
        return "secondary-button";

      case "iconButton":
        return "primary-button";

      case "modalButton":
        return "blue-primary-btn";

      case "resendOtp":
        return "otp-modal-footer-link";

      case "modalGoBackBtn":
        return "secondary-button";

      default:
        if (className) {
          return "primary-button " + className;
        }
        return "primary-button";
    }
  };

  if (variant === "resendOtp") {
    return (
      <button
        id={value}
        className={typeVariant()}
        type={type ? type : "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }

  if (variant === "modalGoBackBtn") {
    return (
      <button
        id={value}
        className={typeVariant()}
        type={type ? type : "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }

  if (variant === "iconButton") {
    return (
      <button
        id={value + "-main-btn"}
        type="button"
        className={typeVariant()}
        onClick={onClick}
        // disabled={disabled}
        name="icon-btn"
      >
        {value}
        <VideoIcon estilo={style} />
      </button>
    );
  }

  return (
    <button
      id={value}
      className={typeVariant()}
      type={type ? type : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
