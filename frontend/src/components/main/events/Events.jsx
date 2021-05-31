import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import news_1 from "../../../assets/images/news_1.jpg";

export function Events() {
    const [value, onChange] = useState(new Date());

    return (
        <div className={"row"}>
            <div className={"col-12 mb-3 text-center"}>
                <h2>Events of May</h2>
                <hr/>
            </div>
            <div className={"col-md-4 col-12"}>
                <div className={"row"}>
                    <img  src={news_1}/>
                </div>
                <div className={"row"}>
                    <div className={"col-md-4 col-12"}>
                        <div className="meta-text text-center">
                            <h3>26</h3>
                            <p>мая</p>
                            <span>15:30</span>
                        </div>
                    </div>
                    <div className={"col-md-8 col-12"}>
                        <div className="main-text"><h6><a
                            href="https://inai.kg/event/priglashaem-na-den-otkrytyh-dverey-dlya-abiturientov-v-onlayn-rezhime">В
                            КГИПИ День Открытых Дверей!</a></h6>
                            <ul>
                                <li><i className="fa fa-user"></i> КГИПИ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"col-md-4 col-12"}/>

            <div className={"col-md-4 col-12"}>
                <Calendar
                    className={"col-md-4 col-12"}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    )
}
