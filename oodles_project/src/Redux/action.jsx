// complete below functions for api requests
import axios from "axios";
import * as types from "./actionTypes";

export const getData = (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  axios(`https://httpbin.org/get`)
    .then((res) => {
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.tasks });
    })
    .catch((err) => {
      dispatch({ type: types.GET_DATA_FAILURE });
    });
};

export const addTask = (params) => (dispatch) => {
  dispatch({ type: types.POST_DATA_REQUEST });

  axios
    .post(`https://httpbin.org/post`, { params: params })
    .then((res) => {
      dispatch({ type: types.POST_DATA_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.POST_DATA_FAILURE });
    });
};
