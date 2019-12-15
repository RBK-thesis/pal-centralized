const initialState = {
  favPosts: []
};

const favoriteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_FAVORITE":
      return {
        ...state,
        favPosts: action.payload
      };
    default:
      return state;
  }
};

export default favoriteReducer;
