import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Ticket Master App </h2>
      <Link to="/home">
        <img src="ticketmasterimg.png" alt="" />
      </Link>
    </div>
  );
};

export default Home;
