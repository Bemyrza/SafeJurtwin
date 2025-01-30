import React from "react";
import { Link } from "react-router-dom";

export default function SectionOne() {
  return (
    <section>
      <div className="connection-family__parent-block">
        <div className="connection-family__parent-block-item">
          <h1>Подкючитесь к семье !</h1>
          <div className="connection-family__parent-block-item-childOne">
            <h4>Введите КОД семьи, чтобы подключится! Чтобы подключиться вам надо ввести код которую создали ваши родители!</h4>
            {/* <a href="#">Где взять?</a> */}
          </div>
          <div className="connection-family__parent-block-item-child">
            <div className="connection-family__parent-block-item-child-column">
              <label>Фамилия</label>
              <input type="text" />
            </div>
            <div className="connection-family__parent-block-item-child-column">
              <label>Имя</label>
              <input type="text" />
            </div>
          </div>
          <div className="connection-family__parent-block-item-childContent">
            <div className="connection-family__parent-block-item-child-columnReal">
              <label>Код семьи</label>
              <input type="text" />
            </div>
            <Link to={'/login'} style={{textDecoration: 'none'}} className="connection-family__parent-block-item-child-columnLogin">
              <button>Продолжить</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
