import * as types from "../store/constant";

const initialState = {
  departments: [],
  department: {},
};

const departmentReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_DEPARTMENT:
      return {
        ...state,
        departments: action.payload,
      };

      
        case types.GET_DEPARTMENT_BY_ID:
          return {
            ...state,
            department: action.payload,
          };

    default:
      return { ...state };
  }
};
export default departmentReducer;
