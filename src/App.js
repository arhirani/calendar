import React from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Calendar />
    </div>
  );
}

export default App;
