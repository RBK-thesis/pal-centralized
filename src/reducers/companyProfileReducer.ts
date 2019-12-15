import { FETCH_COMPANY } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action: any) {
  // console.log("inside reducer");
  switch (action.type) {
    case FETCH_COMPANY:
      // console.log("reducer", initialState.items);
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
