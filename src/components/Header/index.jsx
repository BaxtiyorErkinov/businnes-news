import React from 'react';

import Logo from '../../assets/images/header/logo.png'
import World from '../../assets/images/header/world.svg'
import Zoom from '../../assets/images/header/zoom.svg'

import './Header.scss';

const links = [
  {
    id: 1,
    url: "#",
    title: "Кейсы"
  },
  {
    id: 2,
    url: "#",
    title: "Локальные новости"
  },
  {
    id: 3,
    url: "#",
    title: "Маркетинг"
  },
  {
    id: 4,
    url: "#",
    title: "Рекомендации"
  },
  {
    id: 5,
    url: "#",
    title: "Мировые новсти"
  }
]


const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__container">
        <div className="header">
          <img src={ Logo } alt="" className="header__logo" />
          <ul className="header__links">
            { links.map(link => (
                <li className="header__links__item">
                  <a href={ link.url }>
                    { link.title }
                  </a>
                </li>
              )) }
          </ul>
          <div className="header__search">
            <img src={ Zoom } alt="" className="header__search__logo" />
            <input type="text" placeholder="Поиск..." className="header__search__field" />
          </div>
          <div className="header__language">
            <span className="header__language__item">
                      		<img src={ World } alt="" />
                      		RU
                      	</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;