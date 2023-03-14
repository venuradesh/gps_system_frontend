import React, { useState } from "react";
import styled from "styled-components";

//components
import InputField from "../InputField";

function SearchMapContainer({ setBusNumber, setRoute, searchClicked, setSearchClicked, error }) {
  const [routeName, setRouteName] = useState("");
  const [bus, setBus] = useState("");

  const onSubmitHandle = () => {
    searchClicked.search = false;

    if (bus && !routeName) {
      setBusNumber(bus);
      setSearchClicked({ search: true });
    }
  };

  return (
    <Container>
      <div className="heading">Search By Route or Bus Number</div>
      <div className="input-container">
        <InputField content="Route Name" id="route" name="route" type="text" setFunction={setRouteName} />
        <InputField content="Bus Number (NB-4555)" id="busNumber" name="busNumber" type="text" setFunction={setBus} />
      </div>
      {error ? <div className="error-container">{error}</div> : <></>}
      <div className="btn-container">
        <div className="btn" onClick={() => onSubmitHandle()}>
          Search
        </div>
      </div>
    </Container>
  );
}

export default SearchMapContainer;

const Container = styled.div`
  position: fixed;
  bottom: 40px;
  left: 40px;
  background-color: white;
  width: 350px;
  height: 300px;
  box-shadow: var(--box-shadow-2);
  border-radius: 12px;
  padding: 20px;
  z-index: 10;

  .heading {
    font-size: 1.6rem;
    padding-inline: 50px;
    text-align: center;
    font-weight: var(--font-w-6);
    color: var(--dark-blue);
    margin-bottom: 10px;
  }

  .input-container {
    padding-inline: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    margin-bottom: 30px;
  }

  .error-container {
    font-size: 0.8rem;
    opacity: 0.8;
    color: red;
    margin-top: -20px;
    margin-bottom: 10px;
    text-align: center;
  }

  .btn-container {
    padding-inline: 20px;

    .btn {
      width: 100%;
      height: 50px;
      border-radius: 12px;
      background-color: var(--dark-blue);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--blue);
      }
    }
  }
`;
