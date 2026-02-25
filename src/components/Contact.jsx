import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="contact section-padding">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>Have questions about our import/export services or want to place a bulk order? Our team is ready to help.</p>

                        <div className="contact-methods">
                            <div className="contact-item">
                                <div className="icon">📧</div>
                                <div>
                                    <h4>Email Us</h4>
                                    <a href="mailto:famrtohome025@gmail.com">famrtohome025@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon">💬</div>
                                <div>
                                    <h4>WhatsApp Us</h4>
                                    <div className="phones">
                                        <a href="https://wa.me/918309375076" target="_blank" rel="noopener noreferrer">+91 8309375076</a>
                                        <a href="https://wa.me/918179567955" target="_blank" rel="noopener noreferrer">+91 8179567955</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h3>Quick Enquiry</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Email Address" required />
                            <textarea placeholder="Tell us what you're looking for..." rows="4" required></textarea>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Fresh Pick Mangoes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
