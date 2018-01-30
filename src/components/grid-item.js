import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  border-right: 1px dotted lightgray;
  border-bottom: 1px dotted lightgray;
  height: ${props => `${400 / props.rows}px`};
  width: ${props => `${400 / props.columns}px`};
  cursor: pointer;
  box-sizing: border-box;
  ${props => (props.selected ? `border: 4px solid pink` : "")};
  :hover {
    border: 1px solid blue;
  }
`;

class GridItem extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);

  }
  onClick() {
    this.props.onSelected(this.props.id)
  }
  render() {
    const { rows, columns, selected } = this.props;
    return (
      <StyledItem
        onClick={this.onClick}
        rows={rows}
        columns={columns}
        selected={selected}
      />
    );
  }
}

export default GridItem;
