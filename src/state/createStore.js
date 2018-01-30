import { createStore as reduxCreateStore } from "redux";

/*
  state = {
    rows: array,
    columns: array,
    sketches:{
      'id': {
        grid:{
          grid_template_rows,
          grid_gap:
        },
        boxes:{
          'id': {
            row_start: 1,
            column_start: 1,
            row_size: 2,
            column_size: 1
          } 
        }
      }
    }
  }
*/

const MAX = 13;
const MIN = 0;

const reducer = (state, action) => {
  if (
    action.type === `UPDATE_ROWS` &&
    MIN < action.payload.rows && action.payload.rows < MAX
  ) {
    const rows = parseInt(action.payload.rows);
    return Object.assign({}, {
      sketch: {
        grid: {
          grid_template_rows: rows,
          grid_template_columns: state.sketch.grid.grid_template_columns
        },
        boxes: generateBoxes({ rows: rows, columns: state.sketch.grid.grid_template_columns })
      }
    });
  }
  if (
    action.type === `UPDATE_COLUMNS` &&
    MIN < action.payload.columns && action.payload.columns < MAX
  ) {
    const col = parseInt(action.payload.columns)
    return Object.assign({}, {
      sketch: {
        grid: {
          grid_template_rows: state.sketch.grid.grid_template_rows,
          grid_template_columns: col
        },
        boxes: generateBoxes({ rows: state.sketch.grid.grid_template_rows, columns: col })
      }
    });
  }
  if (action.type === "ON_SELECTED") {
    const { id } = action.payload;
    const { boxes } = state.sketch;
    const newState = Object.assign({}, state, {
      sketch: {
        grid: state.sketch.grid,
        boxes: Object.keys(boxes).reduce((prev, key) => {
          if (`${id}` === key) {
            prev[key] = Object.assign({}, boxes[key], {
              selected: !boxes[key].selected
            })
          }
          return prev;
        }, Object.assign({}, boxes))
      }
    });
    return newState;
  }
  return state;
};

const generateBoxes = ({ rows, columns }) => {
  const boxes = {};
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const id = r * columns + c
      boxes[id] = {
        row_start: r,
        column_start: c,
        row_size: 1,
        column_size: 1,
        selected: false
      }
    }
  }
  return boxes;
}

const updateSketch = itemProps => {

}

const initialState = {
  rows: 2, columns: 2, sketch: {
    grid: {
      'grid_template_rows': 2,
      'grid_template_columns': 2,
    },
    boxes: {
      '0': {
        'row_start': 0,
        'column_start': 0,
        'row_size': 1,
        'column_size': 1,
        'selected': false
      },
      '1': {
        'row_start': 0,
        'column_start': 1,
        'row_size': 1,
        'column_size': 1,
        'selected': false
      },
      '2': {
        'row_start': 1,
        'column_start': 0,
        'row_size': 1,
        'column_size': 1,
        'selected': false
      },
      '3': {
        'row_start': 1,
        'column_start': 1,
        'row_size': 1,
        'column_size': 1,
        'selected': false
      }
    }
  }
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
