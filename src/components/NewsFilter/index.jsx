import React from 'react';

import "./news_filter.scss";

const NewsFilter = () => {
  return (
    <div className="news__filter">
      <div className="news__filter__container">
        <div className="filter__item active">Все</div>
        <div className="filter__item">Популярное</div>
        <div className="filter__item">Актуальное</div>
        <div className="filter__item">Последнее</div>
      </div>
    </div>
  )
}

export default NewsFilter;