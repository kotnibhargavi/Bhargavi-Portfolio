import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import Particle from '../Particle';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const [validation, setValidation] = useState({
    name: { valid: true, message: '' },
    email: { valid: true, message: '' },
    phone: { valid: true, message: '' },
    message: { valid: true, message: '' }
  });

  const [visible, setVisible] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const subjectOptions = [
    'General Inquiry',
    'Support Request',
    'To Hire',
    'Feedback',
    'Other'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'message') setCharCount(value.length);
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let isValid = true;
    let message = '';

    switch (name) {
      case 'name':
        if (value.trim().length < 2) {
          isValid = false;
          message = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          isValid = false;
          message = 'Enter a valid email';
        }
        break;
      case 'phone':
        if (value && value.replace(/[^0-9]/g, '').length < 10) {
          isValid = false;
          message = 'Enter a valid phone number';
        }
        break;
      case 'message':
        if (value.trim().length < 10) {
          isValid = false;
          message = 'Message must be at least 10 characters';
        } else if (value.length > maxChars) {
          isValid = false;
          message = `Max ${maxChars} characters`;
        }
        break;
        default: 
    }

    setValidation(prev => ({ ...prev, [name]: { valid: isValid, message } }));
    return isValid;
  };

  const handleFocus = (field) => setFocused(prev => ({ ...prev, [field]: true }));
  const handleBlur = (field) => {
    if (!formData[field]) setFocused(prev => ({ ...prev, [field]: false }));
    validateField(field, formData[field]);
  };

  const validateForm = () => {
    const fields = ['name', 'email', 'message'];
    return fields.every(field => validateField(field, formData[field]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus({ submitted: false, submitting: false, info: { error: true, msg: "Please fix the errors." } });
      return;
    }

    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "58d380b9-c7b0-4344-b27c-4efb516b8c7e",
          ...formData
        })
      });

      if (!response.ok) throw new Error("Network response not ok");

      setStatus({ submitted: true, submitting: false, info: { error: false, msg: "Message sent successfully!" } });
      setFormData({ name: '', email: '', phone: '', message: '', subject: 'General Inquiry' });
      setFocused({ name: false, email: false, phone: false, message: false });
      setCharCount(0);
    } catch (err) {
      setStatus({ submitted: false, submitting: false, info: { error: true, msg: "Failed to send message." } });
    }
  };

  return (
    <div className={`contact-container ${visible ? 'visible' : ''}`}>
        <Particle />
      <div className="contact-form-wrapper">
        <h2>Get in Touch</h2>
        <p className="form-description">I'd love to hear from you.</p>

        {status.info.msg && <div className={`message ${status.info.error ? 'error' : 'success'}`}>{status.info.msg}</div>}

        <form onSubmit={handleSubmit}>
          {['name', 'email', 'phone'].map((field) => (
            <div key={field} className={`form-group ${focused[field] ? 'focused' : ''} ${formData[field] ? 'has-value' : ''} ${!validation[field].valid ? 'invalid' : ''}`}>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                onFocus={() => handleFocus(field)}
                onBlur={() => handleBlur(field)}
              />
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              {!validation[field].valid && <div className="error-message">{validation[field].message}</div>}
            </div>
          ))}

          <div className="form-group select-group">
            <select name="subject" value={formData.subject} onChange={handleChange} required>
              {subjectOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>

          <div className={`form-group ${focused.message ? 'focused' : ''} ${formData.message ? 'has-value' : ''} ${!validation.message.valid ? 'invalid' : ''}`}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
            <div className="char-count">{charCount}/{maxChars}</div>
            {!validation.message.valid && <div className="error-message">{validation.message.message}</div>}
          </div>

          <button type="submit" disabled={status.submitting} className="submit-button">
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
