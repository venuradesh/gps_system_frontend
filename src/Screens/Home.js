import React from "react";
import styled from "styled-components";

//components
import About from "../Components/About";
import Contact from "../Components/Contact";

//images
import Cover from "../assets/landing-page.png";
import CloseBtn from "../assets/close.png";

function Home({ clicks, setClicks }) {
  return (
    <Container>
      <div className="background"></div>
      <div className="home">
        <div className="text-content">
          <div className="heading">With Love, With Secure</div>
          <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          <div className="btn-container">
            <div className="btn">Signup Now For Free</div>
          </div>
        </div>
        <div className="cover-container">
          <img src={Cover} alt="cover" />
        </div>
      </div>
      {clicks.aboutClick || clicks.contactClick || clicks.loginClick ? (
        <PopupContainer>
          <div className="container">
            <div className="close-btn" onClick={() => setClicks({ homeClick: false, mapClick: false, aboutClick: false, faqClick: true, contactClick: false, loginClick: false })}>
              <img src={CloseBtn} alt="Close Button" />
            </div>
            {clicks.aboutClick ? <About /> : clicks.contactClick ? <Contact /> : <></>}
          </div>
        </PopupContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
  z-index: 90;

  .background {
    position: fixed;
    width: 70vw;
    height: calc(100vh);
    background-image: linear-gradient(to right, var(--dark-blue), transparent);
    opacity: 0.5;
    z-index: 0;
  }

  .home {
    width: 100vw;
    height: calc(100vh - 60px);
    position: relative;
    top: 60px;
    display: flex;
    align-items: center;
    padding-inline: 50px;
    z-index: 0;

    .text-content {
      width: 500px;

      .heading {
        font-size: 2.5rem;
        font-weight: var(--font-w-6);
        margin-bottom: 20px;
      }

      .content {
        font-size: 1rem;
        font-weight: var(--font-w-4);
        margin-bottom: 20px;
      }

      .btn-container {
        display: flex;
        width: max-content;

        .btn {
          padding-inline: 40px;
          padding-top: 20px;
          padding-bottom: 20px;
          background-color: var(--dark-blue);
          border-radius: 12px;
          color: var(--white);
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: var(--blue);
          }
        }
      }
    }

    .cover-container {
      position: absolute;
      bottom: 20px;
      right: 100px;

      img {
        width: 600px;
      }
    }
  }
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -60px;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110;

  .container {
    width: 800px;
    height: 500px;
    background-color: white;
    box-shadow: var(--box-shadow-2);
    border-radius: 12px;
    padding: 20px;
    position: relative;

    .close-btn {
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 20px;

      img {
        width: 20px;
      }
    }
  }
`;
