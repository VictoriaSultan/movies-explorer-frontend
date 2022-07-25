import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Register.css';

const Register = (props) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
      setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(email, password);
  };

  return (
    <section className="register">
        <div className="register__container">
            <Logo />
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <input className="register__textinput" placeholder="Имя" name="name" minLength="2" required="" type="text" onChange={handleChangeName} value={name || ""}></input>
                <input className="register__textinput" placeholder="Email" name="email" minLength="2" required="" type="email" onChange={handleChangeEmail} value={email || ""}></input>
                <input className="register__textinput" placeholder="Пароль" name="password" minLength="2" required="" type="password" onChange={handleChangePassword} value={password || ""}></input>
                <button className="register__button" type="submit">Зарегистрироваться</button>
                <div className="register__signup">
                    <p className="register__signup-title">Уже зарегистрированы?</p>
                    <Link to="signin" className="register__signup-link">Войти</Link>
                </div>
            </form>
        </div>
    </section>
  );
};

export default Register;