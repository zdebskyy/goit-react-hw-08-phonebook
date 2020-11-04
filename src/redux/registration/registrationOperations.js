import axios from "axios";
import registrationActions from "./registrationActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (data) => (dispatch) => {
  dispatch(registrationActions.registRequest());

  axios
    .post("/users/signup", data)
    .then((response) => {
      token.set(response.data.token);
      dispatch(registrationActions.registSuccess(response.data));
    })
    .catch((error) => dispatch(registrationActions.registError(error)));
};

const login = (data) => (dispatch) => {
  dispatch(registrationActions.loginUserRequest());

  axios
    .post("/users/login", data)
    .then((response) => {
      token.set(response.data.token);
      dispatch(registrationActions.loginUserSuccess(response.data));
    })
    .catch((error) => dispatch(registrationActions.loginUserError(error)));
};

const logout = () => (dispatch) => {
  dispatch(registrationActions.logoutUserRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(registrationActions.logoutUserSuccess());
    })
    .catch((error) => dispatch(registrationActions.logoutUserError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    register: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(registrationActions.getCurretUserRequest());
  axios
    .get("/users/current")
    .then((response) => {
      dispatch(registrationActions.getCurretUserSuccess(response.data));
    })
    .catch((error) => dispatch(registrationActions.getCurretUserError(error)));
};

const registrationOperations = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default registrationOperations;
