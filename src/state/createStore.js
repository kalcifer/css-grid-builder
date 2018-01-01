import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (action.type === `UPDATE_ROWS`) {
    return Object.assign({}, state, {
      rows: action.payload.rows
    });
  }
  if (action.type === `UPDATE_COLUMNS`) {
    return Object.assign({}, state, {
      rows: action.payload.columns
    });
  }
  return state;
};

const initialState = { rows: 2, columns: 2 };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
