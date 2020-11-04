import React from "react";
import { NavLink } from "react-router-dom";
const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className="link" activeClassName="linkActive">
        REGISTRATION
      </NavLink>
      <NavLink to="/login" className="link" activeClassName="linkActive">
        LOGIN
      </NavLink>
    </div>
  );
};

export default AuthNav;
