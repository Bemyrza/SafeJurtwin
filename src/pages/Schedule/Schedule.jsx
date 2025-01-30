import React, { useState } from 'react';
import classes from './Schedule.module.scss';
import Footer from '../../components/Footer/Footer';


const Schedule = () => {
   const [selectedView, setSelectedView] = useState('day');

   const handleButtonClick = (view) => {
      setSelectedView(view);
   };

   return (
      <div>
         <div className={classes.container}>
            <div className={classes.sidebar}>
               <h2>Ваш график дня, хотите изменить?</h2>
               <button className={classes.button} onClick={() => handleButtonClick('day')}>График дня</button>
               <button className={classes.button} onClick={() => handleButtonClick('week')}>График недели</button>
               <button className={classes.button} onClick={() => handleButtonClick('history')}>Моя история</button>
               <button className={classes.requestButton} onClick={() => handleButtonClick('request')}>Отправить запрос родителю</button>
            </div>

            <div className={classes.content}>
               {selectedView === 'day' && (
                  <>
                     <h1>График дня</h1>
                     <div className={classes.scheduleGrid}>
                        {Array.from({ length: 8 }).map((_, index) => (
                           <div key={index} className={classes.scheduleItem}>
                              <h3>Geeks</h3>
                              <p>Миралы Аматов 1 Б</p>
                           </div>
                        ))}
                     </div>
                  </>
               )}

               {selectedView === 'week' && (
                  <>
                     <h1>График недели</h1>
                     <div className={classes.scheduleGrid}>
                        {Array.from({ length: 8 }).map((_, index) => (
                           <div key={index} className={classes.scheduleItem}>
                              <h3>Geeks</h3>
                              <p>Миралы Аматов 1 Б</p>
                           </div>
                        ))}
                     </div>
                  </>
               )}

               {selectedView === 'history' && (
                  <>
                     <h1>История</h1>
                     <div className={classes.scheduleGrid}>
                        {Array.from({ length: 8 }).map((_, index) => (
                           <div key={index} className={classes.scheduleItem}>
                              <h3>Geeks</h3>
                              <p>Миралы Аматов 1 Б</p>
                           </div>
                        ))}
                     </div>
                  </>
               )}

               {selectedView === 'request' && (
                  <>
                     <h1>Отправить запрос родителю</h1>

                  </>
               )}
            </div>
         </div>
            <div className={classes.footer}>
               <Footer />

            </div>
      </div>
   );
};

export default Schedule;
