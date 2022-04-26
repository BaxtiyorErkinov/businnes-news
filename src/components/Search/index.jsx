import React from 'react';

import Zoom from '../../assets/images/search/zoom.svg'
import Weather from '../../assets/images/search/weather.svg'
import Flag from '../../assets/images/search/flag.svg'
import RightArrow from '../../assets/images/search/right_arrow.svg'

import "./search.scss";

const Search = () => {
  return (
    <div className="search__wrapper">
      <div className="search__container">
        <div className="search__container__items">
          <div className="search__container__items__input">
            <input type="text" placeholder="ПОИСК..." />
            <img src={ Zoom } alt="" />
          </div>
          <div className="search__container__items__weather">
            <img src={ Weather } alt="" className="search__container__items__weather__logo" />
            <span>Сейчас +15</span>
            <img src={ RightArrow } alt="" />
          </div>
          <div className="search__container__items__currency">
            <img src={ Flag } alt="" className="search__container__items__currency__logo" />
            <span>USD 11 260,2 </span>
            <img src={ RightArrow } alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;