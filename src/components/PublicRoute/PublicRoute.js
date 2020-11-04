import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import regastrationSelectors from "../../redux/registration/registrationSelectors";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: regastrationSelectors.isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(PublicRoute);
