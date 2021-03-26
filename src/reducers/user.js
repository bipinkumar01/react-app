import {
  USER_ME,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(" reducer ", type);
  console.log(" reducer ", payload);
  switch (type) {
    case USER_ME:
      return {
        ...state,
        userinfo: payload,
      };
   
    default:
      return state;
  }
}
