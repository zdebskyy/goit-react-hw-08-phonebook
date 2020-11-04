import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import regastrationSelectors from "../../redux/registration/registrationSelectors";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: regastrationSelectors.isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(PrivateRoute);
