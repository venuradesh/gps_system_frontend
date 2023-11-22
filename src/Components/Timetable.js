import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

//images
import Close from "../assets/close.png";

//data
import timeTable from "../Data/TimetableData";

function Timetable() {
  const data = useMemo(() => timeTable, []);
  const columns = useMemo(
    () => [
      { Header: "Bus Number", accessor: "busNo" },
      { Header: "Route Nuumber", accessor: "routeNo" },
      { Header: "Departure Time", accessor: "departureTime" },
      { Header: "Arrival Time", accessor: "arrivalTime" },
      { Header: "Contact Number", accessor: "contactNo" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Container>
      <div className="header-container">
        <div className="heading">Time Table</div>
      </div>
      <div className="table-container">
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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default Timetable;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 30px;

  .heading {
    font-size: 1.4rem;
    font-weight: var(--font-w-6);
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
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
