import * as types from "../store/constant";

const initialState = {
  customers: [],
  customer:{},
  isloading: false,
};

const customerReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_CUSTOMER:
      return {
        ...state,
        customers: action.payload,
      };
      
      case types.GET_CUSTOMER_BY_ID:
        return {
          ...state,
          customer: action.payload,
        };

    default:
      return { ...state };
  }
};

export default customerReducer;
