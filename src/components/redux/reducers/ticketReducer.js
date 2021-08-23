import * as types from "../store/constant";
const initialState = {
  ticket: [],
};
const ticketReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_TICKET:
      return {
        ...state,
        tickets: action.payload,
      };
    default:
      return { ...state };
  }
};

export default ticketReducer;
