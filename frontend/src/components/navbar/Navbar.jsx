import React from 'react';
// import style from './Navbar.module.css';
import {Navbar_Item} from "./navbar_items/Navbar_item";

export const Navbar = () => {
    return(
        <nav>
            <ul>
                <Navbar_Item name={"events"}/>
                <Navbar_Item name={"about"}/>
                <Navbar_Item name={"for graduates"}/>
                <Navbar_Item name={"for students"}/>
                <Navbar_Item name={"graduates"}/>
                <Navbar_Item name={"contacts"}/>
            </ul>
        </nav>
    )
}