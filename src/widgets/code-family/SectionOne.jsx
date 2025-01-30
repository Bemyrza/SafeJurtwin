import React from "react";
import { Link } from "react-router-dom";

export default function SectionOne() {
  return (
    <section>
      <div className="code-family__parent-block">
        <div className="code-family__parent-block-item">
          <h1>Создайте код семьи!</h1>
          <div className="code-family__parent-block-item-childContent">
            <div className="code-family__parent-block-item-child-columnReal">
              <label>Придумайте пароль</label>
              <input type="text" />
            </div>
            <div className="code-family__parent-block-item-child-columnReal">
              <label>Потвердите пароль</label>
              <input type="text" />
            </div>
            <Link to={'/'} style={{textDecoration: 'none'}} className="code-family__parent-block-item-child-columnLogin">
              <button style={{marginTop: '35px'}}>Подтвердить</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
