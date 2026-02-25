import React from 'react';

const mangoes = [
    { id: 1, name: 'Alphonso', origin: 'Ratnagiri, India', type: 'Export Quality', desc: 'The king of mangoes, known for its rich, creamy texture and unique aroma.', color: '#FFB300' },
    { id: 2, name: 'Kesar', origin: 'Gujarat, India', type: 'Premium Import', desc: 'Renowned for its bright orange pulp and intense sweetness.', color: '#FFD54F' },
    { id: 3, name: 'Banganapalli', origin: 'Andhra Pradesh, India', type: 'Domestic/Export', desc: 'Large sized mango with a very sweet taste and thin skin.', color: '#FFF176' },
    { id: 4, name: 'Langra', origin: 'Varanasi, India', type: 'Export Special', desc: 'Medium-sized mango with a greenish-yellow skin and sweet fiberless pulp.', color: '#DCE775' },
];

const MangoCatalog = () => {
    return (
        <section id="products" className="section-padding products">
            <div className="container">
                <div className="section-header">
                    <span className="hero-badge">Our Selection</span>
                    <h2>Premium Mango Varieties</h2>
                    <p>We handle everything from orchard selection to international shipping.</p>
                </div>

                <div className="product-grid">
                    {mangoes.map((mango) => (
                        <div key={mango.id} className="product-card">
                            <div className="product-image" style={{ background: `linear-gradient(135deg, ${mango.color} 0%, #FFF 100%)` }}>
                                <span className="type-tag">{mango.type}</span>
                                {/* Image placeholder */}
                                <div className="mango-placeholder">🥭</div>
                            </div>
                            <div className="product-info">
                                <h3>{mango.name}</h3>
                                <span className="origin">{mango.origin}</span>
                                <p>{mango.desc}</p>
                                <div className="card-footer">
                                    <a href="#contact" className="btn-text">Enquire Now →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MangoCatalog;
