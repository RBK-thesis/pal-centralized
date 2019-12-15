const initialState = {
  userId: null,
  userName: null,
  userEmail: null,
  userToken: null,
  isLogged: false
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log("this is the user  ", action.payload.user);
      localStorage.setItem("token", action.payload.acsessToken);
      localStorage.setItem("userType", action.payload.user.type);
      localStorage.setItem("userId", action.payload.user.id);
      localStorage.setItem("userName", action.payload.user.Name);
      localStorage.setItem("userEmail", action.payload.user.email);

      return {
        ...state,
        userId: action.payload.user.id,
        userName: action.payload.user.Name,
        userEmail: action.payload.user.email,
        userToken: action.payload.acsessToken,
        isLogged: true
      };
    default:
      return state;
  }
};

export default loginReducer;
