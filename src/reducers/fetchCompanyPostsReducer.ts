const initialState = {
  companyPosts: []
};

const fetchCompanyPostsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_COMPANY_POSTS":
      // console.log(action.payload);

      return {
        ...state,
        companyPosts: action.payload
      };
    default:
      return state;
  }
};

export default fetchCompanyPostsReducer;
