import React, { useState, useRef, useEffect } from 'react';
import classes from './Header.module.scss';
import safeLogo from '../../assets/images/safejurt-logo.png';
import profile from '../../assets/images/profile.png'
import { Link } from 'react-router-dom';

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

      
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.header__logo}>
                    <Link to="/home">
                        <img src={safeLogo} alt="Logo" />
                    </Link>
                </div>

                {/* Button to toggle sidebar */}
                <button className={classes.menuButton} onClick={toggleSidebar}>☰</button>

                <nav className={`${classes.header__nav} ${classes.nav}`}>
                    <ul className={classes.menu}>
                        <li className={classes.menu__item}>
                            <Link className={classes.menu__link} to="/service">Служебная помощь</Link>
                        </li>
                        <li className={classes.menu__item}>
                            <Link className={classes.menu__link} to="/map">Карта</Link>
                        </li>
                        <li className={classes.menu__item}>
                            <Link className={classes.menu__link} to="/schedule">График дня</Link>
                        </li>
                        <li className={classes.menu__item}>
                            <a href="https://web.telegram.org/a/#7209363206" target="_blank" rel="noopener noreferrer">
                                <svg width="109" height="60" viewBox="0 0 124 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="124" height="59" rx="10" fill="#17ACCC" />
                                    <path d="M31.7383 21.8906H34.1406C34.1406 23.6953 34.1406 25.5039 34.1406 27.3164C34.1406 29.1211 34.1406 30.9258 34.1406 32.7305C34.1406 34.3555 33.9258 35.6484 33.4961 36.6094C33.0664 37.5625 32.4688 38.25 31.7031 38.6719C30.9375 39.0859 30.0508 39.293 29.043 39.293C28.6758 39.293 28.2617 39.2461 27.8008 39.1523C27.3398 39.0586 26.8945 38.9141 26.4648 38.7188C26.043 38.5156 25.6914 38.2578 25.4102 37.9453L25.9375 35.7773C26.3281 36.2305 26.7969 36.5781 27.3438 36.8203C27.8984 37.0625 28.4453 37.1836 28.9844 37.1836C29.8438 37.1836 30.5469 36.875 31.0938 36.2578C31.6406 35.6406 31.9141 34.6602 31.9141 33.3164V27.5156C31.9141 26.375 31.9023 25.3086 31.8789 24.3164C31.8633 23.3164 31.8164 22.5078 31.7383 21.8906ZM49.0938 39H47.1016C46.9922 38.7266 46.8711 38.3789 46.7383 37.957C46.6133 37.5273 46.5195 37.0938 46.457 36.6562C45.7461 37.5156 45.0117 38.1719 44.2539 38.625C43.4961 39.0703 42.707 39.293 41.8867 39.293C39.3867 39.293 38.1367 37.6133 38.1367 34.2539C38.1367 34.1992 38.1367 34.0039 38.1367 33.668C38.1367 33.332 38.1367 32.9531 38.1367 32.5312C38.1367 32.1016 38.1367 31.7188 38.1367 31.3828C38.1367 31.0469 38.1367 30.8516 38.1367 30.7969C38.1367 30.0547 38.125 29.4219 38.1016 28.8984C38.0781 28.3672 38.0117 27.75 37.9023 27.0469H40.3047V33.5508C40.3047 34.8789 40.4492 35.8477 40.7383 36.457C41.0352 37.0586 41.5547 37.3594 42.2969 37.3594C42.7578 37.3594 43.2461 37.1875 43.7617 36.8438C44.2852 36.4922 44.7656 36.0625 45.2031 35.5547C45.6406 35.0469 45.9609 34.5547 46.1641 34.0781V30.7969C46.1641 30.2812 46.1602 29.832 46.1523 29.4492C46.1445 29.0664 46.1211 28.6914 46.082 28.3242C46.0508 27.9492 46 27.5234 45.9297 27.0469H48.332V33.7266C48.332 34.8594 48.3984 35.8594 48.5312 36.7266C48.6641 37.5859 48.8516 38.3438 49.0938 39ZM54.2031 39H52.0352V31.793C52.0352 30.6445 51.9688 29.668 51.8359 28.8633C51.7109 28.0586 51.582 27.4531 51.4492 27.0469H53.5586C53.6211 27.2109 53.6797 27.4375 53.7344 27.7266C53.7969 28.0156 53.8555 28.3086 53.9102 28.6055C53.9648 28.9023 54.0039 29.1445 54.0273 29.332C54.5977 28.5195 55.2422 27.8984 55.9609 27.4688C56.6797 27.0312 57.3047 26.8125 57.8359 26.8125C58.4922 26.8125 59.0156 27 59.4062 27.375C59.8047 27.7422 60.0898 28.2227 60.2617 28.8164C60.4414 29.4102 60.5312 30.0508 60.5312 30.7383L58.6562 31.1484C58.6562 30.5625 58.5469 30.0469 58.3281 29.6016C58.1094 29.1484 57.7695 28.9219 57.3086 28.9219C56.9805 28.9219 56.6055 29.0859 56.1836 29.4141C55.7695 29.7344 55.3789 30.1484 55.0117 30.6562C54.6445 31.1562 54.375 31.6719 54.2031 32.2031V39ZM69.5547 36.4805V38.3555C69.0156 38.6992 68.5 38.9414 68.0078 39.082C67.5156 39.2227 67.0625 39.293 66.6484 39.293C66.0391 39.293 65.4844 39.1953 64.9844 39C64.4844 38.7969 64.0859 38.4453 63.7891 37.9453C63.4922 37.4375 63.3438 36.7344 63.3438 35.8359C63.3438 35.5547 63.3438 35.0938 63.3438 34.4531C63.3438 33.8125 63.3438 33.0586 63.3438 32.1914C63.3438 31.3164 63.3438 30.3828 63.3438 29.3906C63.3438 28.3906 63.3438 27.3867 63.3438 26.3789C63.3438 25.3711 63.3438 24.4219 63.3438 23.5312H65.5117C65.5117 24.5312 65.5117 25.6016 65.5117 26.7422C65.5117 27.875 65.5117 28.9727 65.5117 30.0352C65.5117 31.0977 65.5117 32.0234 65.5117 32.8125C65.5117 33.5938 65.5117 34.1328 65.5117 34.4297C65.5117 35.2344 65.5625 35.8477 65.6641 36.2695C65.7734 36.6914 65.9375 36.9805 66.1562 37.1367C66.375 37.2852 66.6602 37.3594 67.0117 37.3594C67.6523 37.3594 68.5 37.0664 69.5547 36.4805ZM69.3203 29.0391H61V27.3398H69.3203V29.0391ZM73.3164 39H70.9141C71.125 38.5234 71.3516 37.9844 71.5938 37.3828C71.8359 36.7812 72.1562 35.9336 72.5547 34.8398L77.2422 21.8906H79.7617L84.4492 34.8398C84.8398 35.9258 85.1602 36.7734 85.4102 37.3828C85.6602 37.9922 85.8867 38.5312 86.0898 39H83.6875L82.0938 34.4883H74.8867L73.3164 39ZM81.4609 32.6719L78.4727 24.1758L75.5195 32.6719H81.4609ZM88.4453 21.8906H96.3555V23.5898H93.4844V37.3008H96.3555V39H88.4453V37.3008H91.2578V23.5898H88.4453V21.8906Z" fill="white" />

                                </svg>
                            </a>
                        </li>
                        <li className={classes.menu__item}>
                            <img className={classes.profileIcon} src={profile} alt="Profile" />
                        </li>

                    </ul>
                </nav>
            </header>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className={classes.sidebar} ref={sidebarRef}>
                    {/* Copy the same nav content inside the sidebar */}
                    <nav className={classes.sidebarNav}>
                        <ul>
                            <li><Link className={classes.menu__link} to="/service">Служебная помощь</Link></li>
                            <li><Link className={classes.menu__link} to="/map">Карта</Link></li>
                            <li><Link className={classes.menu__link} to="/schedule">График дня</Link></li>
                            <li>
                                <a href="https://web.telegram.org/a/#7209363206" target="_blank" rel="noopener noreferrer">
                                    JurtAI
                                </a>
                            </li>
                            <li><Link className={classes.menu__link} to="/profile">Профиль</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
