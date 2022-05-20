import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./detailcomp.scss";

function DetailComp() {
    const params = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://businessnews.uz/backend/v1/api/main/news-details/${params.id}`
            )
            .then((res) => {
                setDetail(res.data);
            });
    }, []);
    return (
        <div className="detail__wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{detail.title}</title>
            </Helmet>
            <div className="detail__container">
                <img
                    src={`https://businessnews.uz${detail.img}`}
                    className="news__img"
                    alt=""
                />

                <div className="news__title">{detail.title}</div>
                <div className="news__desc">{detail.desc}</div>

                <div className="news__bottom">
                    <div className="news__date">{detail.date_created}</div>
                    <div className="news__view">{ detail.view_count }</div>
                </div>
            </div>
        </div>
    );
}

export default DetailComp;
