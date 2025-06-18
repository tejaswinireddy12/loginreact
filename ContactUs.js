import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required /><br />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required /><br />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea><br />
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactUs;
