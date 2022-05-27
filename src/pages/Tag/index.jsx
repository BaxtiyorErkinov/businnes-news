import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Shape from "../../assets/images/news/Shape.svg";


function Tag() {
    const tag = useParams().tag;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .post(`https://businessnews.uz/backend/v1/api/main/hashtag-filter/`, {"query" : tag})

            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <>
            <Header></Header>
            <div className="news category__box">
                <div className="other__news__top">
                    <div className="other__news__title">{tag}</div>
                </div>
                <div className="mini__container marketing">
                    <div className="othernews__container">
                        <div className="other__news__items">
                            {data
                                ? data.map((item, key) => (
                                      <Link
                                          to={`/detail/${item.id}`}
                                          className={`other__news__item item${key}`}
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
                                                  { key != 0 ? item.title.slice(0, 70) : item.title.slice(0, 100) }...
                                              </p>
                                              <p className="other__news__item__content__desc">
                                                  { key != 0 ? item.desc.slice(0, 100) : item.desc.slice(0, 1200) }...
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
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default Tag;
