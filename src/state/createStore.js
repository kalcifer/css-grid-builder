import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  if (
    action.type === `UPDATE_ROWS` &&
    action.payload.rows < 13 &&
    action.payload.rows > 0
  ) {
    return Object.assign({}, state, {
      rows: action.payload.rows,
      selectedItems: []
    });
  }
  if (
    action.type === `UPDATE_COLUMNS` &&
    action.payload.columns < 13 &&
    action.payload.columns > 0
  ) {
    return Object.assign({}, state, {
      columns: action.payload.columns,
      selectedItems: []
    });
  }
  if (action.type === "ON_SELECTED") {
    const { id } = action.payload;
    const selected = state.selectedItems.map(val => val);
    const itemIndex = selected.indexOf(id);
    if (itemIndex === -1) {
      selected.push(id);
    } else {
      selected.splice(itemIndex, 1);
    }
    return Object.assign({}, state, {
      selectedItems: selected
    });
  }
  return state;
};

const initialState = { rows: 2, columns: 2, selectedItems: [] };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
