import * as types from "../store/constant";

const initialState = {
  customers: [],
  isloading: false,
};

const customerReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    case types.GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    default:
      return { ...state };
  }
};

export default customerReducer;
