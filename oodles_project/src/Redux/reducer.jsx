import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  tasks: [],
};

// complete reducer function

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        storedData: payload.data,
        totalPages: payload.totalPages,
      };

    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.POST_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.POST_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.POST_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
