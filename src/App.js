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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Layout />
        <Layout>
          <Route
            path="/home"
            component={Home}
            exact={true}
          />
          <Route
            path="/login"
            component={Login}
            exact={true}
          />
          <Route
            path="/Register"
            component={Register}
            exact={true}
          />
          <Route
            path="/customer"
            component={Customer}
            exact={true}
          />
          <Route
            path="/addcustomers"
            component={CustomerAdd}
          />
          <Route
            path="/department"
            component={Department}
            exact={true}
          />
          <Route
            path="/employee"
            component={Employee}
            exact={true}
          />
          <Route
            path="/ticket"
            component={Ticket}
            // exact={true}
          />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
