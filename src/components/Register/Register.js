import React from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.css";

const Register = (props) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const [globalError, setGlobalError] = React.useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(name, email, password).catch((error) => {
      setGlobalError("Что-то пошло не так...");
    });
  };

  if (props.loggedIn) {
    return <Redirect to={"/movies"} />;
  } else {
    return (
      <section className="register">
        <div className="register__container">
          <Logo />
          <h2 className="register__title">Добро пожаловать!</h2>
          <form className="register__form" onSubmit={handleSubmit}>
            <input
              className="register__textinput"
              placeholder="Имя"
              name="name"
              minLength="2"
              required=""
              type="text"
              onChange={handleChangeName}
              value={name || ""}
            ></input>
            <input
              className="register__textinput"
              placeholder="Email"
              name="email"
              minLength="2"
              required=""
              type="email"
              onChange={handleChangeEmail}
              value={email || ""}
            ></input>
            <p
              className={`register__error ${
                errors.email ? "register__error-display" : ""
              }`}
            >
              {errors.email}
            </p>
            <input
              className="register__textinput"
              placeholder="Пароль"
              name="password"
              minLength="2"
              required=""
              type="password"
              onChange={handleChangePassword}
              value={password || ""}
            ></input>
            <p
              className={`register__error ${
                errors.password ? "register__error-display" : ""
              }`}
            >
              {errors.password}
            </p>
            <p className="register__global-error">{globalError}</p>
            <button
              className={`register__button ${
                isValid ? "" : "register__button_disabled"
              }`}
              disabled={!isValid ? true : false}
              type="submit"
            >
              Зарегистрироваться
            </button>
            <div className="register__signup">
              <p className="register__signup-title">Уже зарегистрированы?</p>
              <Link to="signin" className="register__signup-link">
                Войти
              </Link>
            </div>
          </form>
        </div>
      </section>
    );
  }
};

export default Register;
