import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for placeholder config
        if (db.app.options.apiKey === "YOUR_API_KEY") {
            setStatus({
                submitting: false,
                submitted: false,
                error: "Firebase is not configured. Please update src/firebase.js with your project credentials."
            });
            return;
        }

        setStatus({ submitting: true, submitted: false, error: null });

        try {
            // Add a timeout to prevent hanging
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Request timed out")), 10000)
            );

            const submissionPromise = addDoc(collection(db, 'enquiries'), {
                ...formData,
                timestamp: serverTimestamp()
            });

            await Promise.race([submissionPromise, timeoutPromise]);

            // Construct WhatsApp URL
            const whatsappNumber = "918309375076";
            const whatsappMsg = `Hi Fresh Pick, I'm ${formData.name}.\n\nEnquiry Details:\nEmail: ${formData.email}\nMessage: ${formData.message}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            setStatus({ submitting: false, submitted: true, error: null });
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setStatus(prev => ({ ...prev, submitted: false }));
            }, 5000);
        } catch (err) {
            console.error("Error adding document: ", err);
            let errorMessage = "Failed to send message. Please check your internet connection or try again.";

            if (err.message === "Request timed out") {
                errorMessage = "The request timed out. This often happens if Firebase is misconfigured or the database is unreachable.";
            } else if (err.code === "permission-denied") {
                errorMessage = "Submission blocked. Please ensure Firestore Security Rules allow writes to the 'enquiries' collection.";
            }

            setStatus({
                submitting: false,
                submitted: false,
                error: errorMessage
            });
        }
    };

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
                        {status.submitted ? (
                            <div className="success-message">
                                <h4>🎉 Thank you, {formData.name || 'friend'}!</h4>
                                <p>Your message has been received. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Tell us what you're looking for..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                {status.error && <p className="error-text">{status.error}</p>}
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={status.submitting}
                                >
                                    {status.submitting ? (
                                        <>
                                            <div className="button-loader"></div>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        )}
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
