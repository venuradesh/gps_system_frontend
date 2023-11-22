import React , { useState }from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//images
import Cover from "../assets/login.png";
import Logo from "../assets/logo-long.png";

//components
import InputField from "./InputField";

function Login({ setClicks, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginHandler = async () => {
    try{
      const result = await axios.get(`http://127.0.0.1:5001/login/?email=${email}&password=${password}&type=passenger`);
      console.log(result)
      if (result.data == true){
        navigate("/map")
      }
      else{
        navigate("/register")
      }
    }
    catch (error){
      console.log(error.message)
    }
  };

  return (
    <Container>
      <div className="cover-container">
        <img src={Cover} alt="cover" />
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="content-container">
        <div className="upper-items">
          <div className="heading">Login</div>
          <div className="form-container">
            <div className="username">
              <InputField content="email" type="text" name="email" id="email" setFunction={setEmail}/>
            </div>
            <div className="password">
              <InputField content="password" type="text" name="password" id="password" setFunction={setPassword}/>
            </div>
            <div className="forgot-password">
              <div className="content">Forgot password</div>
            </div>
            <div className="btn-container">
              <div className="login" onClick={() => loginHandler()}>
                Login
              </div>
            </div>
          </div>
        </div>
        <div className="lower-items">
          <div className="create-new-acc" onClick={() => setClicks({ homeClick: false, mapClick: false, aboutClick: false, faqClick: false, contactClick: false, loginClick: false, signupClick: true })}>
            create a new account
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .cover-container {
    flex: 3;
    margin-top: -20px;
    margin-left: -20px;
    margin-bottom: -20px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.5;

      &.logo {
        width: 150px;
        position: absolute;
        height: 70px;
        left: 50%;
        top: 50px;
        transform: translateX(-50%);
        opacity: 1;
      }
    }
  }

  .content-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

    .form-container {
      padding-inline: 20px;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }

    .forgot-password {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      margin-top: 15px;

      .content {
        width: max-content;
        position: relative;
        cursor: pointer;

        &::after {
          content: "";
          position: absolute;
          left: -5px;
          right: -5px;
          bottom: -3px;
          top: 17px;
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
    }

    .btn-container {
      display: flex;
      align-items: center;
      justify-content: center;

      .login {
        margin-top: 15px;
        width: 100%;
        height: 50px;
        border-radius: 12px;
        background-color: var(--dark-blue);
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-weight: var(--font-w-7);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--blue);
        }
      }
    }

    .lower-items {
      padding-inline: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      cursor: pointer;
      position: relative;

      .create-new-acc {
        width: max-content;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: -5px;
          right: -5px;
          bottom: -3px;
          top: 17px;
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
    }
  }
`;
