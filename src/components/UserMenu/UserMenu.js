import React from "react";
import "./UserMenu.css";
import { connect } from "react-redux";
import regastrationSelectors from "../../redux/registration/registrationSelectors";
import registrationOperations from "../../redux/registration/registrationOperations";
const UserMenu = ({ name, onLogout }) => {
  return (
    <div className="userContainer">
      <img
        src="https://pickaface.net/gallery/avatar/scudellari526025b463c95.png"
        alt={name}
        className="avatar"
      />
      <span className="userName">Welocome, {name}</span>
      <button type="button" className="logoutBtn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  name: regastrationSelectors.userName(state),
});
const mapDispatchToProps = {
  onLogout: registrationOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
