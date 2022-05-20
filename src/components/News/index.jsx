import React, { useState, useEffect } from "react";

import LatestNews from "../LatestNews/";
import TopNews from "../TopNews/";
import NewsFilter from "../NewsFilter/";
import UrgentNews from "../UrgentNews/";
import OtherNews from "../OtherNews/";
import { FaAngleRight } from "react-icons/fa";
import "./news.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Shape from '../../assets/images/news/Shape.svg'

const News = () => {
    const [mark, setMark] = useState([]);
    const [keyses, setKeyses] = useState([]);

    useEffect(() => {
        axios
            .get("https://businessnews.uz/backend/v1/api/main/news-list/3/")

            .then((res) => {
                setMark(res.data.slice(0, 5));
            });

        axios
            .get("https://businessnews.uz/backend/v1/api/main/news-list/2/")

            .then((res) => {
                setKeyses(res.data.slice(0, 5));
            });
    }, []);

    return (
        <div className="news">
            <div className="news__container">
                <div className="top__news">
                    <TopNews />
                </div>
                <div className="latest__news">
                    <LatestNews title="Последние новости" />
                </div>
            </div>
            <NewsFilter />
            {/* local NEWS */}
            <div className="other__news">
                <div className="other__news__top">
                    <div className="other__news__title">Локальные новости</div>
                    <Link to="/" className="more">
                        Еще{" "}
                        <FaAngleRight
                            style={{
                                cursor: "pointer",
                                transition: "0.3s",
                                fontSize: "20px",
                            }}
                            id="currency__angle"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="mini__container">
                    <UrgentNews />
                    <OtherNews />
                </div>

                <br />
                <br />

                {/* KEYSES */}

                <div className="other__news__top">
                    <div className="other__news__title">Кейсы</div>
                    <Link to="/" className="more">
                        Еще{" "}
                        <FaAngleRight
                            style={{
                                cursor: "pointer",
                                transition: "0.3s",
                                fontSize: "20px",
                            }}
                            id="currency__angle"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="mini__container keyses">
                    <div className="othernews__container">
                        <div className="other__news__items">
                            {keyses
                                ? keyses.map((item, key) => (
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
                                              <div className="hashtag">
                                                  {item.hashtag}
                                              </div>
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
                </div>
                <br />
                <br />

                {/* MARKETING */}

                <div className="other__news__top">
                    <div className="other__news__title">Маркетинг</div>
                    <Link to="/" className="more">
                        Еще{" "}
                        <FaAngleRight
                            style={{
                                cursor: "pointer",
                                transition: "0.3s",
                                fontSize: "20px",
                            }}
                            id="currency__angle"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="mini__container marketing">
                    <div className="othernews__container">
                        <div className="other__news__items">
                            {mark
                                ? mark.map((item, key) => (
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
                                              <div className="hashtag">
                                                  {item.hashtag}
                                              </div>
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
                </div>
            </div>
        </div>
    );
};

export default News;
