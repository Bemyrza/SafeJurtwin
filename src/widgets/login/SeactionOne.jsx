import React from "react";
import { Link } from "react-router-dom";

export default function SectionOne() {
  return (
    <section>
      <div className="login__parent-block">
        <div className="login__parent-block-item">
          <h1>Добро пожаловать обратно!</h1>
          <div className="login__parent-block-item-childOne">
            <h4>Войдите через e-mail для того , чтобы продолжит авторизацию!</h4>
          </div>
          <div className="login__parent-block-item-childContent">
            <div className="login__parent-block-item-child-columnReal">
              <label>Электронная почта</label>
              <input type="text" />
            </div>
            <div className="login__parent-block-item-child-columnReal">
              <label>Пароль</label>
              <input type="text" />
            </div>
            <div className="login__parent-block-item-child-columnLogin">
            <Link to={'/forgot-password'} href="#">Забыли пароль?</Link>
              <Link to={'/'} style={{textDecoration: 'none', color: 'white'}} className="login__parent-block-item-child-columnLogin-complete">Продолжить</Link>
              {/* <button className="login__parent-block-item-child-columnLogin-login">Зарегистрироваться</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
