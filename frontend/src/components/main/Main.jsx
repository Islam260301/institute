import React from 'react';
import {Slide} from "./carousel/Carousel";
import {Events} from "./events/Events";
import {News} from "./news/News";
import style from "./main.module.css";

export const Main = () => {
    return(
        <div className={`style.main_container`}>
            <Slide/>
            <Events/>
            <News/>
        </div>
    )
}