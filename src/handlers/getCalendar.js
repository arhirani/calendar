class Calendar {
  getCurrentCalendar(date) {
    const monthDaysByWeek = [];
    const monthDays = this.setUpCalendar(date, 7 * 5);
    while (monthDays.length > 0) {
      monthDaysByWeek.push(monthDays.splice(0, 7));
    }

    return {
      currentDay: date.getDay(),
      currentDate: date.getDate(),
      monthDaysByWeek,
    };
  }

  /**
   *
   * @param {*} startingDate
   * @param {*} days
   */
  setUpCalendar(startingDate, days) {
    if (startingDate.getDay() >= startingDate.getDate()) {
      const lastDayOfPreviousMonth = this.lastDayOfMonth(
        startingDate.getFullYear(),
        startingDate.getMonth() - 1
      );
      const offset = startingDate.getDay() - startingDate.getDate();
      const copy = new Date(startingDate);
      copy.setMonth(startingDate.getMonth() - 1);
      copy.setDate(lastDayOfPreviousMonth - offset);
      return this.fillDays(days, copy, startingDate.getMonth());
    }

    return this.fillDays(days, startingDate, startingDate.getMonth());
  }

  fillDays(days, startingDate, month) {
    let remainder = 0;
    const calendar = [];
    let currentMonth = startingDate.getMonth();
    let currentDayNumber = startingDate.getDate() - startingDate.getDay();

    while (remainder < days) {
      calendar.push({
        day: currentDayNumber,
        month: currentMonth,
        isCurrentMonth: currentMonth === month,
      });
      if (
        currentDayNumber ===
        this.lastDayOfMonth(startingDate.getFullYear(), currentMonth)
      ) {
        currentDayNumber = 1;
        currentMonth += 1;
      } else {
        currentDayNumber += 1;
      }
      remainder += 1;
    }
    return calendar;
  }

  /**
   * Returns last day of the given month of the given year
   * @param {*} year
   * @param {*} month
   */
  lastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
}

export default Calendar;
