const initialState = {
  userName: null,
  userEmail: null,
  userPass: null
};

const signupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SIGN_UP":
      console.log("inside sugnup reducer payload :", action.payload.user.id);

      return {
        ...state,
        userName: null,
        userEmail: null,
        userPass: null
      };
    default:
      return state;
  }
};

export default signupReducer;
