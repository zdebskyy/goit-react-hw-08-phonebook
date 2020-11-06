import React, { Component } from "react";
import "./Contacts.css";
import InputForm from "../InputForm/InputForm";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import { ToastContainer, toast } from "react-toastify";
import { CSSTransition } from "react-transition-group";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import regastrationSelectors from "../../redux/registration/registrationSelectors";
class Contacts extends Component {
  state = {
    name: "",
    number: "",
  };

  notify = () =>
    toast.error(" This contact already exist!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      return;
    }
    const contactName = this.props.contacts.map((el) => {
      return el.name;
    });
    const validation = contactName.find((el) => el === name);

    validation === name ? this.notify() : this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  handleInput = (value) => {
    this.setState({ name: value });
  };
  handleNumber = (value) => {
    this.setState({ number: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <ToastContainer />
          <InputForm
            label="Name"
            type="text"
            value={name}
            placeholder="Enter name"
            onInput={this.handleInput}
          />
          <InputForm
            label="Number"
            type="tel"
            value={number}
            placeholder="Enter number"
            onInput={this.handleNumber}
          />
          <button type="submit" className="buttonSubmit">
            Add contact
          </button>
        </form>

        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames="filterIn"
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactsList />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isAuthenticated: regastrationSelectors.isAuthenticated(state),
  };
};
const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
