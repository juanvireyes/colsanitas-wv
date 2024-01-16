import React from "react";
import clock from "../images/clock.svg";
import "../styles/AttentionSchedule.css";

const AttentionSchedule = ({ wvType }) => {
  return (
    <div className="schedule-container">
      {wvType === "schedule" ? (
        <>
          <div className="div-header">
            <img src={clock} alt="Reloj" className="schedule-icon" />
            <p className="schedule-title">Horario de atención</p>
          </div>
          <p className="schedule-info">
            Lunes a viernes de 8:00am a 6:00pm - Sábados de 8:00am a 2:00pm
          </p>
        </>
      ) : (
        <>
          <figure className="out-of-time-icon-cont">
            <img src={clock} alt="Reloj" className="out-of-time-icon" />
          </figure>
          <h4 className="out-of-time-title schedule-title">
            Horario de atención
          </h4>
          <p className="out-of-time-paragraph schedule-info">
            Lunes a viernes de 8:00am a 6:00pm - Sábados de 8:00am a 2:00pm
          </p>
        </>
      )}
    </div>
  );
};

export { AttentionSchedule };
