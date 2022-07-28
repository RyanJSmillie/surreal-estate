import React from "react";
// import PropTypes from "prop-types";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <p>Filter by City</p>
      <Link className="sidebar-link" to={`/?query={"city": "Manchester"}`}>
        Manchester
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Leeds"}`}>
        Leeds
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Sheffield"}`}>
        Sheffield
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Liverpool"}`}>
        Liverpool
      </Link>
    </div>
  );
}

export default Sidebar;
