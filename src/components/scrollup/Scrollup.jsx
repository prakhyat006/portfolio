import React, { useEffect } from 'react'
import "./scrollup.css"

const Scrollup = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollup = document.querySelector(".s");
            if(window.scrollY >= 560) scrollup.classList.add("show-scroll");
            else scrollup.classList.remove("show-scroll");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <a href="#" className="s">
            <i className="ui uil-arrow-up s__icon"></i>
        </a>
    )
}

export default Scrollup
