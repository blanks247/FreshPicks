import React from 'react';

const testimonials = [
    {
        name: 'Lakshmi Rao',
        location: 'Hyderabad',
        text: 'The Banginapalli mangoes delivered this morning felt like they were plucked from my grandmother\'s farm. Truly homely taste!',
        rating: 5
    },
    {
        name: 'Arun Kumar',
        location: 'Bangalore',
        text: 'I\'ve never tasted Cherukurasalu this sweet in the city. The packing was excellent, and the quality is unmatched.',
        rating: 5
    },
    {
        name: 'Sarah Thompson',
        location: 'London (Export)',
        text: 'Ordering Indian mangoes seemed risky until I tried Fresh Pick. The Suvarna-rekha arrived in perfect condition.',
        rating: 5
    }
];

const Marketing = () => {
    return (
        <section id="reviews" className="section-padding marketing">
            <div className="container">
                <div className="marketing-content">
                    <div className="testimonials">
                        <span className="hero-badge">Customer Stories</span>
                        <h2>Loved by Families Worldwide</h2>
                        <div className="testimonial-grid">
                            {testimonials.map((t, i) => (
                                <div key={i} className="testimonial-card">
                                    <div className="stars">{'⭐'.repeat(t.rating)}</div>
                                    <p className="quote">"{t.text}"</p>
                                    <div className="client-info">
                                        <strong>{t.name}</strong>
                                        <span>{t.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="trust-badges">
                        <div className="badge-item">
                            <span className="badge-icon">🛡️</span>
                            <p>Organic Certified</p>
                        </div>
                        <div className="badge-item">
                            <span className="badge-icon">✈️</span>
                            <p>Global Fast Shipping</p>
                        </div>
                        <div className="badge-item">
                            <span className="badge-icon">🍃</span>
                            <p>Eco-Friendly Packing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketing;
