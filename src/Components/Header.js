import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//images
import UserProfile from "../assets/user.png";
import Logo from "../assets/logo-long.png";

function Header({ setClicks }) {
  return (
    <Container>
      <div className="logo-container">
        <img src={Logo} alt="BTS Logo" />
      </div>
      <div className="item-container">
        <Link to="/" className="home nav-item" onClick={() => setClicks({ homeClick: true, mapClick: false, aboutClick: false, faqClick: false, contactClick: false, loginClick: false, signupClick: false, timetableClick: false })}>
          Home
        </Link>
        <Link to="/map" className="map nav-item" onClick={() => setClicks({ homeClick: false, mapClick: true, aboutClick: false, faqClick: false, contactClick: false, loginClick: false, signupClick: false, timetableClick: false })}>
          Map
        </Link>
        <Link to="/" className="about-us nav-item" onClick={() => setClicks({ homeClick: false, mapClick: false, aboutClick: true, faqClick: false, contactClick: false, loginClick: false, signupClick: false, timetableClick: false })}>
          About Us
        </Link>
        <Link to="/" className="faq nav-item" onClick={() => setClicks({ homeClick: false, mapClick: false, aboutClick: false, faqClick: true, contactClick: false, loginClick: false, signupClick: false, timetableClick: false })}>
          FAQs
        </Link>
        <Link to="/" className="time-table nav-item" onClick={() => setClicks({ homeClick: false, mapClick: false, aboutClick: false, faqClick: false, contactClick: false, loginClick: false, signupClick: false, timetableClick: true })}>
          Time table
        </Link>
        <Link to="/" className="contact nav-item" onClick={() => setClicks({ homeClick: false, mapClick: false, aboutClick: false, faqClick: false, contactClick: true, loginClick: false, signupClick: false, timetableClick: false })}>
          Contact Us
        </Link>
        <Link to="/" className="profile nav-item" onClick={() => setClicks({ homeClick: false, mapClick: false, aboutClick: false, faqClick: false, contactClick: false, loginClick: true, signupClick: false, timetableClick: false })}>
          <img src={UserProfile} alt="Profile" />
          <div className="login">Login</div>
        </Link>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 40px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  .logo-container {
    font-size: 2.5rem;
    font-family: var(--font-family-box);
    letter-spacing: 10px;

    img {
      height: 50px;
    }
  }

  .item-container {
    display: flex;
    column-gap: 30px;
    font-weight: var(--font-w-5);

    .nav-item {
      position: relative;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        left: -2px;
        right: -2px;
        bottom: -5px;
        top: 110%;
        background-color: var(--dark-blue);
        transform: scaleX(0);
        transform-origin: left;
        transition: all 0.3s ease;
      }

      &:hover {
        &::after {
          transform: scaleX(1);
        }
      }
    }

    .profile {
      display: flex;
      column-gap: 10px;

      img {
        width: 20px;
      }
    }
  }
`;
