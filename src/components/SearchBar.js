import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  InputGroupText,
} from "reactstrap";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);
  const [eventClick, setEventClick] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  useEffect(() => {
    let allEvents = JSON.parse(localStorage.getItem("allEvents")) || [];
    let res = [...allEvents];
    res = res.filter((r) =>
      r.eventName.toLowerCase().includes(query.toLowerCase())
    );
    setResults(res);
  }, [query]);

  let onQueryChange = (e) => {
    let val = e.target.value;
    setQuery(val);
    if (val.length) setDisplay(true);
    else setDisplay(false);
  };

  let toggleEventClick = () => {
    setEventClick(false);
    setDisplay(false);
  };

  let handleEventClick = (r) => {
    setEventClick(true);
    setCurrentEvent(r);
  };

  return (
    <div className="">
      <input
        type="text"
        value={query}
        className="searchInput"
        onChange={onQueryChange}
        placeholder="Search Events"
      />

      {display &&
        results.map((r) => (
          <div className="displayResult" onClick={() => handleEventClick(r)}>
            {r.eventName}
          </div>
        ))}

      {eventClick && (
        <Modal isOpen={eventClick}>
          <ModalHeader>Event Information: {currentEvent.eventName}</ModalHeader>
          <ModalBody>
            <InputGroupText>Date: {currentEvent.key}</InputGroupText>
            <InputGroupText>Time: {currentEvent.eventTime}</InputGroupText>
            <InputGroupText>
              Description: {currentEvent.description}
            </InputGroupText>
          </ModalBody>
          <Button color="primary" onClick={toggleEventClick}>
            Close
          </Button>
        </Modal>
      )}
    </div>
  );
}

export default SearchBar;
