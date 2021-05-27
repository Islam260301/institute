import React from 'react';
import style from './Navbar.module.css';

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <li className={style.nav_item}>events</li>
                <li className={style.nav_item}>about</li>
                <li className={style.nav_item}>for graduates</li>
                <li className={style.nav_item}>for students</li>
                <li className={style.nav_item}>graduates</li>
                <li className={style.nav_item}>contacts</li>
            </ul>
        </nav>
    )
}