import React from 'react';
import style from './../Navbar.module.css';

export const NavbarItem = (props) => {
    return (
        <li>{props.name}</li>
    )
}