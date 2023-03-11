import React from "react";
import styled from "styled-components";

function ViewStatsBtn() {
  return <Container>View Statistics</Container>;
}

export default ViewStatsBtn;

const Container = styled.div`
  width: 350px;
  height: 50px;
  position: fixed;
  bottom: 40px;
  right: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-w-6);
  border-radius: 12px;
  box-shadow: var(--box-shadow-2);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--white);
  }
`;
