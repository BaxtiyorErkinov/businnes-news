import React from "react";

import Header from "../../components/Header";
import Search from "../../components/Search";
import News from "../../components/News";
import "./Home.scss";

import { Helmet } from "react-helmet";

function Home() {
    return (
        <div className="app__wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - business news</title>
            </Helmet>
            <Header />
            <Search />
            <News />
        </div>
    );
}

export default Home;
