import React from "react";
import "./Footer.scss";
import footer_logo from "../../assets/images/icons/footer__logo.svg";
import sent from "../../assets/images/icons/sent.svg";
import insta from "../../assets/images/icons/insta.png";
import tg from "../../assets/images/icons/tg.png";
import face from "../../assets/images/icons/face.png";

function Footer() {
    return (
        <div className="footer__section">
            <div className="footer__container">
                <div className="footer__first__row">
                    <img src={footer_logo} alt="" className="footer__icon" />
                    <div className="footer__item">
                        Маркетинг и бизнес Узбекистана
                    </div>
                    <div className="footer__copyright">
                        Copyright 2022, All Rights Reserved.
                    </div>
                </div>
                <div className="footer__second__row">
                    <div className="site__map">Контакты</div>
                    <div className="site__map">О сайте</div>
                    <div className="site__map">Реклама</div>
                    <div className="site__map">Вакансии</div>
                </div>
                <div className="footer__third__row">
                    <div className="subscribe">
                        Подпишитесь на наши новости и обновления
                    </div>
                    <div className="contact__box">
                        <input type="text" placeholder="Введите ваш E-mail" />
                        <button><img src={sent} alt="" /></button>
                    </div>
                    <div className="footer__social">
                        <img src={face} alt="" />
                        <img src={insta} alt="" />
                        <img src={tg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
