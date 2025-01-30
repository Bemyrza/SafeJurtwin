import React from "react";
import { Link } from "react-router-dom";

export default function SectionOne() {
  return (
    <section>
      <div className="forgot-password__parent-block">
        <div className="forgot-password__parent-block-item">
          <h1>Забыли пароль?</h1>
          <div className="forgot-password__parent-block-item-childOne">
            <h4>Введите ваш email или номер телефона, и мы вышлем вам инструкцию по получение новго пароля.</h4>
            <Link to={'/login'} >Войти</Link>
          </div>
          <div className="forgot-password__parent-block-item-childContent">
            <div className="forgot-password__parent-block-item-child-columnReal">
              <label>Новый пароль</label>
              <input type="text" />
            </div>
            <div className="forgot-password__parent-block-item-child-columnReal">
              <label>Повторить новый пароль </label>
              <input type="text" />
            </div>
            <Link to={'/create-account'} className="forgot-password__parent-block-item-child-columnLogin">
              <button className="forgot-password__parent-block-item-child-columnLogin-complete">Продолжить</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
