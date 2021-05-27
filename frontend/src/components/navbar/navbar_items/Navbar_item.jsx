import React from 'react';
import style from './../Navbar.module.css';

export const Navbar_Item = (props) => {
    return(
                <li className={style.nav_item}>{props.name}</li>
    )
}