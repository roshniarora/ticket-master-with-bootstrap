import { combineReducers } from "redux";
import customer from "./customerReducer";

const rootReducer = combineReducers({
  customer,
});
export default rootReducer;
