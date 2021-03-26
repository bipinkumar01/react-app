import {
  USER_ME,
  SET_MESSAGE,
} from "./types";

import UserService from "../services/user.service";

export const userme = () => (dispatch) => {
  return UserService.userme().then(
    (response) => {
      console.log("user",response.data);
      dispatch({type: USER_ME, payload: response.data });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

