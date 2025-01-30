import React from 'react';
import safe from '../../assets/images/Safe.png';
import classes from './Footer.module.scss';
import apple from '../../assets/icons/apple.svg';
import google from '../../assets/icons/google.svg';

export default function Footer() {
  return (
    <div>
      <footer className={classes.footer}>
        <img src={safe} alt="Safe2urt" className={classes.safeImage} />
        <h1>Скачайте приложение</h1>
        <div className={classes.icons}>
          <div className={classes.downloadButtons}>
            <img src={apple} alt="Download on the App Store" />
          </div>
          <div className={classes.downloadButtons}>
            <img src={google} alt="Get it on Google Play" />
          </div>
        </div>
        <p>Установите Safe Jurt на своё устройство, и вы всегда будете <br />знать, как обеспечить безопасность ваших детей и женщин <br />в любой ситуации.</p>
      </footer>
    </div>
  );
}
