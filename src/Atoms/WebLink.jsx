import React from "react";

const WebLink = ({ linkString, className, children, target }) => {
  return (
    <a href={linkString} className={className} target={target}>
      {children}
    </a>
  );
};

export { WebLink };
