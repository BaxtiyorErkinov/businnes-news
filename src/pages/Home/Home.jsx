import React from 'react'

import Header from '../../components/Header'
import Search from '../../components/Search'
import News from '../../components/News'
import "./Home.scss"

function Home() {
  return (
    <div className="app__wrapper">
      <Header />
      <Search />
      <News />
    </div>
  )
}

export default Home