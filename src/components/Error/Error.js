import React from "react";
import { useHistory } from "react-router-dom";
import "./Error.css";

function Error({ status = 404, message = "Страница не найдена" }) {
  let history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section className="error">
      <div className="error__container">
        <p className="error__status">{status}</p>
        <p className="error__message">{message}</p>
      </div>
      <button className="error__back" onClick={handleGoBack}>
        Назад
      </button>
    </section>
  );
}

export default Error;
