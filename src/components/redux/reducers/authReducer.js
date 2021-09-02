import * as types from "../store/constant";

const initialState = {
  loading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_LOADER: {
      return {
        loading: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default auth;
