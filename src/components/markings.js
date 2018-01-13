import React from "react";
import styled from "styled-components";

const RowWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 3%;
  display: grid;
  ${props =>
    props.rows > 0 ? `grid-template-rows: repeat(${props.rows}, 1fr)` : null};
`;

const RowMarking = styled.div`
  border-bottom: 1px solid black;
`;

const ColumnMarking = styled.div`
  border-right: 1px solid black;
`;

const ColumnWrapper = styled.div`
  position: absolute;
  height: 3%;
  width: 100%;
  display: grid;
  ${props =>
    props.columns > 0
      ? `grid-template-columns: repeat(${props.columns}, 1fr)`
      : null};
`;

const GridRowMarkings = ({ rows }) => {
  const rowArr = new Array(parseInt(rows)).fill(1);
  return (
    <RowWrapper rows={rows}>
      {rowArr.map((value, index) => <RowMarking key={index} rowNo={index} />)}
    </RowWrapper>
  );
};

const GridColumnMarkings = ({ columns }) => {
  const columnArr = new Array(parseInt(columns)).fill(1);
  console.log(columns);
  console.log(columnArr);
  return (
    <ColumnWrapper columns={columns}>
      {columnArr.map((value, index) => (
        <ColumnMarking key={index} columnNo={index} />
      ))}
    </ColumnWrapper>
  );
};

export { GridColumnMarkings, GridRowMarkings };
