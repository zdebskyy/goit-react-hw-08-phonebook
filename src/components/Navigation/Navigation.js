import React from "react";
import "./Navigation.css";
import UserMenu from "../UserMenu/UserMenu";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import regastrationSelectors from "../../redux/registration/registrationSelectors";
import AuthNav from "../AuthNav/AuthNav";

const Navigation = ({ isAuthenticated }) => {
  return (
    <header className="headerStyle">
      <nav className="list">
        <NavLink to="/" exact className="link" activeClassName="linkActive">
          HOME
        </NavLink>
        {isAuthenticated && (
          <NavLink to="/contacts" className="link" activeClassName="linkActive">
            CONTACTS
          </NavLink>
        )}
      </nav>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: regastrationSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
