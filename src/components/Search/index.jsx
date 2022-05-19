import React, { useEffect, useState } from "react";

import Zoom from "../../assets/images/search/zoom.svg";
import Weather from "../../assets/images/search/weather.svg";
import Flag from "../../assets/images/search/flag.svg";
import RightArrow from "../../assets/images/search/right_arrow.svg";
import axios from "axios";
import { BiMoon } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';
import "./search.scss";

const Search = () => {
    const [homedetails, setHomedetails] = useState("");
    const [currency, setCurrency] = useState(false);
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
        var rub = document.getElementById("currency_rub");
        var eur = document.getElementById("currency_eur");
        var angle = document.getElementById("currency__angle");
        var currency_box = document.getElementById("other__currency__box");

        if (currency) {
            rub.style.display = "none";
            eur.style.display = "none";
            currency_box.style.height = "0px";
            angle.style.transform = "rotate(0deg)";
        }
        else {
            rub.style.display = "block";
            eur.style.display = "block";
            currency_box.style.height = "124px";
            angle.style.transform = "rotate(90deg)";
        }
        setCurrency(!currency);
    }
    function weather() {
        var mon = document.getElementById("morn");
        var eve = document.getElementById("even");
        var nig = document.getElementById("nigh");
        var weather_angle = document.getElementById("weather__angle");
        var weather__box = document.getElementById("weather__box");
        var latest = document.getElementById("latest__title");

        if (currency) {
            mon.style.display = "none";
            eve.style.display = "none";
            nig.style.display = "none";
            weather__box.style.height = "0px";
            weather_angle.style.transform = "rotate(0deg)";
            latest.style.zIndex = "0";
        }
        else {
            mon.style.display = "block";
            eve.style.display = "block";
            nig.style.display = "block";
            weather__box.style.height = "138px";
            weather_angle.style.transform = "rotate(90deg)";
            latest.style.zIndex = "-1";
        }
        setCurrency(!currency);
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
                        <FaAngleRight style={{cursor:"pointer",transition:"0.3s",fontSize:"20px"}} id="weather__angle" alt="" onClick={() => weather()} />
                        <div className="weather__box" id="weather__box">
                            <span id="morn">MONR : {homedetails.morn_temp < 0
                                ? homedetails.morn_temp.slice(0, 3)
                                : `+${homedetails.morn_temp}`.slice(0, 3)} </span>
                            <span id="even">EVEN : {homedetails.eve_temp < 0
                                ? homedetails.eve_temp.slice(0, 3)
                                : `+${homedetails.eve_temp}`.slice(0, 3)} </span>
                            <span id="nigh">NIGH : {homedetails.night_temp < 0
                                ? homedetails.night_temp.slice(0, 3)
                                : `+${homedetails.night_temp}`.slice(0, 3)} </span>
                        </div>
                    </div>
                    <div className="search__container__items__currency">
                        <img
                            src={Flag}
                            alt=""
                            className="search__container__items__currency__logo"
                        />
                        <span>USD : {homedetails.USD} </span>
                        <FaAngleRight style={{cursor:"pointer",transition:"0.3s",fontSize:"20px"}} id="currency__angle" alt="" onClick={() => cons()} />
                        <div className="other__currency__box" id="other__currency__box">
                            <span id="currency_rub">RUB : {homedetails.RUB} </span>
                            <span id="currency_eur">EURO : {homedetails.EUR} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
