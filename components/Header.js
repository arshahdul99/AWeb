// import Link from 'next/link'
import React, { useEffect } from "react";
import { FaTelegram } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { FaWhatsapp } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

function Header() {
  //Function For On Menu
  function handleOnMenu(){
    document.getElementById('ShowMenu').style.display="none"
    document.getElementById('MobMenu').style.display="flex"
    document.getElementById('HideMenu').style.display="block"
  };
  //Function OFF Menu
  function handleOffMenu(){
    document.getElementById('ShowMenu').style.display="block"
    document.getElementById('MobMenu').style.display="none"
    document.getElementById('HideMenu').style.display="none"
  };
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.logo}>
          Reactjs
          <span>Officail</span>
        </div>
        <button className={styles.toogleMenu} id="ShowMenu" onClick={handleOnMenu}>
          <GiHamburgerMenu className={styles.burgerMenu} />
          <div className={styles.Mlinks} id="MobMenu">
          <a href="#">React Training</a>
          <a href="#">Become Our Team</a>
          <a href="#">Contact Us</a>
          <a href="#">Blogs</a>
          <div className={styles.icons1}>
            <FaTelegram className={styles.iconshov1} />
            <FiInstagram className={styles.iconshov1} />
            <FaWhatsapp className={styles.iconshov1} />
          </div>
        </div>
        </button>
        <button className={styles.closeMenu} id="HideMenu" onClick={handleOffMenu}>
          <GrClose className={styles.iconshov} />
        </button>
        <div className={styles.links}>
          <a href="#">React Training</a>
          <a href="#">Become Our Team</a>
          <a href="#">Contact Us</a>
          <a href="#">Blogs</a>
        </div>
        <div className={styles.icons}>
          <FaTelegram className={styles.iconshov} />
          <FiInstagram className={styles.iconshov} />
          <FaWhatsapp className={styles.iconshov} />
        </div>
      </header>
    </>
  )
}

export default Header;
