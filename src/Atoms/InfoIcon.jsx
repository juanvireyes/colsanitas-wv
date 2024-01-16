import React from "react";
import "../styles/InfoIcon.css";

const InfoIcon = ({ name, image, imageText, text, url, paragraphNum, text2 }) => {
    
    if (!image) {
        return (
            <div className={`${name}-cont`}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <p>
                        <span className="part1">{text}</span>
                        <br />
                        <span className="part2">{text2}</span>
                    </p>
                </a>
            </div>
        );
    } else if (paragraphNum > 1) {
        return (
            <div className={`${name}-cont`}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <figure>
                        <img src={image} alt={imageText} id={name} />
                    </figure>
                </a>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <p>
                        <span className="part1">{text}</span>
                        <br />
                        <span className="part2">{text2}</span>
                    </p>
                </a>
            </div>
        );
    } else {
        return (
            <div className="icon-cont">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <figure>
                        <img src={image} alt={imageText} id={name} />
                    </figure>
                </a>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <p>{text}</p>
                </a>
            </div>
        );
    }
}

export { InfoIcon };