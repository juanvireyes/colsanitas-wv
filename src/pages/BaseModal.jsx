import React from "react";
import "../styles/BaseModal.css";

const BaseModal = ({ children, className }) => {
  return (
    <div className="overlay">
      <div className={className ? className : "modal"}>{children}</div>
    </div>
  );
};

export { BaseModal };
