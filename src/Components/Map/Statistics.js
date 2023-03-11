import React from "react";
import styled from "styled-components";

//images
import Close from "../../assets/close.png";

function Statistics() {
  return (
    <Container>
      <div className="container">
        <div className="header-container">
          <div className="heading">Statistics Report</div>
          <img src={Close} alt="close-btn" />
        </div>
      </div>
    </Container>
  );
}

export default Statistics;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  backdrop-filter: blur(6px);
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 60%;
    height: 80%;
    background-color: white;
    box-shadow: var(--box-shadow-2);
    border-radius: 12px;
    padding: 20px;

    .header-container {
      width: 100%;
      height: 60px;
      display: flex;
      position: relative;

      .heading {
        font-size: 1.4rem;
        font-weight: var(--font-w-6);
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
      }
    }
  }
`;
