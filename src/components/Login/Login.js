import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Login.css";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

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
    setpassword(e.target.value);
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props
      .onLogin(email, password)
      .catch((error) => {
        setGlobalError("Что-то пошло не так...");
      });
  };

  if (props.loggedIn) {
    return <Redirect to={"/movies"} />;
  } else {
    return (
      <section className="login">
        <div className="login__container">
          <Logo />
          <h2 className="login__title">Рады видеть!</h2>
          <form className="login__form" onSubmit={handleSubmit}>
            <input
              className="login__textinput"
              placeholder="Email"
              name="email"
              minLength="2"
              required=""
              type="email"
              onChange={handleChangeEmail}
              value={email || ""}
            ></input>
            <p
              className={`login__error ${
                errors.email ? "login__error-display" : ""
              }`}
            >
              {errors.email}
            </p>
            <input
              className="login__textinput"
              placeholder="Пароль"
              name="password"
              minLength="2"
              required=""
              type="password"
              onChange={handleChangePassword}
              value={password || ""}
            ></input>
            <p
              className={`login__error ${
                errors.password ? "login__error-display" : ""
              }`}
            >
              {errors.password}
            </p>
            <p className="register__global-error">{globalError}</p>
            <button
              className={`login__button ${
                isValid ? "" : "login__button_disabled"
              }`}
              disabled={!isValid}
              type="submit"
            >
              Войти
            </button>
            <div className="login__signup">
              <p className="login__signup-title">Ещё не зарегистрированы?</p>
              <Link to="signup" className="login__signup-link">
                Регистрация
              </Link>
            </div>
          </form>
        </div>
      </section>
    );
  }
};

export default Login;
