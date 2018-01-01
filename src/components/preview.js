import React from "react";
import { connect } from "react-redux";

export default connect(state => {
  const { rows, columns } = state;
  return {
    rows,
    columns
  };
})(({ rows, columns }) => {
  return (
    <div>
      <div>{rows}</div>
      <div>{columns}</div>
    </div>
  );
});
