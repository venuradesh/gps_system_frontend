import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

//data
import statData from "../../Data/statisticsInsideCities";

function StatsInsideCities() {
  const data = useMemo(() => statData, []);
  const columns = useMemo(
    () => [
      { Header: "City Name", accessor: "cityName" },
      { Header: "Average Arrival Time", accessor: "arrivalTime" },
      { Header: "Average Depature Time", accessor: "departureTime" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, prepareRow, rows, headerGroups } = useTable({ columns, data });

  return (
    <Container>
      <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns) => (
                  <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default StatsInsideCities;

const Container = styled.div``;
