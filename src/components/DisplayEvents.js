import React from "react";

function DisplayEvents({ dayEvents, editEvent }) {
  return (
    <div>
      {dayEvents.length
        ? dayEvents.map((eve, index) => (
            <div
              onClick={(e) => editEvent(e, eve, index)}
              style={{ background: "skyblue", marginBottom: "5px" }}
            >
              {eve.eventName}
            </div>
          ))
        : ""}
    </div>
  );
}

export default DisplayEvents;
