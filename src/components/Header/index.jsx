import React, { useState, useEffect } from "react";

import Logo from "../../assets/images/header/logo.png";
import World from "../../assets/images/header/world.svg";
import Zoom from "../../assets/images/header/zoom.svg";
import { Link } from "react-router-dom";

import "./Header.scss";
import axios from "axios";
import { useNavigate } from "react-router";

const Header = ({ setDataLoad }) => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        axios
            .get("https://businessnews.uz/backend/v1/api/main/category-list/")
            .then((res) => {
                setLinks(res.data);
            });
    }, []);

    let navigate = useNavigate();

    function load() {
        setDataLoad(true);
    }

    function search() {
        const query = document.getElementById("query").value;
        if (query) {
            navigate(`/search=${query}`);
        }
    }

    return (
        <div className="header__wrapper">
            <div className="header__container">
                <div className="header__up">
                    <Link to="/">
                        <img src={Logo} alt="" className="header__logo" />
                    </Link>
                    <div className="header__language">
                        <span className="header__language__item">
                            <img src={World} alt="" />
                            RU
                        </span>
                    </div>
                </div>
                <div className="header">
                    <ul className="header__links">
                        {links.map((link) => (
                            <li className="header__links__item">
                                <Link
                                    to={`/category/${link.id}/${link.title}`}
                                    onClick={() => load()}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="header__search">
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className="header__search__field"
                            id="query"
                        />
                        <img
                            src={Zoom}
                            alt=""
                            className="header__search__logo"
                            onClick={() => search()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
