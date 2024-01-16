import React from "react";

const Image = ({ src, alt, className }) => {

    if (!src) return null;
    
    if (!className) {
        className = "default-img-style";
    }

    return (
        <img src={src} alt={alt} className={className} />
    );
}

export { Image };