import React from "react";
import { connect } from "react-redux";
import { updateRows, updateColumns } from "../state/actions";

class Settings extends React.Component {
  constructor() {
    super();
    this.onRowChange = this.onRowChange.bind(this);
    this.onColumnChange = this.onColumnChange.bind(this);
  }
  onRowChange(e) {
    console.log(e.target.value);
    this.props.dispatch(updateRows(e.target.value));
  }
  onColumnChange(e) {
    this.props.dispatch(updateColumns(e.target.value));
  }
  render() {
    return (
      <div>
        <div>
          <label>No of rows</label>
          <input
            type="number"
            name="rows"
            value={this.props.rows}
            onChange={this.onRowChange}
          />
        </div>
        <div>
          <label>No of columns</label>
          <input
            type="number"
            name="columns"
            value={this.props.columns}
            onChange={this.onColumnChange}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => {
  const { rows, columns } = state;
  return { rows, columns };
})(Settings);
