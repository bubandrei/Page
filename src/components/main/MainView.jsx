import React from "react";
import article from "../../assets/images/article.png";
import portfolio from "../../assets/images/portfolio.png";
import video from "../../assets/images/video.png";
import clouds2 from "../../assets/images/13.png";
import calculator from "../../assets/images/20.png";
import binoqle from "../../assets/images/21.png";
import circle from "../../assets/images/22.png";
import man from "../../assets/images/23.png";

import "./MainView.css";


const MainView = () =>
{
  return (
    <div className="wrapMain">
      <div className="title">
        Мы знаем о строительстве все, каждый новый проект — это отдельная
        история
      </div>
      <div className="mainCover">
        Здесь мы делимся с вами историями, уникальным пытом, реальными кейсами и
        видео-обзорами. Это дает нам стимул развиваться и держать руку на
        пульсе, а вам позволяет наблюдать за нашими рабочими процессами и
        учиться вместе с нами.
      </div>
      <div className="flexIcons">
        <div className="fixSize">
          <div className="imgStyleIcon"><img className="positionIcons" src={ article } /></div>
          <div className="styleText">Кейсы</div>
        </div>
        <div className="fixSize">
          <div className="imgStyleIcon"><img className="positionIcons" src={ portfolio } /></div>
          <div className="styleText">Видеоблог</div>
        </div>
        <div className="fixSize">
          <div className="imgStyleIcon"><img className="positionIcons" src={ video } /></div>
          <div className="styleText">Полезные статьи</div>
        </div>
      </div>
      <div className="wrapInput">
        <div className="styleInput">
          <input className="inputFill" type="text" placeholder="Ваше имя" />
          <input className="inputFill" type="number" placeholder="Номер телефона" />
          <input className="inputFill btnSend" type="submit" value="Получить консультацию" />
        </div>
        <div className="bottomText">
          Ищите профессионалов? Оставьте заявку и мы проконсультируем вас
          абсолютно бесплатно!
        </div>
      </div>
      <div className="topClouds2"><img src={clouds2}/></div>
      <div className="iconsRight">
        <div className="iconR"><a href="#"><img src={calculator}/></a></div>
        <div className="iconR"><a href="#"><img src={binoqle}/></a></div>
        <div className="iconR"><a href="#"><img src={circle}/></a></div>
        <div className="iconR"><a href="#"><img src={man}/></a></div>
      </div>
    </div>
  );
};
export default MainView;
