const initialState = {
  userToken: localStorage.getItem("token"),
  isLogged: false
};

const isLoggedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "IS_LOGGED":
      if (state.userToken)
        return {
          ...state,
          isLogged: false
        };
      break;
    default:
      return state;
  }
};

export default isLoggedReducer;
