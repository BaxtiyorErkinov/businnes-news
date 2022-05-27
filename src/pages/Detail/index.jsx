import React, {useState} from "react";
import Header from "../../components/Header";

import LatestNews from "../../components/LatestNews";
import DetailComp from "../../components/DetailComp";

import "./Detail.scss"


function Detail() {
    const [load, setLoad] = useState(false);
    
    return (
        <div>
            
            <Header></Header>
            <div className="news__container__detail">
                <div className="top__news">
                    <DetailComp load={load} setLoad={setLoad} />
                </div>
                <div className="latest__news">
                    <LatestNews load={load} setLoad={setLoad} />
                </div>
            </div>
        </div>
    );
}

export default Detail;
