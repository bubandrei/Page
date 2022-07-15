import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import arrows from "../../assets/images/18.png";
const Navbar = () =>
{
  const navRef = useRef();
  const showNavbar = () =>
  {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="padLeft"><a href="#">Коталог домов <img src={ arrows } /></a></div>
      <div className="padLeft"><a href="">Услуги <img src={ arrows } /></a></div>
      <div className="padLeft"><a href="">О нас <img src={ arrows } /></a></div>
      <div className="padLeft"><a href="">Контакты <img src={ arrows } /></a></div>
      <div className="padLeft blogHover"><a href="">Блог <img src={ arrows } /></a>
        <div className="menu">
          <div className="textMenu">Кейсы
            <div className="bottomLine"></div></div>
          <div className="textMenu">Видеоблог
            <div className="bottomLine"></div></div>
          <div className="textMenu">Полезные статьи</div>
        </div></div>

      {/* <button
          className='nav_btn nav_close_btn'
          onClick={showNavbar}
        >
          <FaTimes />
        </button> */}

      {/* <button 
      className='nav_btn'
      onClick={showNavbar}>
        <FaBars />
      </button> */}
    </header>
  );
};
export default Navbar;
