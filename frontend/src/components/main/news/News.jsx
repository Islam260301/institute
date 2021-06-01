import React from 'react';
import news_1 from '../../../assets/images/news_1.jpg';
import style from "./news.module.css";
import * as Icon from 'react-bootstrap-icons';

export function News() {

    return (
        <div className={`${style.news} `}>
            <div className={"col-12 mb-3 text-center container"}>
                <h2>Events of May</h2>
                <hr/>
            </div>
            <div className={`${style.flex_container} container`}>
                <div className={`${style.flex_item}`}>
                    <div className="post">
                        <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi" className="post-img">
                            <img src={news_1} alt=""/></a>
                        <div className={`${style.post_body}`}>
                            <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi">
                                <h6>Уважаемые студенты КГИПИ</h6>
                            </a>
                            <p>
                                Уважаемые студенты КГИПИ, объявляется конкурс на создание логотипа
                                Ассоциации выпускников КГИПИ.
                            </p>
                            <div className="mt-3">
                            <span className="meta-text">
                                <Icon.Calendar/>1 неделю назад
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.flex_item}`}>
                    <div className="post">
                        <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi" className="post-img">
                            <img src={news_1} alt=""/></a>
                        <div className={`${style.post_body}`}>
                            <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi">
                                <h6>Уважаемые студенты КГИПИ</h6>
                            </a>
                            <p>
                                Уважаемые студенты КГИПИ, объявляется конкурс на создание логотипа
                                Ассоциации выпускников КГИПИ.
                            </p>
                            <div className="mt-3">
                            <span className="meta-text">
                                <Icon.Calendar/>1 неделю назад
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.flex_item}`}>
                    <div className="post">
                        <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi" className="post-img">
                            <img src={news_1} alt=""/></a>
                        <div className={`${style.post_body}`}>
                            <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi">
                                <h6>Уважаемые студенты КГИПИ</h6>
                            </a>
                            <p>
                                Уважаемые студенты КГИПИ, объявляется конкурс на создание логотипа
                                Ассоциации выпускников КГИПИ.
                            </p>
                            <div className="mt-3">
                            <span className="meta-text">
                                <Icon.Calendar/>1 неделю назад
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.flex_item}`}>
                    <div className="post">
                        <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi" className="post-img">
                            <img src={news_1} alt=""/></a>
                        <div className={`${style.post_body}`}>
                            <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi">
                                <h6>Уважаемые студенты КГИПИ</h6>
                            </a>
                            <p>
                                Уважаемые студенты КГИПИ, объявляется конкурс на создание логотипа
                                Ассоциации выпускников КГИПИ.
                            </p>
                            <div className="mt-3">
                            <span className="meta-text">
                                <Icon.Calendar/>1 неделю назад
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.flex_item}`}>
                    <div className="post">
                        <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi" className="post-img">
                            <img src={news_1} alt=""/></a>
                        <div className={`${style.post_body}`}>
                            <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi">
                                <h6>Уважаемые студенты КГИПИ</h6>
                            </a>
                            <p>
                                Уважаемые студенты КГИПИ, объявляется конкурс на создание логотипа
                                Ассоциации выпускников КГИПИ.
                            </p>
                            <div className="mt-3">
                            <span className="meta-text">
                                <Icon.Calendar/>1 неделю назад
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.flex_item}`}>
                    <div className="post">
                        <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi" className="post-img">
                            <img src={news_1} alt=""/></a>
                        <div className={`${style.post_body}`}>
                            <a href="https://inai.kg/post/uvazhaemye-studenty-kgipi">
                                <h6>Уважаемые студенты КГИПИ</h6>
                            </a>
                            <p>
                                Уважаемые студенты КГИПИ, объявляется конкурс на создание логотипа
                                Ассоциации выпускников КГИПИ.
                            </p>
                            <div className="mt-3">
                            <span className="meta-text">
                                <Icon.Calendar/>1 неделю назад
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`d-flex justify-content-center`}>
                <button type="button" className={`btn btn-info`}>Show more</button>
            </div>
        </div>
    );
}
