import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Shape from "../../assets/images/news/Shape.svg";
import "./Category.scss";

function Category({ dataLoad, setDataLoad }) {
    const id = useParams().id;
    const title = useParams().title;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://businessnews.uz/backend/v1/api/main/news-list/${id}/`)

            .then((res) => {
                setData(res.data);
                setDataLoad(false);
            });
    }, [dataLoad]);

    return (
        <>
            <Header></Header>
            <div className="news category__box">
                <div className="other__news__top">
                    <div className="other__news__title">{title}</div>
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

            <Footer></Footer>
        </>
    );
}

export default Category;
