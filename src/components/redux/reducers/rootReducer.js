import { combineReducers } from "redux";
import customer from "./customerReducer";
import department from "./departmentReducer";
import employee from "./employeeReducer";
import ticket from "./ticketReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  customer,
  department,
  employee,
  ticket,
  auth,
});
export default rootReducer;
