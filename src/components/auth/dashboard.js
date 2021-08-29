import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Dashboard = () => {
  return (
    <div className="home">
      <Link to="/">
        <img src="ticketmasterimg.png" alt="" />
      </Link>
    </div>
  );
};

export default Dashboard;
