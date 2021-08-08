import * as types from "../store/constant";

const initialState = {
  employees: [],
};
const employeeReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
      };

    default:
      return { ...state };
  }
};

export default employeeReducer;
