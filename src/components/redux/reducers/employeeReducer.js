import * as types from "../store/constant";

const initialState = {
  employees: [],
  employee:{}
};
const employeeReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'GET_EMPLOYEE':
      return {
        ...state,
        employees: action.payload,
      };

      case types.GET_EMPLOYEE_BY_ID:
      return {
        ...state,
        employee: action.payload,
      };

    default:
      return { ...state };
  }
};

export default employeeReducer;
