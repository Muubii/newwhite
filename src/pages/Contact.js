import '../css/pages.css';
import '../css/contact.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields.');
      return;
    }
    setSent(true);
  };

  return (
    <div className="container">
      <Navbar />

      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll get back to you shortly.</p>
      </div>

      <div className="contact-body">

        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-card-icon">✉️</div>
            <h3>Email</h3>
            <p>newwhite@gmail.com</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">📍</div>
            <h3>Location</h3>
            <p>Netherlands</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">🕐</div>
            <h3>Response time</h3>
            <p>Within 24 hours</p>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a message</h2>
              <div className="contact-form-row">
                <label>Your name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
                <label>Email address
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={form.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <label>Message
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="contact-submit">Send Message</button>
            </form>
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Contact;