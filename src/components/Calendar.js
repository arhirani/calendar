import React, { useState, useEffect } from "react";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";
import IconButton from "@material-ui/core/IconButton";
import { v4 as uuidv4 } from "uuid";
import Week from "./Week";
import getCalendar from "../handlers/getCalendar";

function Calendar() {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [monthDaysByWeek, setMonthDaysByWeek] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    date.setDate(1);
    setMonthDaysByWeek(
      new getCalendar().getCurrentCalendar(date).monthDaysByWeek
    );
  }, [date]);

  const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    date.setDate(1);
    setDate(new Date(date));
  };

  const previousMonth = () => {
    date.setMonth(date.getMonth() - 1);
    date.setDate(1);
    setDate(new Date(date));
  };

  return (
    <div className="container">
      <div className="calendar">
        <IconButton
          aria-label="Previous Month"
          color="inherit"
          onClick={previousMonth}
        >
          <NavigateBeforeRoundedIcon />
        </IconButton>
        <h3>
          {months[date.getMonth()]} {date.getFullYear()}
        </h3>
        <IconButton aria-label="Next month" color="inherit" onClick={nextMonth}>
          <NavigateNextRoundedIcon />
        </IconButton>
      </div>
      <div className="row align-items-start">
        {weekdays.map((day) => (
          <div className="col" key={day}>
            {day}
          </div>
        ))}
      </div>
      {monthDaysByWeek.map((week) => (
        <React.Fragment key={uuidv4()}>
          <Week weekDays={week} />
          <div className="w-100"></div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Calendar;
