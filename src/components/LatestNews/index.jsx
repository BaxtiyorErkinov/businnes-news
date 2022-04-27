import React from 'react';

import IMG from '../../assets/images/news/latest.png'

import './LatestNews.scss';

const news = [
  {
    id: 1,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    img: IMG
  },
  {
    id: 2,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    img: IMG
  },
  {
    id: 3,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    img: IMG
  },
  {
    id: 4,
    content: "Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY",
    img: IMG
  }

]

const LatestNews = () => {
  return (
    <div className="latest__news__wrapper">
      <h1 className="latest__news__title">Последние новости</h1>
      <div className="latest__news__container">
        <div className="latest__news__items">
          { news.map(item => (
              <div className="latest__news__item" key={ item.id}>
                <div className="latest__news__item__img">
                  <img src={ item.img } alt="" />
                </div>
                <div className="latest__news__item__content">
                  <p>
                    { item.content }
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