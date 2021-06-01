import React from 'react';
import style from "./footer.module.css";
import logo from "../../assets/images/logo.png";
import * as Icon from 'react-bootstrap-icons';

export const Footer = () => {
    return (
        <div className={`${style.footer}`}>
            <div className={`container`}>
                <div className={`${style.flex_container} d-flex justify-content-center`}>
                    <div className={style.flex_item}>
                        <img className={style.logo_img} src={logo} alt={`logo`}/>
                    </div>
                    <div className={style.flex_item}>
                        <h3>Contacts</h3>
                        <hr/>
                        <ul className={`list-unstyled `}>
                            <li><Icon.TelephoneFill/>+996550485515</li>
                            <li><Icon.TelephoneFill/>+996550485515</li>
                            <li><Icon.EnvelopeFill/>islam260301kg@gmail.com</li>
                            <li><Icon.Map/>ул. Малдыбаева 34Б, г. Бишкек, 720020</li>
                            <li className={`d-flex justify-content-between`}>
                                <Icon.Facebook/>
                                <Icon.Instagram/>
                                <Icon.Whatsapp/>
                                <div/>
                                <div/>
                            </li>
                        </ul>
                    </div>
                    <div className={style.flex_item}>
                        <h3>Links</h3>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}