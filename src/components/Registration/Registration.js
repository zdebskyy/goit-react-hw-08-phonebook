import React, { Component } from "react";
import { connect } from "react-redux";
import registrationOperations from "../../redux/registration/registrationOperations";
import "./Registration.css";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onRegistration({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h2 className="regTitle">Registration page:</h2>
        <form className="regForm">
          <label className="labelName">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => this.handleChange(e)}
              className="inputForm"
            />
          </label>
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
  onRegistration: registrationOperations.register,
};

export default connect(null, mapDispatchToProps)(Registration);
