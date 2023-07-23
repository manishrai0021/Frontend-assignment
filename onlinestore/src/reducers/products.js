import { FETCH_ALL } from "../constants/actionTypes";

export default (state = { products: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        products: action.payload.data,
      };
      default:
      return state;
  }
};
