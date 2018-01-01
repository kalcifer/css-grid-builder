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
