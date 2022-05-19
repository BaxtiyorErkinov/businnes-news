import axios from "axios";
import React, { useEffect, useState } from "react";

import './LatestNews.scss';



const LatestNews = (props) => {
  const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        axios
            .get("https://businessnews.uz/backend/v1/api/main/latest-news/")
            .then((res) => {
                setLatestNews(res.data.slice(0, 4));
            });
    }, []);
  return (
    <div className="latest__news__wrapper">
      <h1 className="latest__news__title" id="latest__title">{ props.title }</h1>
      <div className="latest__news__container">
        <div className="latest__news__items">
          { latestNews.map(item => (
              <div className="latest__news__item" key={ item.id}>
                <div className="latest__news__item__img">
                  <img src={`https://businessnews.uz${item.img}`} width="90" height="90" alt="" />
                </div>
                <div className="latest__news__item__content">
                  <p>
                    { item.desc.slice(0,75) }...
                  </p>
                </div>
              </div>
            )) }
        </div>
      </div>
    </div>
  )
}

export default LatestNews;