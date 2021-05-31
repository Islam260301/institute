import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import style from "./events.module.css";
import news_1 from "../../../assets/images/news_1.jpg";

export function Events() {
    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().toLocaleString('default', { month: 'long' }) );
    const [hours, setHours] = useState(new Date().getHours());
    const [minute, setMinutes] = useState(new Date().getMinutes());

    const onChangeDate = (newDate) => {
        onChange(newDate)
        setDate(newDate.getDate())
        setMonth(newDate.toLocaleString('default', { month: 'long' }))
        setHours(newDate.getHours())
        setMinutes(newDate.getMinutes())
    }

    return (
        <div className={"row " + style.events_container}>
            <div className={"col-12 mb-3 text-center"}>
                <h2>Events of May</h2>
                <hr/>
            </div>
            <div className={"col-md-4 col-12 " + style.m_0 + style.event_item}>
                <div className={"row"}>
                    <img className={style.events_img} src={news_1}/>
                </div>
                <div className={"row"}>
                    <div className={"col-md-4 col-12 " + style.events_time}>
                        <div className="meta-text text-center">
                            <h3>{date}</h3>
                            <p>{month}</p>
                            <span>{`${hours}:${minute}`}</span>
                        </div>
                    </div>
                    <div className={"col-md-8 col-12"}>
                        <div className="main-text"><h6><a
                            href="https://inai.kg/event/priglashaem-na-den-otkrytyh-dverey-dlya-abiturientov-v-onlayn-rezhime">В
                            КГИПИ День Открытых Дверей!</a></h6>
                            <ul>
                                <li><i className="fa fa-user"/> КГИПИ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"col-md-4 col-12"}/>

            <div className={"col-md-4 col-12"}>
                <Calendar
                    className={"col-md-4 col-12 " + style.m_0}
                    onChange={(newDate) => onChangeDate(newDate)}
                    value={value}
                />
            </div>
            <div className={`d-flex justify-content-center`}>
                <button type="button" className={`btn btn-info`}>Show more</button>
            </div>
        </div>
    )
}
