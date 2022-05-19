import React from 'react';

import block from '../../assets/images/icons/block.png'
import list from '../../assets/images/icons/list.png'

import "./news_filter.scss";

const NewsFilter = () => {
  return (
    <div className="news__filter">
      <div className="news__filter__container">
        <div className="filter__item active">Все</div>
        <div className="filter__item">Популярное</div>
        <div className="filter__item">Актуальное</div>
      </div>

      <div className="list">
        <div className="list__item"><img src={block} alt="" /></div>
        <div className="list__item"><img src={list} alt="" /></div>
      </div>
    </div>
  )
}

export default NewsFilter;