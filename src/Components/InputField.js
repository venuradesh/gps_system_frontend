import React from "react";
import styled from "styled-components";

const InputField = ({ type, name, id, content, setFunction }) => {
  return (
    <Container>
      <input type={type} name={name} id={id} className={`${type} input`} autoComplete="off" required onChange={(e) => setFunction(e.target.value)} />
      <label htmlFor={id} className={`label-container `}>
        <span className={`label-content`}>{content}</span>
      </label>
    </Container>
  );
};

export default InputField;

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: text;

  .label-container {
    width: 100%;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0px;
    border-bottom: 1px solid var(--blue);

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: -100%;
      bottom: 0px;
      border-bottom: 2px solid var(--dark-blue);
      transition: all 0.3s ease;
    }

    .label-content {
      position: absolute;
      bottom: 0;
      color: var(--blue);
      font-size: 1rem;
      opacity: 0.5;
      transition: all 0.3s ease;
    }
  }

  .input {
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    padding-top: calc(40px - 16px);
    font-size: 1rem;
    background-color: transparent;

    &:focus,
    &:valid {
      & + .label-container {
        &::after {
          left: 0;
        }

        .label-content {
          font-size: 0.7rem;
          bottom: calc(1rem + 5px);
        }
      }
    }
  }
`;
