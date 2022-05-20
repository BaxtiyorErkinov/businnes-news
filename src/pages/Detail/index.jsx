import React from "react";
import Header from "../../components/Header";

import LatestNews from "../../components/LatestNews";
import DetailComp from "../../components/DetailComp";

import "./Detail.scss"


function Detail() {
    console.log("index");
    return (
        <div>
            
            <Header></Header>
            <div className="news__container__detail">
                <div className="top__news">
                    <DetailComp />
                </div>
                <div className="latest__news">
                    <LatestNews />
                </div>
            </div>
        </div>
    );
}

export default Detail;
