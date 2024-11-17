// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Import the Navbar component
import EventAlbum from "./Pages/Event/EventAlbum";
import EventMemories from "./Pages/Event/EventMemories";
import Invitation from "./Pages/Invitation"; // Import the Invitation page

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Pass handleLogout */}
        <Routes>
          <Route
            path="/invitation"
            element={
                <Invitation />
            }
          />
          <Route
            path="/event-album"
            element={
                <EventAlbum />
            }
          />
          <Route
            path="/event-memories"
            element={
                <EventMemories />
            }
          />
          <Route path="*" element={<Navigate to="/invitation" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
