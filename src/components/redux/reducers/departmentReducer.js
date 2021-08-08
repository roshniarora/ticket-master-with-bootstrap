import * as types from "../store/constant";

const initialState = {
  department: [],
};

const departmentReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_DEPARTMENT:
      return {
        ...state,
        department: action.payload,
      };

    default:
      return { ...state };
  }
};
export default departmentReducer;
