import /* we need our action types here*/ "../actions";
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  errorMessage: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case "FETCHING":
      return { ...state, fetching: true };
    case "FETCHED":
      return {
        ...state,
        chars: action.chars,
        fetching: false,
        fetched: true
      };
    case "ERROR":
      return [
        ...state,
        { error: action.errorMessage, fetching: false, fetched: false }
      ];
    default:
      return state;
  }
};
