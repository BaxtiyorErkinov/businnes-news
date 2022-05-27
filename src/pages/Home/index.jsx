import React from "react";

import Header from "../../components/Header";
import Search from "../../components/Search";
import News from "../../components/News";
import "./Home.scss";
import Footer from "../../components/Footer/Footer";

import { Helmet } from "react-helmet";

function Home({ dataLoad, setDataLoad }) {
    return (
        <div className="app__wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - business news</title>
            </Helmet>
            <Header dataLoad={dataLoad} setDataLoad={setDataLoad} />
            <Search />
            <News />
            <Footer />
        </div>
    );
}

export default Home;
