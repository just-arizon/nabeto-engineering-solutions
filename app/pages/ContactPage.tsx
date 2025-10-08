import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', padding: '2rem', border: '1px solid #eee', borderRadius: 8 }}>
            <h1>Contact Us</h1>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2>Contact Information</h2>
                <p>
                    <strong>Email:</strong> info@nabetoengineering.com<br />
                    <strong>Phone:</strong> +234 (080) 335-46896
                </p>
            </section>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2>Location</h2>
                <p>
                    25, Eric Moore Close,<br />
                    Surulere, Lagos.
                </p>
            </section>
            <section>
                <h2>Working Hours</h2>
                <p>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                    <strong>Saturday:</strong> 10:00 AM - 2:00 PM<br />
                    <strong>Sunday:</strong> Closed
                </p>
            </section>
        </div>
    );
};

export default ContactPage;