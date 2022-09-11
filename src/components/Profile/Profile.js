import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

import {useCurrentUser} from "../../contexts/CurrentUser";

const Profile = (props) => {
  const { loggedOut, onChangeProfile } = props;

  const { user } = useCurrentUser();

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [globalError, setGlobalError] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    onChangeProfile(name, email)
    .catch((error)=>{
      setGlobalError("Что то пошло не так...");
    });
  };

  const logout = () => {
    loggedOut();
  };

  return (
    <section className="profile">
      <div className="profile__container">
        <h3 className="profile__greeting">Привет, {user.name}!</h3>
        <form className="profile__form">
          <div className="profile_form-input">
            <p className="profile__text">Имя</p>
            <input
              className="profile__textinput"
              placeholder="Имя"
              name="name"
              type="text"
              value={name || ""}
              onChange={handleChangeName}
              required
            />
            <p className="profile__text">Email</p>
            <input
              className="profile__textinput"
              placeholder="Email"
              name="email"
              type="email"
              value={email || ""}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="profile__signup">
            <div className="profile__button" onClick={handleSubmit}>
              Сохранить
            </div>
            <Link className="profile__link" onClick={logout} to="/">
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
