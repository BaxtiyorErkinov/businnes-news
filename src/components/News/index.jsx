import React from 'react';

import LatestNews from '../LatestNews/';
import TopNews from '../TopNews/';
import NewsFilter from '../NewsFilter/'
import UrgentNews from '../UrgentNews/'
import OtherNews from '../OtherNews/'

import "./news.scss";

const News = () => {
  return (
    <div className="news">
      <div className="news__container">
        <div className="top__news">
          <TopNews />
        </div>
        <div className="latest__news">
          <LatestNews />
        </div>
      </div>
      <NewsFilter />
      <div className="other__news">
        <UrgentNews />
        <OtherNews />
      </div>
    </div>
  )
}

export default News;