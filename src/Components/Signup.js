import React, { useState } from "react";
import styled from "styled-components";

//images
import CoverPassenger from "../assets/passenger.png";
import CoverOwner from "../assets/Owner.png";
import Back from "../assets/back.png";

//components
import InputField from "./InputField";

function Signup() {
  const [passengerClick, setPassengerClick] = useState(false);
  const [ownerClick, setOwnerClick] = useState(false);
  const [nextClick, setNextClick] = useState(false);

  return (
    <Container>
      {passengerClick === false && ownerClick === false ? (
        <div className="first-popup">
          <div className="heading">Signup</div>
          <div className="categories">
            <div className="passenger">
              <div className="cover">
                <img src={CoverPassenger} alt="Passenger" />
              </div>
              <div className="btn-container">
                <div className="Passenger btn" onClick={() => setPassengerClick(true)}>
                  Passenger
                </div>
              </div>
            </div>
            <div className="separator"></div>
            <div className="bus-owner">
              <div className="cover">
                <img src={CoverOwner} alt="Bus Owner" />
              </div>
              <div className="btn-container">
                <div className="btn" onClick={() => setOwnerClick(true)}>
                  Bus Owner
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {passengerClick ? (
        <Passenger>
          <div className="cover">
            <img src={CoverPassenger} alt="cover-passenger" />
          </div>
          <div className="back" onClick={() => setPassengerClick(false)}>
            <img src={Back} alt="back-btn" />
          </div>
          <div className="passenger-background"></div>
          <div className="content-container">
            <div className="background-interior"></div>
            <div className="passenger-heading">Signup for Passengers</div>
            <div className="seprator"></div>
            <div className="form">
              <div className="heading-form">Personal Information</div>
              <div className="input-items">
                <InputField content="First Name" name="firstname" id="firstname" type="text" />
                <InputField content="Last Name" name="lastname" id="lastname" type="text" />
                <InputField content="Email address" name="email" id="email" type="email" />
                <InputField content="Phone Number" name="phone" id="phone" type="tel" />
                <InputField content="Password" name="password" id="password" type="Password" />
                <InputField content="Confirm Password" name="con-password" id="con-password" type="Password" />
                <div className="btn-container">
                  <div className="signup-btn btn">Signup</div>
                  <div className="clear btn">Clear</div>
                </div>
              </div>
            </div>
          </div>
        </Passenger>
      ) : (
        <></>
      )}
      {ownerClick ? (
        <Owner>
          <div className="cover">
            <img src={CoverOwner} alt="cover-passenger" />
          </div>
          <div className="back" onClick={() => setOwnerClick(false)}>
            <img src={Back} alt="back-btn" />
          </div>
          <div className="passenger-background"></div>
          <div className="content-container">
            <div className="background-interior"></div>
            <div className="passenger-heading">Signup for Bus Owners</div>
            <div className="seprator"></div>
            <div className="form">
              {!nextClick ? (
                <>
                  <div className="heading-form">Personal Information</div>
                  <div className="input-items">
                    <InputField content="First Name" name="bus-firstname" id="bus-firstname" type="text" />
                    <InputField content="Last Name" name="bus-lastname" id="bus-lastname" type="text" />
                    <InputField content="Email address" name="bus-email" id="bus-email" type="email" />
                    <InputField content="Phone Number" name="bus-phone" id="bus-phone" type="tel" />
                    <InputField content="Password" name="bus-password" id="bus-password" type="Password" />
                    <InputField content="Confirm Password" name="bus-con-password" id="bus-con-password" type="Password" />
                    <div className="btn-container">
                      <div className="next-btn btn" onClick={() => setNextClick(true)}>
                        Next
                      </div>
                      <div className="clear btn">Clear</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="heading-form">Bus Details</div>
                  <div className="input-items">
                    <InputField content="Bus Name" name="busname" id="busname" type="text" />
                    <InputField content="Bus Number" name="busnumber" id="busnumber" type="text" />
                    <InputField content="chassis Number" name="chassis" id="chassis" type="text" />
                    <InputField content="Bus Route" name="route" id="route" type="text" />
                    <InputField content="Deprature Time" name="departure" id="departure" type="text" />
                    <InputField content="Arrival Time" name="arrival" id="arrival" type="text" />
                    <div className="btn-container">
                      <div className="submitbtn btn">Submit</div>
                      <div className="next-btn btn" onClick={() => setNextClick(false)}>
                        Back
                      </div>
                      <div className="clear btn">Clear</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Owner>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 0;

  .heading {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: var(--font-w-7);
    font-family: var(--font-family-round);
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  .categories {
    display: flex;
    width: 100%;
    height: 100%;
    column-gap: 20px;

    .passenger {
      flex: 1;
      width: 100%;
      height: 100%;

      .cover {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    .bus-owner {
      flex: 1;
      width: 100%;
      height: 100%;

      .cover {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    .btn-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;

      .btn {
        width: 80%;
        background-color: var(--dark-blue);
        height: 50px;
        border-radius: 12px;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-weight: var(--font-w-6);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--blue);
        }
      }
    }

    .separator {
      height: 80%;
      width: 2px;
      background-color: var(--blue);
      position: relative;
      top: 20px;
    }
  }
`;

const Passenger = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  .back {
    position: absolute;
    z-index: 100;
    cursor: pointer;
    transition: all 0.3s ease;
    bottom: 0;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 30px;
    }
  }

  .cover {
    position: absolute;
    left: -180px;
    top: -30px;
    z-index: 1;

    img {
      width: 70%;
    }
  }

  .passenger-background {
    position: absolute;
    margin: -20px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    backdrop-filter: blur(5px);
    z-index: 2;
  }

  .passenger-heading {
    position: absolute;
    font-size: 1.5rem;
    font-weight: var(--font-w-7);
    font-family: var(--font-family-round);
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    z-index: 10;
    transform: rotateZ(270deg) translateX(-55px);
    bottom: 50%;
    left: -90px;
    pointer-events: none;
  }

  .content-container {
    width: 85%;
    height: calc(100% + 10px);
    background-color: transparent;
    position: absolute;
    z-index: 10;
    border-radius: 12px;
    box-shadow: var(--box-shadow-2);
    right: -5px;
    top: -5px;
    overflow: hidden;

    .background-interior {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      opacity: 0.7;
    }

    .seprator {
      width: 2px;
      height: 80%;
      background-color: var(--blue);
      position: absolute;
      left: 100px;
      top: 50%;
      transform: translateY(-50%);
    }

    .form {
      position: absolute;
      left: 130px;
      top: 30px;
      right: 40px;
      bottom: 20px;

      .heading-form {
        font-size: 1.3rem;
        font-weight: var(--font-w-7);
        font-family: var(--font-family-round);
        color: var(--blue);
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }

      .input-items {
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        .btn-container {
          display: flex;
          align-items: center;
          justify-content: left;
          column-gap: 20px;
          margin-top: 20px;

          .btn {
            width: 200px;
            height: 40px;
            background-color: var(--dark-blue);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            color: var(--white);
            transition: all 0.3s ease;
            cursor: pointer;

            &:hover {
              background-color: var(--blue);
            }
          }
        }
      }
    }
  }
`;

const Owner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  .back {
    position: absolute;
    z-index: 100;
    cursor: pointer;
    transition: all 0.3s ease;
    bottom: 0;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 30px;
    }
  }

  .cover {
    position: absolute;
    left: -180px;
    top: -30px;
    z-index: 1;

    img {
      width: 70%;
    }
  }

  .passenger-background {
    position: absolute;
    margin: -20px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    backdrop-filter: blur(5px);
    z-index: 2;
  }

  .passenger-heading {
    position: absolute;
    font-size: 1.5rem;
    font-weight: var(--font-w-7);
    font-family: var(--font-family-round);
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    z-index: 10;
    transform: rotateZ(270deg) translateX(-55px);
    bottom: 50%;
    left: -90px;
    pointer-events: none;
  }

  .content-container {
    width: 85%;
    height: calc(100% + 10px);
    background-color: transparent;
    position: absolute;
    z-index: 10;
    border-radius: 12px;
    box-shadow: var(--box-shadow-2);
    right: -5px;
    top: -5px;
    overflow: hidden;

    .background-interior {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      opacity: 0.7;
    }

    .seprator {
      width: 2px;
      height: 80%;
      background-color: var(--blue);
      position: absolute;
      left: 100px;
      top: 50%;
      transform: translateY(-50%);
    }

    .form {
      position: absolute;
      left: 130px;
      top: 30px;
      right: 40px;
      bottom: 20px;

      .heading-form {
        font-size: 1.3rem;
        font-weight: var(--font-w-7);
        font-family: var(--font-family-round);
        color: var(--blue);
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }

      .input-items {
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        .btn-container {
          display: flex;
          align-items: center;
          justify-content: left;
          column-gap: 20px;
          margin-top: 20px;

          .btn {
            width: 200px;
            height: 40px;
            background-color: var(--dark-blue);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            color: var(--white);
            transition: all 0.3s ease;
            cursor: pointer;

            &:hover {
              background-color: var(--blue);
            }
          }
        }
      }
    }
  }
`;
