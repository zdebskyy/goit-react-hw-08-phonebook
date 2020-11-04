import React, { Component } from "react";

import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { connect } from "react-redux";
import registrationOperations from "./redux/registration/registrationOperations";
import Contacts from "./components/Contacts/Contacts";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <Navigation />
        <PublicRoute path="/" exact component={Home} restricted={false} />
        <PublicRoute
          path="/register"
          exact
          component={Registration}
          restricted={true}
        />
        <PublicRoute path="/login" exact component={Login} restricted={true} />
        <PrivateRoute path="/contacts" exact component={Contacts} />
      </>
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: registrationOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
