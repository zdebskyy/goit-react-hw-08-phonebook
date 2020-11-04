import React, { Component } from "react";
import { connect } from "react-redux";
import registrationOperations from "../../redux/registration/registrationOperations";

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
        <h2>Registration page:</h2>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <button type="submit" onClick={(e) => this.handleFormSubmit(e)}>
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
