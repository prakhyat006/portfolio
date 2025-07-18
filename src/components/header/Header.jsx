import React, { useState } from 'react'
import "./header.css"
const Header = () => {
    const[Toggle,showMenu] =useState(false); 
   window.addEventListener("scroll",function(){
        const header=document.querySelector(".header");
        if(this.scrollY>=80)header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
    })

    const[activenav,setactivenav]=useState("#home")
  return (
    <div>
      <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Prakhyat</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
  <li className="nav__item">
    <a href="#home" onClick={()=>setactivenav('#home')} className={activenav=='#home'?"nav__link active-link": "nav__link"}>
      <i className="uil uil-estate nav__icon"></i>
      Home
    </a>
  </li>
  <li className="nav__item">
    <a href="#about"  onClick={()=>setactivenav('#about')} className={activenav=='#about'?"nav__link active-link": "nav__link"}>
      <i className="uil uil-user nav__icon"></i>
      About
    </a>
  </li>
  <li className="nav__item">
    <a href="#skills"  onClick={()=>setactivenav('#skills')} className={activenav=='#skills'?"nav__link active-link": "nav__link"}>
      <i className="uil uil-file-alt nav__icon"></i>
      Skills
    </a>
  </li>
  <li className="nav__item">
    <a href="#services" onClick={()=>setactivenav('#services')} className={activenav=='#services'?"nav__link active-link": "nav__link"}>
      <i className="uil uil-briefcase-alt nav__icon"></i>
      Services
    </a>
  </li>
  <li className="nav__item">
  <a
    href="#work"
    onClick={() => setactivenav('#work')}
    className={activenav === '#work' ? "nav__link active-link" : "nav__link"}
  >
    <i className="uil uil-scenery nav__icon"></i>
    Projects
  </a>
</li>
  <li className="nav__item">
    <a href="#contact" onClick={()=>setactivenav('#contact')} className={activenav=='#contact'?"nav__link active-link": "nav__link"}>
      <i className="uil uil-message nav__icon"></i>
      Contact
    </a>
  </li>
</ul>
                <i className='uil uil-times nav__close' onClick={()=>{showMenu(!Toggle)}}></i>
            </div>
            <div className="nav__toggle" onClick={()=>{showMenu(!Toggle)}}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
