In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser

### Features Completed

- Search the events through search bar -> Clicking on the event will open a modal displaying the details of the event.
- See the current month, dates and events
- Navigate to next and previous months
- Add events to particular date on particular time of the day. Added events will appear on the particular day.
- Event should have attributes like name, description, “remind me” if yes, then “remind before”.
- Edit and delete events --> Clicking the event will open a modal for editing the event.

### Instructions and Points to Ponder

- The App will display the current month calendar. For navigating to the previous or next month, use the previous or next arrow respectively.
- When entering the event name in search bar, the search bar will display suggestions based on the events that contain the given keyword.
  On Clicking the event name, a modal with the event information will appear.
- For adding the event, click on the date container for which event needs to be added and a modal will get popped up for adding the event details.
- For editing the event, click on the added event.
- Used localStorage for storing events for a particular day, with the key as 'date-month'. This is just done for simplicity and it can be improved using JSON as storage file.
- Used MaterialUI and reactstrap for icon and Modal. For the rest, native CSS has been used.

### Areas of Improvement

- Since the code has been written in 6 hours, there is a lot to improve upon the design part, and the modular structure.
