import React from "react";
import "./Error.css";
/*
import { useHistory } from "react-router-dom";
*/

function Error({ status = 404, message = "Страница не найдена" }) {

  /*
  const history = useHistory();
  */

  return (
    <section className="error">
      <div className="error__container">
        <p className="error__status">{status}</p>
        <p className="error__message">{message}</p>
      </div>
      <button className="error__back" >Назад</button>
    </section>
  );
}

export default Error;


      /*
      onClick={history.goBack}

      */