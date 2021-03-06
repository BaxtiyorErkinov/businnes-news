import axios from "axios";
import React, { useEffect, useState } from "react";
import "./othernews.scss";
import { Link } from "react-router-dom";

import Shape from "../../assets/images/news/Shape.svg";

const OtherNews = ({setTypes, setTypesLoad,types,typesLoad, setLoadAll ,loadAll }) => {
    const [local, setLocal] = useState([]);

    useEffect(() => {
        axios
            .get("https://businessnews.uz/backend/v1/api/main/news-list/1")
            .then((res) => {
                setLocal(res.data.slice(0, 4));
            });
            setLoadAll(false)
    }, [loadAll]);

    useEffect(() => {

        if (types == "popular") {
            axios
            .get("https://businessnews.uz/backend/v1/api/main/popular-news/1/")
            .then((res) => {
                setLocal(res.data.slice(0, 4));
            })
        }
        if (types == "actual") {
            axios
            .get("https://businessnews.uz/backend/v1/api/main/actual-news/1/")
            .then((res) => {
                setLocal(res.data.slice(0, 4));
            })
        }

    },[typesLoad])

    return (
        <div className="othernews__container">
            <div className="other__news__items">
                {local
                    ? local.map((item, key) => (
                          <Link
                              to={`/detail/${item.id}`}
                              className="other__news__item"
                              key={key}
                          >
                              <div className="other__news__item__img">
                                  <img
                                      src={`https://businessnews.uz${item.img}`}
                                      width="400"
                                      height="275"
                                      alt=""
                                  />
                                  <Link
                                      to={`/category/${item.category.id}/${item.category.title}`}
                                      className="hashtag"
                                  >
                                      {item.category.title}
                                  </Link>
                              </div>
                              <div className="other__news__item__content">
                                  <p className="other__news__item__content__title">
                                      {item.title}
                                  </p>
                                  <p className="other__news__item__content__desc">
                                      {item.desc.slice(0, 100)}...
                                  </p>
                                  <div className="other__news__item__content__info">
                                      <span className="date">
                                          {item.date_created}
                                      </span>
                                      <span className="views_count">
                                          <img src={Shape} alt="" />
                                          {item.view_count}
                                      </span>
                                  </div>
                              </div>
                          </Link>
                      ))
                    : ""}
            </div>
        </div>
    );
};

export default OtherNews;
