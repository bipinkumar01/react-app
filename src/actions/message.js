import { SET_MESSAGE, CLEAR_MESSAGE, SUCCESS, ERROR, CLEAR } from "./types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});


export const success = (message) => {
  return { type: SUCCESS, message };
}

export const error = (message) => {
  return { type: ERROR, message };
}

export const clear = () => {
  return { type: CLEAR };
}