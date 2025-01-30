import React, { useState, useRef, useEffect } from 'react';
import classes from './Header.module.scss';
import safeLogo from '../../assets/images/safejurt-logo.png';
import profile from '../../assets/images/profile.png'
import { Link } from 'react-router-dom';

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Toggle the sidebar open/close
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Close the sidebar if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.header__logo}>
                    <Link to="/">
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
                                    {/* SVG Path for the icon */}
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
  