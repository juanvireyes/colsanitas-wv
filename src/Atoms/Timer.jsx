import React from "react";

const Timer = ({ seconds }) => {

    return (
        <div className="timer-cont">
            <span>00:{seconds < 10 ? '0'+seconds : seconds}</span>
        </div>
    );
}

export { Timer };