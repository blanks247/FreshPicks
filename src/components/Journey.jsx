import React from 'react';

const steps = [
    {
        icon: '🌳',
        title: 'Orchard Selection',
        desc: 'We partner with small-scale, traditional orchards that prioritize nature over yield.'
    },
    {
        icon: '🤝',
        title: 'Hand-Picked',
        desc: 'Every mango is selected by experienced hands at the exact peak of its ripeness.'
    },
    {
        icon: '📦',
        title: 'Nature-Safe Packing',
        desc: 'Our vacuum-seal and organic packing keeps the fruit fresh without any chemicals.'
    },
    {
        icon: '🏠',
        title: 'To Your Doorstep',
        desc: 'Delivered straight from the farm to your home within hours of arrival.'
    }
];

const Journey = () => {
    return (
        <section id="journey" className="section-padding journey">
            <div className="container">
                <div className="section-header">
                    <span className="hero-badge">Our Process</span>
                    <h2>From the Branch to Your Bowl</h2>
                    <p>A journey rooted in care, tradition, and the pursuit of the perfect mango.</p>
                </div>

                <div className="journey-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="journey-step">
                            <div className="step-number">{index + 1}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
