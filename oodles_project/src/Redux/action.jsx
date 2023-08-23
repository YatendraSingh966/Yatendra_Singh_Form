import axios from "axios";
import * as types from "./actionTypes";

export const addTask = (params) => (dispatch) => {
  dispatch({ type: types.POST_DATA_REQUEST, payload: params });

  axios
    .post(`https://httpbin.org/post`, { params: params })
    .then((res) => {
      dispatch({ type: types.POST_DATA_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.POST_DATA_FAILURE });
    });
};
