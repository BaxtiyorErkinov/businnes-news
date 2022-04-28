import React from 'react';

import Icon from '../../assets/images/news/urgent.svg'

import "./urgentnews.scss";

const news = [
  {
    id: 1,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    date: "19 апреля, 12:28",
    category: "#Маркетинг"
  },
  {
    id: 1,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    date: "19 апреля, 12:28",
    category: "#Маркетинг"
  },
  {
    id: 1,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    date: "19 апреля, 12:28",
    category: "#Маркетинг"
  },
  {
    id: 1,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    date: "19 апреля, 12:28",
    category: "#Маркетинг"
  },
  {
    id: 1,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    date: "19 апреля, 12:28",
    category: "#Маркетинг"
  }, {
    id: 1,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    date: "19 апреля, 12:28",
    category: "#Маркетинг"
  }
]

const UrgentNews = () => {
  return (
    <div className="urgent__news__wrapper">
      <div className="urgent__news__container">
        <div className="urgent__news__title">
          <img src={ Icon } alt="" />
          <span>Срочное</span>
        </div>
        <div className="urgent__news__items">
          { news.map(item => (
              <div className="urgent__news__item">
                <div className="urgent__news__item__content">
                  <p>
                    { item.content }
                  </p>
                </div>
                <div className="urgent__news__item__info">
                  <span>{ item.date }</span>
                  <span>{ item.category }</span>
                </div>
              </div>
            )) }
        </div>
      </div>
    </div>
  )
}

export default UrgentNews;