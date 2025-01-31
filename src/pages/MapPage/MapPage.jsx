import React, { useState } from 'react';
import classes from "./MapPage.module.scss";
import Footer from '../../components/Footer/Footer';

const MapPage = () => {
   const [routeChanged, setRouteChanged] = useState(false);

   const organizationCode = "70000001066401992";
   const organizationLatitude = "38.174018";
   const organizationLongitude = "73.9140";

   const options = JSON.stringify({
      pos: { lat: organizationLatitude, lon: organizationLongitude, zoom: 15 },
      opt: { city: "osh" },
      org: organizationCode,
   });

   const twoGisIframeURL = encodeURI(`https://widgets.2gis.com/widget?type=firmsonmap&options=${options}`);

   const handleRouteChange = () => {
      setRouteChanged(true);
   };

   const handleBack = () => {
      setRouteChanged(false);
   };

   return (
      <div>
         <div className={classes.container}>
            {!routeChanged ? (
               <div className={classes.sidebar}>
                  <div className={classes.block}>
                     <label className={classes.radio}>
                        <input type="radio" name="route" />
                        Откуда
                     </label>
                     <label>
                        <input type="radio" name="route" />
                        Куда?
                     </label>
                     <button className={classes.addRoute}>+ Добавить путь</button>
                  </div>
                  <textarea placeholder="Комментарий ребенку..."></textarea>
                  <button className={classes.changeRoute} onClick={handleRouteChange}>Поменять путь</button>
               </div>
            ) : (
               <div className={classes.newSidebar}>
                  <div className={classes.labels}>
                  <label>
                     <input type="radio" name="route" />
                     Откуда
                  </label>
                  <label>
                     <input type="radio" name="route" />
                     Куда?
                  </label>
                  </div>
                  <button>Запросить Поменять Путь</button>
                  <button>Запросить График Дня</button>
                  <button className={classes.backButton} onClick={handleBack}>Назад</button>
               </div>
            )}
            <iframe
               title="twogis"
               frameBorder="no"
               className={classes.map}
               src={twoGisIframeURL}
            ></iframe>
         </div>
         <div className={classes.footer}>
            <Footer />
         </div>
      </div>
   );
};

export default MapPage;
