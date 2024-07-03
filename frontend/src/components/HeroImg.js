import React from 'react'
import IntroImg from "../assets/intro.jpg"
import { Link } from 'react-router-dom';


const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImf" />


            </div>
            <div className="content">
                <p>HI, I'M NHLALALA MELTON MUDANISI.</p>
                <h1>Full Stack Developer.</h1>
                <div>
                    {/* code for download a CV */}
                    {/* <a href={CV} download className="btn">Resume</a> */}
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>

            </div>

        </div>
    )
}

export default HeroImg