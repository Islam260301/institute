import React from 'react';
import {Slide} from "./carousel/Carousel";
import {Events} from "./events/Events";
import {News} from "./news/News";
import style from "./main.module.css";
import Information from "../information/Information";
import {Route} from "react-router-dom";

export const Main = () => {
    return(
        <div className={`style.main_container`}>
            <Route path={`/information`} component={Information}/>
            <Slide/>
            <Events/>
            <News/>
        </div>
    )
}