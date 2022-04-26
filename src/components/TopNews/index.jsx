import React from 'react';

import MainBanner from '../../assets/images/news/main_banner.png'

import "./topNews.scss";

const TopNews = () => {
  return (
    <div className="top__news__wrapper">
      <div className="top__news__wrapper__title">Главные новости</div>
      <div className="main__news">
        <div className="main__news__img">
          <img src={ MainBanner } alt="" />
        </div>
        <div className="main__news__content">
          <div className="main__news__content__top">
            <p className="title">Новый способ пить воду. Фирменный стиль для бренда КЛЮЧ от агентства ENDY</p>
            <p className="subtitle">Бренд воды КЛЮЧ — это принципиально новый способ того, как мы пьем воду. Новый нетипичный для категории подход и технологичность бренда нашли свое отражение
              в дизайне упаковки.</p>
            <p className="subtitle__second">Вода КЛЮЧ добывается из артезианской скважины на современной ферме на юге России в Краснодарском крае. Чистота и новизна — ценности бренда, которые нашли
              отражение в каждой детали.</p>
          </div>
          <div className="main__news__content__bottom">
            <div className="main__news__content__bottom__action">
              <span className="main__news__content__bottom__action__date">19 апреля, 12:28</span>
              <button className="main__news__content__bottom__action__btn">Читать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNews;