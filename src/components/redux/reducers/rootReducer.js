import { combineReducers } from "redux";
import customer from "./customerReducer";
import department from "./departmentReducer";
import employee from './employeeReducer'
import ticket from './ticketReducer'

const rootReducer = combineReducers({
  customer,
  department,
  employee,
  ticket
});
export default rootReducer;
