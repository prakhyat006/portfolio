import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const[toggle,settoggle]=useState(0);

    const toggletab=(index)=>{
        settoggle(index);
    }
  return (
    <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web <br /> Developer</h3>
                </div>
                <span className="services__button  "  onClick={()=>{toggletab(1)}}>View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggle===1? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>{toggletab(0)}}className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title"> Web  Developer</h3>
                        <p className="services__modal-description">
                            I am working on my web development skills from the past 2 years and haad made many visiually stunning projects
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user Interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page Development.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create Responsive Web designs.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Use Upto-Date Technologies while Developing.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design NewLetters For college.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br />Designer</h3>
                </div>
                <span onClick={()=>{toggletab(2)}} className="services__button">View More 
                    <i  className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggle===2? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>{toggletab(0)}}className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">
                            I am working as my Branch cheif editor where I design college NewsLetters each sem.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop Design of the paper Using the canva.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I have created many visiually appealing wed pages.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I have Designed many pages using figma.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Had participated in Uiux design hackton.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">For Design Try to think out of the box.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i  className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">AI <br /> Engineer</h3>
                </div>
                <span onClick={()=>{toggletab(3)}} className="services__button">View More {" "}
                    <i   className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggle===3? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>{toggletab(0)}}className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">AI Engineer</h3>
                        <p className="services__modal-description">
                            I had made Machine Learning project by Analysing the data And SomeTimes By creating Trained Models
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop Chat Bots.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Making Of the Trained Models.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Can the Visiualise the Dataset.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Had Made Prediction Model .</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Have Certification In Al Essentails.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
