import React from "react";
import logo from "../../assets/images/image_1.png";
import box from "../../assets/images/Group_1087.png";
import phone from "../../assets/images/Group_1071.png";
import telegramm from "../../assets/images/Group_1279.png";
import viber from "../../assets/images/Group_1280.png";
import simplePhone from "../../assets/images/Group_1278.png";
import "./TopInfo.css";
import clouds from "../../assets/images/12.png"


const TopInfo = () => {
  return (
    <div className="wrap">
      <div className="topClouds"><img src={clouds}/></div>
      
      <div>
                <img src={logo} className="logo" />
      </div>

      <div className="workHour">
        <div>Пн-Сб: c 10:00 до 20:00</div>
        <div>Выходной: воскресенье</div>
      </div>
      <div className="maket">
        <img src={box} className="boxCircle" />
        <div className="oder"> Заказать 3D-макет дома</div>
      </div>
      <div className="phoneWrapper">
        <div className="phoneAva">
          <img src={phone} className="iconsPhone" />
        </div>
        <div>
          <div className="circlePhone">
            <div className="phone">+7 (915) 168-55-50</div>
          </div>
          <div className="icons">
            <img className="iconsStyle" src={simplePhone} />
            <img className="iconsStyle" src={telegramm} />
            <img className="iconsStyle" src={viber} />
          </div>
        </div>
      </div>
      <button className="btn_order">Заказать звонок</button>
    </div>
  );
};
export default TopInfo;
