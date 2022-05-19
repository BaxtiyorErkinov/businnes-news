import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./topNews.scss";

const TopNews = () => {

  const [main, setMain] = useState([]);

    useEffect(() => {
        axios
            .get("https://businessnews.uz/backend/v1/api/main/main-news/")
            .then((res) => {
                setMain(res.data);
            });
    }, []);

  return (
    <div className="top__news__wrapper">
      <div className="top__news__wrapper__title">Главные новости</div>
      <div className="main__news">
        <div className="main__news__img">
          <img src={`https://businessnews.uz${main?.img}`} alt="" />
        </div>
        <div className="main__news__content">
          <div className="main__news__content__top">
            <p className="title">{main?.title}</p>
            <p className="subtitle subtitle__second">{main?.desc?.slice(0,650)}...</p>
          </div>
          <div className="main__news__content__bottom">
            <div className="main__news__content__bottom__action">
              <span className="main__news__content__bottom__action__date">{ main?.date_created}</span>
              <Link to={`/detail/${main.id}`} className="main__news__content__bottom__action__btn">Читать</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNews;