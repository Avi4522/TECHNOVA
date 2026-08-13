import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, User, Sparkles } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all fields before submitting.');
      return;
    }
    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setErrorMsg('');
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="section-spacing" style={{ position: 'relative' }}>
      {/* Background Radial Glow */}
      <div
        className="glow-orb glow-cyan"
        style={{
          width: '450px',
          height: '450px',
          top: '30%',
          right: '-5%'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <SectionHeading
          badge="Get in Touch"
          badgeType="cyan"
          title="Connect with"
          gradientTitle="TECHNOVA"
          description="Have an idea or want to connect with TECHNOVA? Reach out to us through our direct contact channel."
        />

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 5vw, 3rem)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              background: 'linear-gradient(180deg, rgba(12, 18, 38, 0.85) 0%, rgba(7, 11, 24, 0.95) 100%)',
              boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* CTA Header Inside Card */}
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}
              >
                Have an idea or want to connect with TECHNOVA?
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', margin: 0 }}>
                Send us a message and our club coordinators will respond.
              </p>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(52, 211, 153, 0.15)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto'
                  }}
                >
                  <CheckCircle2 size={32} color="#34d399" />
                </div>

                <h4
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.6rem'
                  }}
                >
                  Thank you! Your message has been prepared.
                </h4>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    maxWidth: '440px',
                    margin: '0 auto 1.75rem auto'
                  }}
                >
                  We have captured your message from <strong>{formData.name}</strong> ({formData.email}).
                </p>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="btn-secondary"
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                {errorMsg && (
                  <div
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: 'rgba(244, 63, 94, 0.12)',
                      border: '1px solid rgba(244, 63, 94, 0.3)',
                      color: '#fb7185',
                      fontSize: '0.86rem'
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <User size={15} color="#00f0ff" />
                    <span>Your Name</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input-control"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <Mail size={15} color="#00f0ff" />
                    <span>Email Address</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your student or personal email"
                    className="input-control"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <MessageSquare size={15} color="#00f0ff" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your inquiry, idea, or questions..."
                    className="input-control"
                    style={{ resize: 'vertical' }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary"
                  id="send-message-btn"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '0.98rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
