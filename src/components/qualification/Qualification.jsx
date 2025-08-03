import React from 'react'
import "./qualification.css"
const Qualification = () => {
  return (
    <section className="q section" id="qualification">
          <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="q__container container">
            <div className="q__tabs">
                <div className="q__button button--flex q__active">
                    <i className="uil uil-graduation-cap q__icon">Education</i>
                </div>
                <div className="q__button button--flex ">
                    <i className="uil uil-briefcase-alt q__icon">Student Life</i>
                </div>
            </div>

        <div className="q__sections">
            <div className="q__content q__content-active">
                <div className="q__data">
                    <div>
                        <h3 className="q__title">Engineering</h3>
                        <span className="q__subtitle">Alvas - Institute</span>
                        <div className="q__calendar">
                            <i className="uil uil-calendar-alt"></i>2022 - Present
                        </div>
                    </div>

                    <div>
                        <span className="q__rounder"></span>
                        <span className="q__line"></span>
                    </div>
                </div>

                 <div className="q__data">
                    <div></div>
                     <div>
                        <span className="q__rounder"></span>
                        <span className="q__line"></span>
                    </div>
                    <div>
                        <h3 className="q__title">PUC</h3>
                        <span className="q__subtitle">Viva - Institute</span>
                        <div className="q__calendar">
                            <i className="uil uil-calendar-alt"></i>2020 - 2022
                        </div>
                    </div>

                   
                </div>

                 <div className="q__data">
                    <div>
                        <h3 className="q__title">SSC</h3>
                        <span className="q__subtitle">NEHS - School</span>
                        <div className="q__calendar">
                            <i className="uil uil-calendar-alt"></i>2019 - 2020
                        </div>
                    </div>

                    <div>
                        <span className="q__rounder"></span>
                        <span className="q__line"></span>
                    </div>
                </div>

            </div>


            
        </div>
        </div>
    </section>
  )
}

export default Qualification
