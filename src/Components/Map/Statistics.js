import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

//images
import Close from "../../assets/close.png";
import Back from "../../assets/back.png";

//data
import statisticsData from "../../Data/statisticsData";
import StatsInsideCities from "./StatsInsideCities";

function Statistics({ statisticsClicked }) {
  const [trCliked, setTrClicked] = useState(false);
  const data = useMemo(() => statisticsData, []);
  const columns = useMemo(
    () => [
      { Header: "Date", accessor: "date" },
      { Header: "Bus Name", accessor: "busName" },
      { Header: "Route Number", accessor: "routeNo" },
      { Header: "Route", accessor: "route" },
      { Header: "Departure Time", accessor: "deptature_time" },
      { Header: "Arrival Time", accessor: "arrival_time" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Container>
      <div className="container">
        <div className="header-container">
          {trCliked ? (
            <img
              src={Back}
              alt="back-btn"
              onClick={() => {
                setTrClicked(false);
              }}
              className="back-btn"
            />
          ) : (
            <></>
          )}
          <div className="heading">Statistics Report</div>
          <img
            src={Close}
            alt="close-btn"
            onClick={() => {
              statisticsClicked(false);
            }}
            className="close-btn"
          />
        </div>
        <div className="table-container">
          {!trCliked ? (
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} onClick={() => setTrClicked(true)}>
                      {row.cells.map((cell) => {
                        return <td {...cell.getCellProps}>{cell.render("Cell")}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <StatsInsideCities />
          )}
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

      .close-btn,
      .back-btn {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.02);
        }
      }

      .back-btn {
        left: 0;
      }
    }
  }

  .table-container {
    width: 100%;
    height: 460px;
    overflow: overlay;

    table {
      width: 100%;
      border-collapse: collapse;
      height: 100%;

      th {
        text-align: left;

        &:first-of-type {
          padding-left: 20px;
        }
      }

      th,
      td {
        padding-top: 10px;
        padding-bottom: 10px;
      }

      tr {
        &:nth-of-type(2n) {
          background-color: var(--white);
        }
      }

      thead {
        background-color: var(--dark-blue);
        color: var(--white);
        pointer-events: none;
      }

      tbody {
        tr {
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: var(--light-blue);
          }
        }
      }
    }
  }
`;
