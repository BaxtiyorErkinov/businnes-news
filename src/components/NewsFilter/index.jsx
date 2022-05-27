import React from 'react';

import block from '../../assets/images/icons/block.png'
import list from '../../assets/images/icons/list.png'

import "./news_filter.scss";

const NewsFilter = ({setTypes, setTypesLoad,setLoadAll,setBlock }) => {

  function popular() {
    setTypes("popular")
    setTypesLoad(true)
  }

  function actual() {
    setTypes("actual")
    setTypesLoad(true)
  }

  function setAll() {
    setLoadAll(true)
  }

  function blockTrue() {
    setLoadAll(true)
    setBlock(true)
  }
  function blockFalse() {
    setLoadAll(true)
    setBlock(false)
  }

  return (
    <div className="news__filter">
      <div className="news__filter__container">
        <div className="filter__item active" onClick={() => setAll()}>Все</div>
        <div className="filter__item" onClick={() => popular()}>Популярное</div>
        <div className="filter__item" onClick={() => actual()}>Актуальное</div>
      </div>

      <div className="list">
        <div className="list__item" onClick={() => blockTrue()} ><img src={block} alt="" /></div>
        <div className="list__item" onClick={() => blockFalse()} ><img src={list} alt="" /></div>
      </div>
    </div>
  )
}

export default NewsFilter;