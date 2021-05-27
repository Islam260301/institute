import React from 'react';
import style from './header.module.css';
import {Navbar} from "../navbar/Navbar";
import logo from '../../assets/images/logo.png';
import ksucta_logo from '../../assets/images/ksucta_logo.png';

export const Header = () => {
    return(
        <div className={style.header}>
            <img className={style.logo} src={logo} alt="logo"/>
            <Navbar/>
            <img className={style.logo} src={ksucta_logo}  alt="logo"/>
        </div>
    )
}