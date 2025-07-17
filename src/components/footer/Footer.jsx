import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="f">
        <div className="f__container container">
            <h1 className="f__title">Prakhyat</h1>
            <ul className="f__list">
                <li>
                    <a href="#about" className="f__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="f__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="f__link">Contact</a>
                </li>
            </ul>

            <div className="f__socail">
                <a href="https://www.instagram.com/" className="f__social-link" target='_blank'>
            <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.facebook.com/" className="f__social-link" target='_blank'>
            <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://twitter.com/" className="f__social-link" target='_blank'>
            <i className="bx bxl-twitter"></i>
        </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
