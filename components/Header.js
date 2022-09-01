import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
  function toggleMenu(){
    document.getElementById('menuon').style.display = "none"
    document.getElementById('menuoff').style.display = "block"
    document.getElementById('MobileMenu').style.display = "flex"
  }
  function offMenu(){
    document.getElementById('menuon').style.display = "block"
    document.getElementById('menuoff').style.display = "none"
    document.getElementById('MobileMenu').style.display = "none"
  }
  return (
    <>
     <header className='head'>
        <div className="logo">
          ReactJs
          <span>
            Officail
          </span>
        </div>
        <div className="ToggleMenu icon" id='menuon' onClick={toggleMenu}>
          <FiMenu />
        </div>
        <div className="CloseMenu icon" id='menuoff' onClick={offMenu}>
          <AiOutlineClose />
        </div>
        <div className="menulinks">
          <a href="#">React Training</a>
          <a href="#">Become Our Team</a>
          <a href="#">Contact Us</a>
          <a href="#">Blogs</a>
        </div>
        <div className="share">
          <FaTelegramPlane className='icon' />
          <FaInstagram className='icon' />
          <BsWhatsapp className='icon' />
        </div>
        <div className="MobileMenu" id='MobileMenu'>
        <a href="#">React Training</a>
          <a href="#">Become Our Team</a>
          <a href="#">Contact Us</a>
          <a href="#">Blogs</a>
          <div className="Mobshare">
          <FaTelegramPlane className='icon' />
          <FaInstagram className='icon' />
          <BsWhatsapp className='icon' />
        </div>
        </div>
     </header>
    </>
  );
}

export default Header;
