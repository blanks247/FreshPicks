import React from 'react';
import heroImage from '../assets/images/hero_mango.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-leaf leaf-1">🍃</div>
            <div className="hero-leaf leaf-2">🌿</div>
            <div className="hero-leaf leaf-3">🍃</div>
            <div className="hero-overlay"></div>
            <div className="container hero-container animate-fade">
                <div className="hero-content">
                    <span className="hero-badge">Hand-Picked with Love</span>
                    <h1>Straight from <span>Nature's Heart</span> to Your Home <span className="handwritten-accent">Fresh!</span></h1>
                    <p>Experience the warmth of traditional orchards. We bring you the world's most exquisite mangoes, hand-picked at peak ripeness for that perfect, homely taste.</p>
                    <div className="hero-btns">
                        <a href="#products" className="btn btn-primary">Discover the Harvest</a>
                        <a href="#about" className="btn btn-secondary">Our Story</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src={heroImage} alt="Golden Mango Harvest" className="hero-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
