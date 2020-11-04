import axios from "axios";
import contactsActions from "./contactsActions";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then((response) =>
      dispatch(contactsActions.addContactSuccess(response.data))
    )
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then((response) =>
      dispatch(contactsActions.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = () => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete("/contacts/{contactId}")
    .then(() => dispatch(contactsActions.removeContactSuccess()))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

const contactsOperations = {
  addContact,
  fetchContacts,
  removeContact,
};

export default contactsOperations;
