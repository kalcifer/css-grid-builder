import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { GridRowMarkings, GridColumnMarkings } from "./markings";
import GridItem from "./grid-item";
import { onSelected } from "../state/actions";

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
            .map((val, index) => {
              const gridItem = {
                id: index,
                rowStart: index % columns
              }
              return (
                <GridItem
                  columns={columns}
                  rows={rows}
                  key={index}
                  id={index}
                  onSelected={props.onSelected}
                />
              )
            })}
        </Grid>
      </Panel>
    </div>
  );
};

export default connect(
  state => {
    const { grid_template_rows: rows, grid_template_columns: columns } = state.sketch.grid;
    return {
      rows,
      columns
    };
  },
  dispatch => {
    return {
      onSelected: id => dispatch(onSelected(id))
    };
  }
)(GridPreview);
