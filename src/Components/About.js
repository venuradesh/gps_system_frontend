import React from "react";
import styled from "styled-components";

import Logo from "../assets/logo-long.png";
import Cover from "../assets/about-cover.jpg";

function About() {
  return (
    <Container>
      <div className="header-container">About Us</div>
      <div className="content-container">
        <div className="cover-container">
          <div className="logo-container">
            <img src={Logo} alt="logo-preview" />
          </div>
          <div className="cover">
            <img src={Cover} alt="cover" />
          </div>
        </div>
        <div className="separator"></div>
        <div className="text-content">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. the industry's standard dummy text ever since the 1500s </p>
        </div>
      </div>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 30px;

  .header-container {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: var(--font-w-7);
    font-family: var(--font-family-round);
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-container {
    display: flex;
    height: 100%;
    column-gap: 20px;

    .cover-container {
      flex: 1;
      height: 100%;

      .logo-container {
        display: flex;
        justify-content: center;
        height: 40%;
        align-items: center;

        img {
          width: 50%;
        }
      }

      .cover {
        display: flex;
        justify-content: center;
        height: 60%;

        img {
          width: 100%;
        }
      }
    }

    .separator {
      width: 2px;
      height: 80%;
      background-color: var(--blue);
      position: relative;
      top: 30px;
    }

    .text-content {
      flex: 1;
      width: 100%;
      font-size: 0.8rem;
      font-weight: var(--font-w-3);
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      padding-top: 20px;

      p {
        text-indent: 20px;
      }
    }
  }
`;
