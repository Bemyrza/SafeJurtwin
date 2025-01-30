import React from "react";
import "./Home.scss";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/images/women with phones.png"
import img2 from "../../assets/images/Rectangle 14.png"
import img3 from "../../assets/images/Rectangle 13.png"
import img4 from "../../assets/images/Rectangle 12.png"
import img5 from "../../assets/images/Rectangle 11.png"
import img6 from "../../assets/images/Rectangle 10.png"
import img7 from "../../assets/images/Rectangle 9.png"
import img8 from "../../assets/images/Rectangle 6.jpg"
import img9 from "../../assets/images/iPhone 16 Pro.png"
import img10 from "../../assets/images/iPhone 16 Pro (5).png"
import img11 from "../../assets/images/iPhone 16 Pro (4).png"
import img12 from "../../assets/images/iPhone 16 Pro (3).png"
import img13 from "../../assets/images/iPhone 16 Pro (2).png"
import img14 from "../../assets/images/iPhone 16 Pro (1).png"

const Home = () => {

  return ( 

    <div className="container">
     <section className="hero">
    <div className="hero-background">
        <img src={img8} alt="Безопасность" />
    </div>
    <div className="hero-content">
        <h1>Приложение для <br /> всей <br /> безопасности <br /> детей и женщин!</h1>
    </div>
    <div className="hero-image">
        <img src={img1} alt="Безопасность" />
    </div>
</section>


    
      <section className="features">
        <div className="feature"><div className="horizontal"><h2>Cлужебная помощь</h2> <span>1</span></div> <p>Для экстренных случаев <br /> воспользуйтесь услугами <br /> служебной помощи</p></div>
        <div className="feature"><div className="horizontal"><h2>Для семьи</h2> <span>2</span></div> <p>Можете пользоваться нашим <br /> приложением со всей семьей,для <br /> отслеживания геолокации итд</p></div>
        <div className="feature"><div className="horizontal"><h2>График дня</h2> <span>3</span></div> <p>Можете пользоваться нашим <br /> приложением со всей семьей,для <br /> составления графика дня</p></div>
        
       
      </section>

      <section class="safety">
  <div class="safety-image left">
    <img src={img2} alt="Человек с телефоном" />
  </div>
  <div class="safety-image right">
    <img src={img9} alt="Айфон с приложением SafeJurt" />
  </div>
  <div class="safety-content">
    <h2>Безопасность и польза</h2>
    <p><strong>Цель приложения</strong></p>
    <p>Забота о безопасности детей посредством онлайн-мониторинга и оповещений.</p>
    <p>Поддержка коммуникации семьи в неопределённых ситуациях.</p>
    <p>Упрощённая оценка и контроль запланированных маршрутов.</p>
    <p>Быстрый доступ к помощи (полиция, скорая помощь).</p>
  </div>
</section>
 
<section class="registration">
  <div class="registration-content">
    <h2>Регистрация в приложении</h2>
    <p><strong>Чтобы зарегистрироваться, следуйте этим шагам на представленном экране:</strong></p>
    <p><strong>Заполните поля:</strong></p>
    <ul>
      <li>ID или другой идентификационный номер.</li>
      <li>Ваш персональный код.</li>
      <li>Адрес электронной почты.</li>
    </ul>
    <p><strong>Примите условия:</strong></p>
    <p>Подтвердите, что согласны с правилами приложения и политикой конфиденциальности.</p>
    <p><strong>Создайте учетную запись:</strong></p>
    <p>Нажмите кнопку “Зарегистрироваться”.</p>
    <p><strong>Подтверждение:</strong></p>
    <p>Получите сообщение на email или телефон для завершения активации аккаунта.</p>
  </div>

  <div class="registration-image right">
    <img src={img14} alt="Айфон с приложением SafeJurt" />
  </div>

  <div class="registration-image left">
    <img src={img3} alt="Человек с телефоном" />
  </div>
</section>

<section class="safety">
  <div class="safety-image left">
    <img src={img7} alt="Человек с телефоном" />
  </div>
  <div class="safety-image right">
    <img src={img9} alt="Айфон с приложением SafeJurt" />
  </div>
  <div class="safety-content">
    <h2>Пользователи</h2>
    <p><strong>Выбор ролей:</strong></p>
    <p>Родитель — создаёт основной аккаунт и добавляет ребенка.</p>
    <p>Ребенок — подключается через QR-код или приглашение от родителя.</p>

    <p><strong>Родители:</strong></p>
    <p>Добавляют данные ребенка (имя, возраст).</p>
    <p>Настраивают геолокацию и параметры безопасности.</p>

    <p><strong>Ребенок:</strong></p>
    <p>Подключается с согласия родителей (если старше 18 лет — самостоятельно).</p>
    <p>Использует приложение для отслеживания графиков и получения помощи.</p>
  </div>
</section>


<section class="registration">
  <div class="registration-content">
    <h2>Код семьи</h2>
    <p><strong>Открывается страница для создания семьи:</strong></p>
    <ul>
      <li>Придумывается код семьи.</li>
      <li>Заполняются личные данные участников (ФИО, возраст, телефон, ID паспорта для детей 18+).</li>
      <li>Для детей младше 18 лет эту информацию заполняет родитель.</li>
    </ul>
    <p><strong>Геопозиция:</strong></p>
    <p>При первом входе запрашивается режим отслеживания местоположения (всегда, при использовании, отключить).</p>
  </div>

  <div class="registration-image right">
    <img src={img12} alt="Айфон с приложением SafeJurt" />
  </div>

  <div class="registration-image left">
    <img src={img6} alt="Человек с телефоном" />
  </div>
</section>


<section class="safety">
  <div class="safety-image left">
    <img src={img5} alt="Человек с телефоном" />
  </div>
  <div class="safety-image right">
    <img src={img11} alt="Айфон с приложением SafeJurt" />
  </div>
  <div class="safety-content">
    <h2>Преимущества для родителей</h2>
    <p><strong>Планирование дня:</strong></p>
    <ul>
      <li>Родитель подтверждает маршруты ребенка и может быть уверен в его безопасности.</li>
      <li>Если возникают изменения, ребенок может сообщить причину через встроенный чат.</li>
    </ul>
    <p><strong>Экстренные уведомления:</strong></p>
    <p>В случае опасности приложение позволяет ребенку вызвать полицию или скорую помощь, отправив данные о его местоположении.</p>
    <p><strong>Контроль и доверие:</strong></p>
    <p>Родитель получает прозрачность в передвижениях ребенка, не нарушая его личное пространство.</p>
  </div>
</section>


<section class="registration">
  <div class="registration-content">
    <h2>Преимущества для детей</h2>
    <p><strong>Поддержка и защита:</strong></p>
    <p>Возможность быстро сообщить родителям или вызвать помощь в случае необходимости.</p>
    <p><strong>Удобное планирование:</strong></p>
    <p>Ребенок может заранее указать, где он будет находиться, и получить подтверждение маршрута.</p>
    <p><strong>Связь с родителями:</strong></p>
    <p>Удобный чат для общения с родителями в случае изменений.</p>
    <p><strong>Легкость регистрации:</strong></p>
    <p>Простая регистрация через код семьи, без сложных действий.</p>
  </div>

  <div class="registration-image right">
    <img src={img10} alt="Айфон с приложением SafeJurt" />
  </div>

  <div class="registration-image left">
    <img src={img4} alt="Человек с телефоном" />
  </div>
</section>
``

     
      <Footer />
    </div>
  );
};

export default Home;
