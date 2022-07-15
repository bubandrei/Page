import React from "react";
import home from "../../assets/images/home1.png";
import "./FootForm.css";

const FootForm = () =>
{
    return (
        <div className="wrapFootForm">
            <div className="posImg" >
                <img src={ home } className="homeImg" />
                <div className="cloud17Img"></div>
                <div className="img10"></div>
                
            </div>
            <div className="wrapForm">
                <form action="" className="styleForm">
                    <div className="titleFootForm">Хотите с нами сотрудничать?</div>
                    <div className="textFootForm">Заполните форму и мы перезвоним вам в течение 30 минут!</div>
                    <input className="inputField" type="text" placeholder="Ваше имя" />
                    <input className="inputField" type="text" placeholder="Номер телефона" />
                    <textarea className="inputField" name="" id="" cols="30" rows="10" placeholder="Ваше сообщение (необязательно)"></textarea>
                    <input type="submit" name="" id="" className="btnFootForm" />
                </form>
            </div>
            <div className="img11"></div>
        </div>
    )
}
export default FootForm