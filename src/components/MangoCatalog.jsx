import mango1 from '../assets/mangoes/mango_10.jpeg';
import mango2 from '../assets/mangoes/mango_12.jpeg';
import mango3 from '../assets/mangoes/mango_13.jpeg';
import mango4 from '../assets/mangoes/mango_14.jpeg';
import mango5 from '../assets/mangoes/mango_15.jpeg';
import mango6 from '../assets/mangoes/mango_16.jpeg';
import mango7 from '../assets/mangoes/mango_17.jpeg';
import mango8 from '../assets/mangoes/mango_18.jpeg';
import mango9 from '../assets/mangoes/mango_19.jpeg';
import mango10 from '../assets/mangoes/mango_20.jpeg';
import mango11 from '../assets/mangoes/mango_21.jpeg';
import mango12 from '../assets/mangoes/mango_22.jpeg';

const mangoes = [
    { id: 1, name: 'Banginapalli', origin: 'Andhra Pradesh', type: 'Premium Export', desc: 'The pride of Andhra Pradesh, known for its sweet, fiberless pulp and rich aroma.', color: '#FFC107', image: mango1 },
    { id: 2, name: 'Kallector', origin: 'South India', type: 'Domestic Special', desc: 'Distinctive parrot-beak shape, offering a unique tangy-sweet flavor perfect for juices.', color: '#FFCA28', image: mango2 },
    { id: 3, name: 'Suvarna-rekha', origin: 'Andhra Pradesh', type: 'Export Quality', desc: 'Identified by its beautiful red blush, with soft, fiberless, and very juicy flesh.', color: '#FF8F00', image: mango3 },
    { id: 4, name: 'Pariya', origin: 'Gujarat/Maharashtra', type: 'Premium Hybrid', desc: 'A premium hybrid of Alphonso and Baneshan, exceptionally sweet and fiberless.', color: '#FFB300', image: mango4 },
    { id: 5, name: 'Kothapalli kobbarantu', origin: 'East Godavari', type: 'Traditional Variety', desc: 'Named for its coconut-like aroma, this variety offers a firm, meaty texture.', color: '#FDD835', image: mango5 },
    { id: 6, name: 'Muntha maamidi', origin: 'Andhra Pradesh', type: 'Popular Domestic', desc: 'A traditional favorite, valued for its classic sweet taste and versatility.', color: '#FBC02D', image: mango6 },
    { id: 7, name: 'Panukulu', origin: 'Coastal Andhra', type: 'Early Season', desc: 'An early-season delicacy with a sweet, fiber-free meaty texture.', color: '#C0CA33', image: mango7 },
    { id: 8, name: 'Cherukurasalu', origin: 'Nuzvid', type: 'Honey Sweet', desc: 'The "Sugarcane" mango, famous for its intense, honey-like sweetness and juiciness.', color: '#4CAF50', image: mango8 },
    { id: 9, name: 'Panchadara kalasa', origin: 'Andhra Pradesh', type: 'Sugar Pot', desc: 'The "Sugar Pot" of mangoes, known for its melting texture and pot-like shape.', color: '#FFA000', image: mango9 },
    { id: 10, name: 'Pedda rasalu', origin: 'South India', type: 'Juicing Specialty', desc: 'Large, juicy mangoes perfect for preparing fresh, aromatic mango pulp.', color: '#FFD600', image: mango10 },
    { id: 11, name: 'Thotapalli mamidi', origin: 'South India', type: 'High Yield', desc: 'Highly productive variety known for its sweet, juicy fruits and consistent quality.', color: '#FFEE58', image: mango11 },
    { id: 12, name: 'Vimanam prasadam', origin: 'Rare/Andhra', type: 'Divine Choice', desc: 'A rare and prized variety, often considered a divine gift for mango lovers.', color: '#FF6F00', image: mango12 },
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
                                <img src={mango.image} alt={mango.name} className="mango-card-image" />
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
