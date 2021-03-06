import React, { Component } from "react";
import { connect } from "react-redux";
import registrationOperations from "../../redux/registration/registrationOperations";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2 className="logTitle">Login:</h2>
        <form className="logForm">
          <label className="labelName">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => this.handleChange(e)}
              className="inputForm"
            />
          </label>
          <label className="labelName">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => this.handleChange(e)}
              className="inputForm"
            />
          </label>
          <button
            type="submit"
            onClick={(e) => this.handleFormSubmit(e)}
            className="buttonSubmit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: registrationOperations.login,
};

export default connect(null, mapDispatchToProps)(Login);
