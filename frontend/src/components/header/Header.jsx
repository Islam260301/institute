import React from 'react';
import style from './header.module.css';
import {Navbar} from "../navbar/Navbar";

export const Header = () => {
    return(
        <div className={style.header}>
            <Navbar/>
        </div>
    )
}