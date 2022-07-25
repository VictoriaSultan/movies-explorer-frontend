import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Login.css';

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(email, password);
  };

  return (
    <section className="login">
        <div className="login__container">
            <Logo />
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <input className="login__textinput" placeholder="Email" name="email" minLength="2" required="" type="email" onChange={handleChangeEmail} value={email || ""}></input>
                <input className="login__textinput" placeholder="Пароль" name="password" minLength="2" required="" type="password" onChange={handleChangePassword} value={password || ""}></input>
                <button className="login__button" type="submit">Войти</button>
                <div className="login__signup">
                    <p className="login__signup-title">Ещё не зарегистрированы?</p>
                    <Link to="signup" className="login__signup-link">Регистрация</Link>
                </div>
            </form>
        </div>
    </section>
  )
};

export default Login;