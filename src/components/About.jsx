import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <span className="hero-badge">Our Legacy</span>
                        <h2>Pure Taste, <br />Global Reach</h2>
                        <p>At Fresh Pick, we believe that the king of fruits deserves the royal treatment. Our mission is to bridge the gap between quality orchards and mango lovers worldwide.</p>

                        <div className="stats">
                            <div className="stat-item">
                                <h3>15+</h3>
                                <p>Varieties</p>
                            </div>
                            <div className="stat-item">
                                <h3>10+</h3>
                                <p>Countries</p>
                            </div>
                            <div className="stat-item">
                                <h3>100%</h3>
                                <p>Organic</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-cards">
                        <div className="feature-card">
                            <div className="icon">📦</div>
                            <h4>Global Export</h4>
                            <p>We supply premium Grade-A mangoes to distributors and retailers across the globe with vacuum packing.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon">🚛</div>
                            <h4>Fresh Import</h4>
                            <p>Bringing the finest international varieties to local markets, maintaining peak freshness and flavor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
