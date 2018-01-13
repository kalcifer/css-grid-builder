export const updateRows = rows => ({
  type: "UPDATE_ROWS",
  payload: {
    rows
  }
});

export const updateColumns = columns => ({
  type: "UPDATE_COLUMNS",
  payload: {
    columns
  }
});

export const onSelected = id => ({
  type: "ON_SELECTED",
  payload: {
    id
  }
});
