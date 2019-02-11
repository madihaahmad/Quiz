import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AdminHeader extends Component {
  render() {
    return (
      <ul class="nav nav-pills">
        <li class="nav-item">
          <NavLink className="nav-link" to="/addnew">
            Add New Question
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/overview">
            Overview
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default AdminHeader;
