import React from 'react';
// import style from './Navbar.module.css';
import {NavbarItem} from "./navbar_items/Navbar_item";

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <NavbarItem name={"events"}/>
                <NavbarItem name={"about"}/>
                <NavbarItem name={"for graduates"}/>
                <NavbarItem name={"for students"}/>
                <NavbarItem name={"graduates"}/>
                <NavbarItem name={"contacts"}/>
            </ul>
        </nav>
    )
}