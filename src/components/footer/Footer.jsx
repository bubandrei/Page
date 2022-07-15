import React from "react";
import "./Footer.css";
import logoBlack from "../../assets/images/image4.png"; 
import logoWhite from "../../assets/images/logo_white.png";
import vk from "../../assets/images/vk.png"; 
import insta from "../../assets/images/inst.png"; 
import facebook from "../../assets/images/facebook.png"; 
import youtube from "../../assets/images/youtube.png";  

const Footer = () =>
{
    return (
        <div className="wrapFooter">
            <div className="commonStyle">
                <div><img src={logoBlack} alt="" /></div>
                <div>
                    <button className="btnCall">Заказать звонок</button>
                </div>
            </div>
            <div className="commonStyle">
                <div>Главная</div>
                <div>Каталог</div>
                <div>Услуги</div>
                <div>Расчет стоимости</div>
                <div>Консультация архитектора</div>
            </div>
            <div className="commonStyle">
                <div>Экскурсия на объект</div>
                <div>3D-макет дома</div>
                <div>О нас</div>
                <div>Блог</div>
                <div>Контакты</div>
            </div>
            <div className="commonStyle">
                <div>Делимся крутыми проектами в соц.сетях. Подписывайтесь!</div>
                <div className="iconsFooter">
                    <img src={vk}/><img src={insta}/><img src={facebook}/><img src={youtube}/>
                </div>
                <div>Разработка и продвижение сайта:</div>
                <div>
                    <img src={logoWhite}/>
                </div>
            </div>
        </div>

    )
}
export default Footer