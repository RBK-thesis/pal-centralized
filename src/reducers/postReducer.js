const initialState = {
  items: [],
  scholarship: [],
  job: [],
  training: []
};

const postReducer = (state = initialState, action) => {
  if (action.payload && action.type === "FETCH_POSTS") {
    action.payload.map(post => {
      switch (post.type) {
        case "scholarShip":
          state.scholarship.push(post);
          break;
        case "jop":
          state.job.push(post);
          break;

        case "training":
          state.training.push(post);
          break;
        default:
          break;
      }
    });
  }
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
