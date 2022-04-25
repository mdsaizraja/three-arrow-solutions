import { ActionTypes } from "../constants/ActionTypes";

export const setDetails = (mousehover) => {
  return {
    type: ActionTypes.MOUSE_HOVER,
    payload: mousehover,
  };
};

