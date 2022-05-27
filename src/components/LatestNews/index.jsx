import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LatestNews.scss';



const LatestNews = ({ load, setLoad }) => {
  const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        axios
            .get("https://businessnews.uz/backend/v1/api/main/latest-news/")
            .then((res) => {
                setLatestNews(res.data.slice(0, 4));
            });
    }, []);

  function loadF() {
    setLoad(true)
  }
  return (
    <div className="latest__news__wrapper">
      <div className="latest__news__container">
        <div className="latest__news__items">
          { latestNews.map(item => (
              <Link to={`/detail/${item.id}`} className="latest__news__item" onClick={() => loadF()} key={ item.id}>
                <div className="latest__news__item__img">
                  <img src={`https://businessnews.uz${item.img}`} width="90" height="90" alt="" />
                </div>
                <div className="latest__news__item__content">
                  <p>
                    { item.desc.slice(0,75) }...
                  </p>
                </div>
              </Link>
            )) }
        </div>
      </div>
    </div>
  )
}

export default LatestNews;