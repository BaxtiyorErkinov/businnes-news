import axios from "axios";
import React, { useEffect, useState } from "react";
import "./othernews.scss";
import { Link } from "react-router-dom";

const OtherNews = () => {
    const [local, setLocal] = useState([]);

    useEffect(() => {
        axios
            .get("https://businessnews.uz/backend/v1/api/main/news-list/1")
            .then((res) => {
                setLocal(res.data.slice(0, 4));
            });
    }, []);

    return (
        <div className="othernews__container">
            <div className="other__news__items">
                { local ? 
                local.map((item,key) => (
                    <Link to={`/detail/${item.id}`} className="other__news__item" key={key}>
                            <div className="other__news__item__img">
                                <img
                                    src={`https://businessnews.uz${item.img}`}
                                    width="400"
                                    height="275"
                                    alt=""
                                />
                            </div>
                            <div className="other__news__item__content">
                                <p>{item.desc.slice(0,150)}...</p>
                            </div>
                    </Link>
                )) : "" }
            </div>
        </div>
    );
};

export default OtherNews;
