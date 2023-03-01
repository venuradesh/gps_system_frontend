import React from "react";
import styled from "styled-components";

//images
import Phone from "../assets/phone.png";
import Location from "../assets/location-blue.png";
import Email from "../assets/email.png";
import InputField from "./InputField";

function Contact() {
  const onSubmitClick = () => {};
  const onClearClick = () => {};

  return (
    <Container>
      <div className="heading">Contact Us</div>
      <div className="content">
        <div className="basic-contacts">
          <div className="phone item">
            <img src={Phone} alt="phone" />
            <div className="inside">
              +94 (0) 77 123 4567
              <br />
              +94 (0) 77 123 4568
            </div>
          </div>
          <div className="location item">
            <img src={Location} alt="location" />
            <div className="inside">
              B-49, <br />
              Wickrambahu 2nd lane, <br />
              Gampola. <br />
            </div>
          </div>
          <div className="email item">
            <img src={Email} alt="email" />
            <div className="inside">
              info@gmail.com <br />
              info@bts.ac.com <br />
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="form">
          <div className="firstName">
            <InputField type="text" name="firstName" id="firstName" content="First Name" />
            <InputField type="text" name="lastName" id="lastName" content="Last Name" />
          </div>
          <div className="email">
            <InputField type="email" name="email" id="email" content="Email address" />
          </div>
          <div className="message">
            <textarea name="message" id="message" placeholder="Enter Your message"></textarea>
          </div>
          <div className="btn-container">
            <div className="submit-btn btn" onClick={() => onSubmitClick()}>
              Submit
            </div>
            <div className="clear-btn btn" onClick={() => onClearClick()}>
              Clear
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  .heading {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: var(--font-w-7);
    font-family: var(--font-family-round);
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    width: 100%;
    height: 100%;
    column-gap: 20px;
    flex: 2;

    .basic-contacts {
      display: flex;
      flex-direction: column;
      row-gap: 40px;
      height: 80%;
      justify-content: space-around;

      .item {
        display: flex;
        align-items: center;
        column-gap: 20px;
      }

      img {
        width: 60px;
      }
    }

    .separator {
      width: 2px;
      height: 80%;
      background-color: var(--blue);
      position: relative;
      top: 10px;
    }

    .form {
      flex: 3;
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .firstName {
        display: flex;
        column-gap: 30px;
      }

      .message {
        textarea {
          width: 100%;
          height: 150px;
          resize: none;
          border: 1px solid var(--blue);
          border-radius: 8px;
          padding: 10px;

          &::placeholder {
            font-size: 1rem;
            font-family: var(--font-family-normal);
            color: var(--blue);
            opacity: 0.5;
          }
        }
      }

      .btn-container {
        width: 100%;
        display: flex;
        column-gap: 20px;

        .btn {
          width: 100%;
          background-color: var(--dark-blue);
          height: 50px;
          border-radius: 8px;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:hover {
            background-color: var(--blue);
          }
        }
      }
    }
  }
`;
