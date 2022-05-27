import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./detailcomp.scss";
import { Link } from "react-router-dom";
import Shape from "../../assets/images/news/Shape.svg";

function DetailComp({ load, setLoad }) {
    const params = useParams();

    const [detail, setDetail] = useState([]);

    function comment_box() {
        var input =  document.getElementById("comment__inp");
        var btn = document.getElementById("comment__btn");
        input.style.paddingBottom = "120px";
        btn.style.display = "block";
        

    }

    useEffect(() => {
        axios
            .get(
                `https://businessnews.uz/backend/v1/api/main/news-details/${params.id}`
            )
            .then((res) => {
                setDetail(res.data);
            });
            setLoad(false)
    }, [load]);

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
                    <div className="news__view">
                    <img src={Shape} alt="" /> {detail.view_count}</div>
                </div>

                <div className="news__desc">{detail.blog}</div>
                <br />
                <div className="news__hashtag">
                    {
                        detail.hashtag ? detail.hashtag.split(" ").map((item, index) => {
                            return (
                                <Link to={`/hashtag=${item.replace("#", "")}`} key={index} className="news__hashtag__item">
                                    {item}
                                </Link>
                            )
                        }) : ""
                        
                    }
                </div>
                <br />

            </div>
            <div className="comments">
                <div className="comments__title">0 комментария</div>

                <input type="text" className="comments__input" name="" placeholder="Написать комментарий..." id="comment__inp" onClick={() => comment_box()} />

                <button className="comments__btn" id="comment__btn">Submit</button>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default DetailComp;
