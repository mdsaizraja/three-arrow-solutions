import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    mousehover: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.MOUSE_HOVER:
      return {
        ...state,
        mousehover: payload,
      };
    default:
      return state;
  }
};
