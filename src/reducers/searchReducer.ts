const initialState = {
  postResult: []
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SEARCH_START":
      // console.log(action.payload);

      return {
        ...state,
        postResult: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
