import React from 'react';

import Img from '../../assets/images/news/mini3.png'

import "./othernews.scss";

const news = [
  {
    id: 1,
    img: Img,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY"
  },
  {
    id: 2,
    img: Img,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY"
  },
  {
    id: 3,
    img: Img,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY"
  },
  {
    id: 4,
    img: Img,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY"
  }
]

const OtherNews = () => {
  return (
    <div className="othernews__container">
      <div className="other__news__items">
        { news.map(item => (
            <div className="other__news__item">
              <div className="other__news__item__img">
                <img src={ item.img } alt="" />
              </div>
              <div className="other__news__item__content">
                <p>{item.content}</p>
              </div>
            </div>
          )) }
      </div>
    </div>
  )
}

export default OtherNews;