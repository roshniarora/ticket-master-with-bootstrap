import { combineReducers } from "redux";
import customer from "./customerReducer";
import department from "./departmentReducer";

const rootReducer = combineReducers({
  customer,
  department,
  // employee
});
export default rootReducer;
