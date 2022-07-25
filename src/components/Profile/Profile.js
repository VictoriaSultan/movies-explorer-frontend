import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {

  return (
    <section className="profile">
        <div className='profile__container'>
            <h3 className="profile__greeting">Привет, Виктория!</h3>
            <form className="profile__form">
                <div className="profile_form-input">
                    <p className="profile__text">Имя</p>
                    <input className="profile__textinput" placeholder="Имя" name="name" type="text" defaultValue="Виктория" required />
                    <p className="profile__text">Email</p>
                    <input className="profile__textinput" placeholder="Email" name="email" type="email" defaultValue="blabla@mail.ru" required />
                </div>   
                <div className="profile__signup">
                    <Link className="profile__button" to="/profile">Редактировать</Link>
                    <Link className="profile__link" to="/">Выйти из аккаунта</Link>
                </div>
            </form>
        </div>
    </section>
  );
};

export default Profile;