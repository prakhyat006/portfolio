import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>

            <h3 className="about__title">Education</h3>
                <span className="about__subtitle">Computer Science Engineer</span>
          
        </div>
        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">8+ Projects</span>
            
        </div>
        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
                <span className="about__subtitle">24/7</span>
            
        </div>
    </div>
  )
}

export default Info
