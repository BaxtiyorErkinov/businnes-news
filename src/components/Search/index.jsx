import React, { useEffect, useState } from "react";

import Zoom from "../../assets/images/search/zoom.svg";
import Weather from "../../assets/images/search/weather.svg";
import Flag from "../../assets/images/search/flag.svg";
import RightArrow from "../../assets/images/search/right_arrow.svg";
import axios from "axios";
import { BiMoon } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import "./search.scss";

const Search = () => {
    const [homedetails, setHomedetails] = useState("");
    useEffect(() => {
        axios
            .get("https://businessnews.uz/backend/v1/api/main/home-details/")
            .then((res) => {
                setHomedetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    function cons() {
        console.log("homedetails", homedetails);
    }

    return (
        <div className="search__wrapper">
            <div className="search__container">
                <div className="search__container__items">
                    <div className="search__container__items__input">
                        <input type="text" placeholder="ПОИСК..." />
                        <img src={Zoom} alt="" />
                    </div>
                    <div className="search__container__items__weather">
                        { homedetails.icon !== "01d"  & homedetails.icon !== "01n" ? <img
                            src={`http://openweathermap.org/img/wn/${homedetails.icon}.png`}
                            alt=""
                            className="search__container__items__weather__logo"
                        /> : ""}
                        { homedetails.icon === "01d" ? <BiSun style={{color:"orange" , fontSize:"28px"}} /> : ""}
                        { homedetails.icon === "01n" ? <BiMoon style={{ fontSize:"28px"}} /> : ""}
                        <span>
                            Сейчас{" "}
                            {homedetails.current_temp < 0
                                ? homedetails.current_temp.slice(0, 3)
                                : `+${homedetails.current_temp}`.slice(0, 3)}
                        </span>
                        <img src={RightArrow} alt="" />
                    </div>
                    <div className="search__container__items__currency">
                        <img
                            src={Flag}
                            alt=""
                            className="search__container__items__currency__logo"
                        />
                        <span>USD {homedetails.USD} </span>
                        <img src={RightArrow} alt="" onClick={() => cons()} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
