import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import DisplayEvents from "./DisplayEvents";

const DayButton = styled.button`
  height: 125px;
  width: 100px;
  padding-left: 0;
  padding-right: 0;
  font-size: 20px;
  background: ${(props) => (props.isCurrentMonth ? "transparent" : "gray")};
`;

const WeekDay = ({ day, month, isCurrentMonth }) => {
  const currentDate = new Date();

  let key = `${day}-${month + 1}`;

  const [checkbox, setCheckbox] = useState(false);
  const [dayEvents, setDayEvents] = useState(
    JSON.parse(localStorage.getItem(key)) || []
  );
  const [index, setIndex] = useState(null);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleEditModal = () => setEditModal(false);

  const toggleCheckbox = () => setCheckbox(!checkbox);

  const handleEventSubmit = (e, action) => {
    e.preventDefault();
    setModal(false);
    setEditModal(false);
    if (e.target.event_name.value) {
      let eventName = e.target.event_name.value;
      let eventTime = e.target.event_time.value || "";
      let description = e.target.event_description.value || "";
      let remind_time = e.target.remind_time ? e.target.remind_time.value : "";

      let events = [...dayEvents];

      let allEvents = JSON.parse(localStorage.getItem("allEvents")) || [];

      if (action === "add") {
        events.push({ key, eventName, eventTime, description, remind_time });
      } else {
        let ob = { eventName, eventTime, description, remind_time };
        events[index] = ob;
      }
      setDayEvents(events);

      allEvents = [...allEvents, ...events];
      localStorage.setItem(key, JSON.stringify(events));
      localStorage.setItem("allEvents", JSON.stringify(allEvents));
    }
  };

  const handleClick = (event) => {
    event.stopPropagation();
    setModal(true);
  };

  let editEvent = (e, eve, index) => {
    e.stopPropagation();
    setEditModal(true);
    setIndex(index);
  };

  let deleteEvent = () => {
    setEditModal(false);
    let events = [...dayEvents];
    events = events.filter((event, i) => index !== i);
    setDayEvents(events);
    localStorage.setItem(key, JSON.stringify(events));
  };

  const isCurrentDay =
    currentDate.getMonth() === month && currentDate.getDate() === day;

  return (
    <>
      <DayButton
        className="col"
        onClick={handleClick}
        isCurrentMonth={isCurrentMonth}
      >
        {isCurrentDay ? (
          <div className="currentDay calendarDay">{day}</div>
        ) : (
          <div className="calendarDay">{day}</div>
        )}
        <AddEvent
          {...{
            modal,
            toggle,
            day,
            month,
            handleEventSubmit,
            checkbox,
            toggleCheckbox,
          }}
        />
        <EditEvent
          {...{
            editModal,
            toggleEditModal,
            checkbox,
            toggleCheckbox,
            day,
            month,
            dayEvents,
            handleEventSubmit,
            deleteEvent,
            index,
          }}
        />
        <DisplayEvents {...{ dayEvents, editEvent }} />
      </DayButton>
    </>
  );
};

WeekDay.propTypes = {
  day: PropTypes.number.isRequired,
  isHoliday: PropTypes.bool.isRequired,
  events: PropTypes.array,
  currentSelectedDate: PropTypes.number,
};

export default WeekDay;
