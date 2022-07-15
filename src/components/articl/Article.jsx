import React from "react";
import "./Article.css";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";

const Article = () => {
  return (
    <div className="mainArticle">
      <div className="titleBlog2">Статьи</div>
      <div className="textBlog2">
        Пишем для вас полезные статьи, основанные на реальном опыте и
        многолетней практике
      </div>
      <div className="fotoBlog2">
        <div className="generalForText2">
          <div className="blackFoto2">
            <img src={img4} className="styleFoto2" />
          </div>
          <div className="titleArt">
            <div className="topText2">
              Как выбрать материал <div>для дома?</div>
            </div>
            <div className="footText2">Время на чтение: 3 минуты</div>
          </div>
        </div>
        <div className="generalForText2">
          <div className="blackFoto2">
            <img src={img5} className="styleFoto2" />
          </div>
          <div className="titleArt">
            <div className="topText2">
              Сколько стоит построить<div> дом?</div>
            </div>
            <div className="footText2">Время на чтение: 2 минуты</div>
          </div>
        </div>
        <div className="generalForText2">
          <div className="blackFoto2">
            <img src={img6} className="styleFoto2" />
          </div>
          <div className="titleArt">
            <div className="topText2">
              Как провести электричество <div> в частный дом</div>
            </div>
            <div className="footText2">Время на чтение: 3 минуты</div>
          </div>
        </div>
      </div>
      <div className="blockforbtn2">
        <button className="btnArt">Больше полезных видео</button>
      </div>
    </div>
  );
};
export default Article;
