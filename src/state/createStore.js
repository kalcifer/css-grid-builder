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
    MIN < action.payload.rows < MAX
  ) {
    return Object.assign({}, {
      sketch: {
        grid: {
          grid_template_rows: action.payload.rows,
          grid_template_columns: state.sketch.grid.grid_template_columns
        },
        boxes: generateBoxes({ rows: action.payload.rows })
      }
    });
  }
  if (
    action.type === `UPDATE_COLUMNS` &&
    MIN < action.payload.cols < MAX
  ) {
    return Object.assign({}, {
      sketch: {
        grid: {
          grid_template_rows: state.sketch.grid.grid_template_rows,
          grid_template_columns: action.payload.columns
        },
        boxes: generateBoxes({ columns: action.payload.columns })
      }
    });
  }
  if (action.type === "ON_SELECTED") {
    const { id } = action.payload;
    updateSketch({ itemId: id });
  }
  return state;
};

const generateBoxes = ({ rows, columns }) => {
  const boxes = {};
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      boxes[`${r * c}`] = {
        row_start: r,
        column_start: c,
        row_size: 1,
        column_size: 1
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
        'column_size': 1
      },
      '1': {
        'row_start': 0,
        'column_start': 1,
        'row_size': 1,
        'column_size': 1
      },
      '2': {
        'row_start': 1,
        'column_start': 0,
        'row_size': 1,
        'column_size': 1
      },
      '3': {
        'row_start': 1,
        'column_start': 1,
        'row_size': 1,
        'column_size': 1
      }
    }
  }
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
