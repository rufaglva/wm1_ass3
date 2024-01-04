
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: <a href="mailto:rufaglva@gmail.com">rufaglva@gmail.com</a></p>
      <p>Contact Number: <a href="tel:+9947021718117">+994 70 21718117</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/rufa-guliyeva-306000213/" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>Rufa Guliyeva</a></p>
      <div className="social-icons">
        <a href="mailto:rufaglva@gmail.com"><i className="fas fa-envelope"></i></a>
        <a href="tel:+9947021718117"><i className="fas fa-phone"></i></a>
        <a href="https://www.linkedin.com/in/rufa-guliyeva-306000213/" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default ContactPage;
