import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { GridRowMarkings, GridColumnMarkings } from "./markings";

const Panel = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid black;
  position: relative;
`;

const GridPreview = props => {
  const { rows, columns } = props;
  const Grid = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 95%;
    height: 95%;
    display: grid;
    border: 1px solid lightgray;
    ${props =>
      props.rows > 0 ? `grid-template-rows: repeat(${props.rows}, 1fr)` : null};
    ${props =>
      props.columns > 0
        ? `grid-template-columns: repeat(${props.columns}, 1fr)`
        : null};
  `;
  return (
    <div>
      <h2>Preview panel</h2>
      <Panel>
        {props.rows && <GridRowMarkings rows={rows} />}
        {props.columns && <GridColumnMarkings columns={columns} />}
        <Grid rows={rows} columns={columns} />
      </Panel>
    </div>
  );
};

export default connect(state => {
  const { rows, columns } = state;
  return {
    rows,
    columns
  };
})(GridPreview);
