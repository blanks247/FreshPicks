import React from 'react';
import heroImage from '../assets/images/hero_mango.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container animate-fade">
                <div className="hero-content">
                    <span className="hero-badge">Premium Import & Export</span>
                    <h1>Deliciously Fresh, <br /><span>Naturally Sweet</span></h1>
                    <p>We source the finest mangoes from the world's best orchards, ensuring global standard quality delivered straight to your doorstep.</p>
                    <div className="hero-btns">
                        <a href="#products" className="btn btn-primary">Explore Varieties</a>
                        <a href="#contact" className="btn btn-secondary">Order Now</a>
                    </div>
                </div>
            </div>
            <div className="hero-image-container">
                <img src={heroImage} alt="Fresh Mangoes" className="hero-img" />
            </div>
        </section>
    );
};

export default Hero;
