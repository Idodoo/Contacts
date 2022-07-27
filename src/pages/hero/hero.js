import React from 'react';
import './hero.css';
import Background from '../../assets/bg/p1.jpg';
import { Link } from 'react-router-dom'




const Hero = () => {
    return (
        <div className="main-container">
            <div className="main-background">
                <img src={Background} />
            </div>

            <div className="main-content">
                <h1 className="title">
                    All contacts in one place
                </h1>

                <p className="p">
                    Sign up today and add all your contacts in one place
                </p>

                <div className="hero-btn">
                    <Link to='add' className="button">Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero















