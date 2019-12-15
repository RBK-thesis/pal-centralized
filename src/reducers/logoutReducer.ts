const initialState = {
  userToken: localStorage.getItem("token"),
  userId: null,
  userName: null,
  userEmail: null,
  isLogged: true
};

const logouReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGOUT_SUCCESS":
      console.log("inside logout sucess switch");

      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("userType");
      localStorage.clear();

      return {
        ...state,
        userToken: null,
        userId: null,
        userName: null,
        userEmail: null,
        isLogged: false
      };
    default:
      return state;
  }
};

export default logouReducer;
