import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//data
import buses from "../Data/buses";

//imagees
import Cover from "../assets/Owner.png";
import Close from "../assets/close.png";
import InputField from "../Components/InputField";

function BusOwnerDashboard() {
  const [addBus, setAddBus] = useState(false);
  const [buses, setBusses] = useState([]);

  const navigate = useNavigate();

  const email = sessionStorage.getItem('userData');

  useEffect(async () => {
    const b = await axios.get(`http://127.0.0.1:5001/getBusNumbers/?email=${email}`)
    console.log(b.data)
    setBusses(b.data.busnumbers)
  }, []);

  const [busname, setBusName] = useState("");
  const [busnumber, setBusNumber] = useState("");
  const [chassis, setChassis] = useState("");
  const [route, setRoute] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const submitClick = async () => {
    try{
      const result2 = await axios.get(`http://127.0.0.1:5001/addbus/?busname=${busname}&busnumber=${busnumber}&email=${email}&chassis=${chassis}&route=${route}&departure=${departure}&arrival=${arrival}`);
      if (result2.data == true){
        setAddBus(false)
        navigate("/owner_dashboard")
      }
    }
    catch(error){
      console.log(error.message)
    }
  }

  const onBusClick = () =>{
    navigate("/map")
  }

  return (
    <>
      <Container>
        <div className="section1">
          <div className="heading">Owned Buses</div>
          <div className="btn-container">
            {buses.map((bus) => (
              <button className="btn" onClick={onBusClick}>{bus}</button>
            ))}
          </div>
        </div>
        <div className="section2">
          <div className="btn" onClick={() => setAddBus(true)}>
            Add a Bus
          </div>
          <div className="cover">
            <img src={Cover} alt="bus-owner-cover" />
          </div>
        </div>
      </Container>
      {addBus ? (
        <PopOutContainer>
          <div className="close">
            <img src={Close} alt="close" onClick={() => setAddBus(false)} />
          </div>
          <div className="heading-form">Bus Details</div>
          <div className="input-items">
            <InputField content="Bus Name" name="busname" id="busname" type="text" setFunction={setBusName}/>
            <InputField content="Bus Number" name="busnumber" id="busnumber" type="text" setFunction={setBusNumber}/>
            <InputField content="chassis Number" name="chassis" id="chassis" type="text" setFunction={setChassis}/>
            <InputField content="Bus Route" name="route" id="route" type="text" setFunction={setRoute}/>
            <InputField content="Deprature Time" name="departure" id="departure" type="text" setFunction={setDeparture}/>
            <InputField content="Arrival Time" name="arrival" id="arrival" type="text" setFunction={setArrival}/>
            <div className="btn-container">
              <div className="submit btn" onClick={submitClick}>Submit</div>
              <div className="clear btn">Clear</div>
            </div>
          </div>
        </PopOutContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default BusOwnerDashboard;

const Container = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  padding-right: 40px;
  padding-left: 40px;

  .section1 {
    .heading {
      font-size: 2rem;
      font-weight: 800;
      color: var(--blue);
      margin-bottom: 20px;
    }

    .btn-container {
      width: 400px;
      display: flex;
      flex-wrap: wrap;
      row-gap: 10px;
      column-gap: 20px;

      .btn {
        width: 150px;
        height: 50px;
        font-weight: 600;
        color: white;
        background-color: var(--blue);
        border-radius: 12px;
        border: none;
        cursor: pointer;
      }
    }
  }

  .section2 {
    height: 100%;
    flex: 1;

    .btn {
      background-color: var(--dark-blue);
      width: 150px;
      height: 50px;
      border-radius: 12px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-bottom: 100px;
      position: absolute;
      right: 40px;
    }

    .cover {
      position: relative;
      flex: 1;

      img {
        position: absolute;
        width: 600px;
        right: -20px;
        top: 200px;
      }
    }
  }
`;

const PopOutContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 410px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 12px 0px var(--dark-blue);

  .close {
    position: absolute;
    right: 20px;
    cursor: pointer;

    img {
      width: 15px;
    }
  }

  .heading-form {
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
  }

  .btn-container {
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 20px;
    margin-top: 20px;

    .btn {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      color: white;
      cursor: pointer;
    }

    .submit {
      background-color: var(--blue);

      &:hover {
        background-color: var(--dark-blue);
      }
    }

    .clear {
      background-color: var(--graywish-blue);
    }
  }
`;
