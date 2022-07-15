import React from "react";
import "./VideoBlog.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import vector from "../../assets/images/vector.png";
import listImg from "../../assets/images/9.png";

const VideoBlog = () =>{
  return (
    <div className="mainBlog ">
      <div className="mainImg "></div>
      <div className=" styleCloudImg"></div>
      <div className="styleListImg"><img src={ listImg } /></div>
      <div className="titleBlog ">Видеоблог</div>
      <div className="textBlog">
        Снимаем для вас интересные ролики, в которых делимся полезной
        информацией
      </div>
      <div className="fotoBlog ">
        <div className="generalForText">
          <div className="blackFoto">
            <img src={ img1 } className="styleFoto" />
          </div>
          <div className="titleVideo">
            <div className="topText">
              Как выбрать материал <div>для дома?</div>
            </div>
            <div className="vector">
              <img src={ vector } className="imgSize" />
            </div>
            <div className="footText">
              <b>Евгений Иванов,</b>
              <div>руководитель строительной бригады</div>
            </div>
          </div>
        </div>
        <div className="generalForText">
          <div className="blackFoto">
            <img src={ img2 } className="styleFoto" />
          </div>
          <div className="titleVideo">
            <div className="topText">
              Как выбрать подрядчика для <div>строительства дома?</div>
            </div>
            <div className="vector">
              <img src={ vector } className="imgSize" />
            </div>
            <div className="footText">
              <b> Егор Стародубцев,</b>
              <div>основатель компании</div>
            </div>
          </div>
        </div>
        <div className="generalForText">
          <div className="blackFoto">
            <img src={ img3 } className="styleFoto" />
          </div>
          <div className="titleVideo">
            <div className="topText">
              Преимущества кирпичного <div> дома</div>
            </div>
            <div className="vector">
              <img src={ vector } className="imgSize" />
            </div>
            <div className="footText">
              <b>Евгений Иванов,</b>
              <div>руководитель строительной бригады</div>
            </div>
          </div>
          {/* <div className="styleCloudImg"><img src={cloudImg}/></div> */ }
        </div>

      </div>
      <div className="blockforbtn">
        <button className="btnVideo">Больше полезных видео</button>
      </div>
      <div className="styleListImg2"><img src={ listImg } /></div>
    </div>
  );
};
export default VideoBlog;
