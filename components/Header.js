import React from 'react';
import Link from 'next/link'
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
     <Link href="/">
        <div className="logo">Reactjs<span>official</span>
        </div>
        </Link>
        <div className="ToggleMenu icon" id='menuon' onClick={toggleMenu}>
          <FiMenu />
        </div>
        <div className="CloseMenu icon" id='menuoff' onClick={offMenu}>
          <AiOutlineClose />
        </div>
        <div className="menulinks">
        <Link href="/courses">
          <a href="#">React Training</a>
          </Link>
        <Link href="/">
          <a href="#">Become Our Team</a>
          </Link>
          <a href="#contact">Contact Us</a>
          <a href="https://blogs.reactjsofficial.com/">Blogs</a>
        </div>
        <div className="share">
          <a href="https://t.me/+RadJamoTjPJsl3k"><FaTelegramPlane className='icon telegram' /></a>
          <a href="https://www.instagram.com/reactjsofficial/"><FaInstagram className='icon instagram' /></a>
          <a href="https://chat.whatsapp.com/FWRWiR3mtH49DusKSmDX6"><BsWhatsapp className='icon whatsapp' /></a>
        </div>
        <div className="MobileMenu" id='MobileMenu'>
        <Link href="/courses">
          <a href="#">React Training</a>
          </Link>
          <Link href="/">
          <a href="#">Become Our Team</a>
          </Link>
          <a href="#contact">Contact Us</a>
          <a href="https://blogs.reactjsofficial.com/">Blogs</a>
          <div className="Mobshare">
          <a href="https://t.me/+RadJamoTjPJsl3k"><FaTelegramPlane className='icon telegram' /></a>
          <a href="https://www.instagram.com/reactjsofficial/"><FaInstagram className='icon instagram' /></a>
          <a href="https://chat.whatsapp.com/FWRWiR3mtH49DusKSmDX6"><BsWhatsapp className='icon whatsapp' /></a>
        </div>
        </div>
     </header>
    </>
  );
}

export default Header;
