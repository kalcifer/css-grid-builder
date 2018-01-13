import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (
    action.type === `UPDATE_ROWS` &&
    action.payload.rows < 13 &&
    action.payload.rows > 0
  ) {
    return Object.assign({}, state, {
      rows: action.payload.rows
    });
  }
  if (
    action.type === `UPDATE_COLUMNS` &&
    action.payload.columns < 13 &&
    action.payload.columns > 0
  ) {
    return Object.assign({}, state, {
      columns: action.payload.columns
    });
  }
  return state;
};

const initialState = { rows: 2, columns: 2 };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
