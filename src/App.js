import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from "./Screens/Home";
import Header from "./Components/Header";

//screens
import Map from "./Screens/Map";

function App() {
  const [user, setUser] = useState({ userName: "", password: "" });
  const [clicks, setClicks] = useState({
    homeClick: false,
    mapClick: false,
    aboutClick: false,
    faqClick: false,
    contactClick: false,
    loginClick: false,
    signupClick: false,
    timetableClick: false,
  });

  return (
    <Container>
      <Router>
        <Header setClicks={setClicks} user={user} />
        <Routes>
          <Route exact path="/" element={<Home setClicks={setClicks} clicks={clicks} setUser={setUser} />} />
          <Route exact path="/map" element={<Map setClicks={setClicks} clicks={clicks} />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;
