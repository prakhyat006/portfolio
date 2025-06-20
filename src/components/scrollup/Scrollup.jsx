import React from 'react'
import "./scrollup.css"

const Scrollup = () => {
    window.addEventListener("scroll",function(){
        const scrollup=document.querySelector(".s");
        if(this.scrollY>=560)scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll")
    })
  return (
    <a href="#" className="s">
        <i className="ui uil-arrow-up s__icon"></i>
    </a>
  )
}

export default Scrollup
