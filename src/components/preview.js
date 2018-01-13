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

const GridItem = styled.div`
  border-right: 1px dotted lightgray;
  border-bottom: 1px dotted lightgray;
  height: ${props => `${400 / props.rows}px`};
  width: ${props => `${400 / props.columns}px`};
`;

const GridPreview = props => {
  const { rows, columns } = props;
  const Grid = styled.div`
    position: absolute;
    display: grid;
    ${props =>
      props.rows > 0
        ? `grid-template-rows: repeat(${props.rows},  ${400 / props.rows}px)`
        : null};
    ${props =>
      props.columns > 0
        ? `grid-template-columns: repeat(${props.columns},  ${400 /
            props.columns}px)`
        : null};
    width: 100%;
    height: 100%;
  `;
  return (
    <div>
      <h2>Preview panel</h2>
      <Panel>
        {props.rows && <GridRowMarkings rows={rows} />}
        {props.columns && <GridColumnMarkings columns={columns} />}
        <Grid rows={rows} columns={columns}>
          {new Array(columns * rows)
            .fill(1)
            .map(() => <GridItem columns={columns} rows={rows} />)}
        </Grid>
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
