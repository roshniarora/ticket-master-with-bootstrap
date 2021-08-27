import "./App.css";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import Navbar from "./components/layout/navbar";
// import CustomerAdd from "./components/customer/addCustomer";
import Customer from "./components/pages/customer/customers";
import Employee from "./components/pages/Employee/employee";
import Ticket from "./components/pages/Ticket/ticket";
import Department from "./components/pages/Department/department";
import Home from "./components/auth/home";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import CustomerAdd from "./components/pages/customer/addCustomer";
import AddEmployee from "./components/pages/Employee/addEmployee";
import CustomerShow from "./components/pages/customer/showCustomer";
import DepartmentShow from "./components/pages/Department/showDepartment";
import CustomerEdit from "./components/pages/customer/editCustomer";
import AddTicket from "./components/pages/Ticket/addTicket";
import EmployeeShow from "./components/pages/Employee/showEmployee";
import EmployeeEdit from "./components/pages/Employee/editEmployee";


function App() {

const token = localStorage.getItem("token")

  return (
    <BrowserRouter>
      <div>
        <Navbar />
      
        <Layout>

        

          <Route path="/" component={Home} exact={true}/>
          <Route path="/login" component={Login} exact={true}/>
          <Route path="/Register" component={Register} exact={true}/>
          <Route path="/customer" component={Customer} exact={true}/>
          <Route path="/addcustomer" component={CustomerAdd} exact={true}/>
          <Route path="/customer/:id" component={CustomerShow} exact={true}/>
           <Route path="/editcustomer/:id" component={CustomerEdit} exact={true}/>
          <Route path="/department" component={Department} exact={true}/>
           <Route path="/department/:id" component={DepartmentShow} exact={true}/>
          <Route path="/employee" component={Employee} exact={true}/>
           <Route path="/addemployee" component={AddEmployee} exact={true}/>
           <Route path="/employee/:id" component={EmployeeShow} exact={true}/>
            <Route path="/editemployee/:id" component={EmployeeEdit}exact={true}/>
          <Route path="/ticket" component={Ticket} exact={true}/>
          <Route path="/addticket" component={AddTicket}exact={true}/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
