import React from 'react';
import {Slide} from "./carousel/Carousel";
import {Events} from "./events/Events";
import {News} from "./news/News";

export const Main = () => {
    return(
        <div>
            <Slide/>
            <Events/>
            <News/>
        </div>
    )
}