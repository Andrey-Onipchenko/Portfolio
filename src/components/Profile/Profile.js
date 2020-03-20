import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className="container">
      <h2 className="profile__title">About me</h2>
      <div className="profile__content">
        <div className="profile__description">
          <h3>fullname</h3>
          <p>Andrey Onipchenko</p>
          <h3>birth</h3>
          <p>27th December 1990</p>
          <h3>address</h3>
          <p>Kiev, Ukraine</p>
        </div>

        <div className="avatar"></div>
      </div>
    </div>
  );
}

export default Profile;
