import React from "react";

const Paragraph = ({
  text,
  className,
  linesNumber,
  span,
  spanText,
  spanPosition,
  textAfterSpan,
  spanClassName,
}) => {
  if (!className) {
    className = "default-paragraph";
  }

  if (linesNumber > 1) {
    return (
      <p className={className}>
        {text.split("\n").map((line, index) => {
          return (
            <span key={index}>
              {line}
              <br />
            </span>
          );
        })}
      </p>
    );
  }

  if (span) {
    if (spanPosition === "start") {
      return (
        <p className={className}>
          <span className={spanClassName}>{spanText}</span>
          {text}
        </p>
      );
    } else if (spanPosition === "middle") {
      return (
        <p className={className}>
          {text}
          <span className={spanClassName}>{spanText}</span>
          {textAfterSpan}
        </p>
      );
    } else {
      return (
        <p className={className}>
          {text}
          <span className={spanClassName}>{spanText}</span>
        </p>
      );
    }
  }

  return <p className={className}>{text}</p>;
};

export { Paragraph };
