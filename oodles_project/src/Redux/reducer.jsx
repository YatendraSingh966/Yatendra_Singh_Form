import * as types from "./actionTypes";

const initialState = {
  tasks: [{}],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.POST_DATA_REQUEST:
      console.log({ ...state, tasks: [...state.tasks, payload] });

      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case types.POST_DATA_SUCCESS:
      return {
        ...state,
      };
    case types.POST_DATA_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { reducer };
