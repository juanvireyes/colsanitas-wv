import React, { useState } from "react";
import "../styles/Input.css";

const Input = ({
  type,
  label,
  placeHolder,
  options,
  reference,
  name,
  id,
  value,
  onChange,
  checked,
  setChecked,
  className,
  min,
  max,
  docTypeError,
  numberDocError,
  fullNameError,
  emailError,
  phoneError,
  serviceTypeError,
}) => {
  const [showError, setShowError] = useState(false);

  if (!id) {
    id = label
      .toLowerCase()
      .replace(/ /g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  if (!value) {
    value = "";
  }

  if (!name) {
    name = "default-input";
  }

  if (!label) {
    label = "Default label";
  } /*else {
    var name = label
      .toLowerCase()
      .replace(/ /g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }*/

  const handleType = (type) => {
    if (type === "text" || type === "number" || type === "email") {
      return (
        <input
          type={type}
          placeholder={placeHolder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={className}
          required
        />
      );
    }
    if (type === "select") {
      return (
        <select name={name} id={id} onChange={onChange}>
          {label}
          <option value="">Selecciona una opción</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      );
    }
    if (type === "checkbox") {
      return (
        <input type={type} onClick={() => setChecked(!checked)} name={name} onChange={onChange} />
      );
    }
    if (type === "cellphone") {
      return (
        <input
          type="text"
          onChange={onChange}
          placeholder={placeHolder}
          id={id}
          name={name}
          inputMode="numeric"
          className={className}
          pattern="/^[0-9]*$/"
          maxLength={10}
        />
      );
    }

    // if (type === "userName") {
    //   return (
    //     <input
    //       type="text"
    //       placeholder={placeHolder}
    //       name={name}
    //       id={id}
    //       value={value}
    //       onChange={onChange}
    //       className={className}
    //       required
    //       pattern="^[A-Za-z\s]+$"
    //     />
    //   );
    // }
  };

  if (type === "otp") {
    return (
      <div className="otp-input-box">
        <input
          type="text"
          className={`otp-input-number ${className ? className : ""}`}
          maxLength={1}
          ref={reference}
          onChange={onChange}
          placeholder="-"
          id={id}
          name={name}
          pattern="/^[0-9]*$/"
        />
      </div>
    );
  }

  if (type === "colsanitasRadioBtn") {
    return (
      <label>
        <input
          type="radio"
          name={name ? name : "colsanitas-radio-btn"}
          id="colsanitas-radio-btn"
          className="colsanitas-radio-btn"
          onChange={onChange}
          checked={checked}
          value={value}
        />
        <p className="colsanitas-radio-btn-label">{label}</p>
      </label>
    );
  }

  if (type === "submit") {
    return (
      <input type="submit" className="colsanitas-submit" id="colsanitas-submit" value={label} />
    );
  }

  return (
    <div className="inputBox">
      <label
        className={
          docTypeError ||
          numberDocError ||
          fullNameError ||
          emailError ||
          phoneError ||
          serviceTypeError
            ? "errorInput"
            : null
        }
      >
        {label}
        <span className="mandatory">*</span>
      </label>
      {handleType(type)}
    </div>
  );
};

export { Input };
