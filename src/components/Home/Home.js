import React from "react";
import { Link } from "react-router-dom";
import regastrationSelectors from "../../redux/registration/registrationSelectors";
import { connect } from "react-redux";
import "./Home.css";

const Home = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated ? (
        <p className="homeTitle">Some interesting stuff</p>
      ) : (
        <p className="homeTitle">
          If you not registred or login, please follow to{" "}
          <Link to="/register" className="homeLink">
            Registration Page{" "}
          </Link>
          or{" "}
          <Link to="/login" className="homeLink">
            {" "}
            Login
          </Link>
        </p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: regastrationSelectors.isAuthenticated(state),
  };
};
export default connect(mapStateToProps)(Home);
