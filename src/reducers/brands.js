import { REQUEST_BRANDS } from "../actions";
import { RECIVE_BRANDS } from "../actions";

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case REQUEST_BRANDS:
      return {
        ...state,
        brands: []
      };
    case RECIVE_BRANDS:
      return {
        ...state,
        brands: action.payload
      };
    default:
      return state;
  }
};
