import React from "react";
import styled from "styled-components";

//images
import Bus from "../../assets/bus.png";

function OtherBusses({ RouteName }) {
  const bus = [
    { busName: "Samitha Express", routeNumber: "138", busNumber: "NB-5565" },
    { busName: "Samitha Express", routeNumber: "138", busNumber: "NB-5565" },
    { busName: "Samitha Express", routeNumber: "138", busNumber: "NB-5565" },
    { busName: "Samitha Express", routeNumber: "138", busNumber: "NB-5565" },
    { busName: "Samitha Express", routeNumber: "138", busNumber: "NB-5565" },
  ];

  return (
    <Container>
      <div className="heading">Other Available Busses</div>
      <div className="route-no">Route Name: {RouteName}</div>
      <div className="separator"></div>
      <div className="bus-cards">
        {bus.map((bus, index) => (
          <div className="bus-card" key={index}>
            <img src={Bus} alt="bus" />
            <div className="content">
              <div className="bus-name">{bus.busName}</div>
              <div className="bus-number">{bus.busNumber}</div>
              <div className="route-number">Route Number: {bus.routeNumber}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default OtherBusses;

const Container = styled.div`
  width: 350px;
  height: calc(100vh - 60px - 130px - 20px);
  position: fixed;
  right: 60px;
  bottom: calc(40px + 50px + 20px);
  background-color: white;
  box-shadow: var(--box-shadow-2);
  padding: 20px;
  border-radius: 12px;
  overflow-y: hidden;

  .heading {
    font-size: 1.5rem;
    text-align: center;
    font-weight: var(--font-w-6);
    margin-bottom: 15px;
  }

  .route-no {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  .separator {
    width: 100%;
    height: 2px;
    background-color: var(--dark-blue);
    margin-top: 15px;
    opacity: 0.4;
  }

  .bus-cards {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 10px;
    height: 420px;
    overflow-y: overlay;

    .bus-card {
      padding: 10px;
      background-color: var(--white);
      display: flex;
      column-gap: 20px;
      margin-bottom: 5px;
      /* overflow: hidden; */
      height: 150px;

      img {
        width: 55px;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .bus-name {
          font-size: 1.1rem;
          font-weight: var(--font-w-6);
        }

        .bus-number {
          font-size: 0.8rem;
          opacity: 0.6;
        }

        .route-number {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
