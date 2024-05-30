const initialState = {
  noOfBooks: 20,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "sellBook":
      return {
        ...state,
        noOfBooks: state.noOfBooks - 1,
      };
    case "buyBook":
      return {
        ...state,
        noOfBooks: state.noOfBooks + 1,
      };
    default:
      return state;
  }
};

export default bookReducer;
