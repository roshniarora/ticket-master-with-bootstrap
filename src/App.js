import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
import Dashboard from "./components/auth/dashboard";
import { PrivateRoute } from "./components/utility/privateRoute";

// const location = window.location.pathname;
function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Layout>
          <Switch>
            {token ? (
              <div>
                <Redirect from="/" to="/home" exact />
                <Route path="/home" component={Home} exact={true} />
                <PrivateRoute
                  path="/customer"
                  component={Customer}
                  exact={true}
                />
                <PrivateRoute
                  path="/addcustomer"
                  component={CustomerAdd}
                  exact={true}
                />
                <PrivateRoute
                  path="/customer/:id"
                  component={CustomerShow}
                  exact={true}
                />
                <PrivateRoute
                  path="/editcustomer/:id"
                  component={CustomerEdit}
                  exact={true}
                />
                <PrivateRoute
                  path="/department"
                  component={Department}
                  exact={true}
                />
                <PrivateRoute
                  path="/department/:id"
                  component={DepartmentShow}
                  exact={true}
                />
                <PrivateRoute
                  path="/employee"
                  component={Employee}
                  exact={true}
                />
                <PrivateRoute
                  path="/addemployee"
                  component={AddEmployee}
                  exact={true}
                />
                <PrivateRoute
                  path="/employee/:id"
                  component={EmployeeShow}
                  exact={true}
                />
                <PrivateRoute
                  path="/editemployee/:id"
                  component={EmployeeEdit}
                  exact={true}
                />
                <PrivateRoute path="/ticket" component={Ticket} exact={true} />
                <PrivateRoute
                  path="/addticket"
                  component={AddTicket}
                  exact={true}
                />
              </div>
            ) : (
              <div>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/home" component={Home} exact={true} />
                <Route path="/login" component={Login} exact={true} />
                <Route path="/register" component={Register} exact={true} />
              </div>
            )}
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
