import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Header from "./Components/Header";

function App() {
  const [clicks, setClicks] = useState({
    homeClick: false,
    mapClick: false,
    aboutClick: false,
    faqClick: false,
    contactClick: false,
    loginClick: false,
    signupClick: false,
  });

  console.log(clicks);

  return (
    <Container>
      <Router>
        <Header setClicks={setClicks} />
        <Routes>
          <Route exact path="/" element={<Home setClicks={setClicks} clicks={clicks} />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;
