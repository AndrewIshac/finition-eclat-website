import React from 'react';
import ContactSection from '../components/ContactSection';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header-contact">
        <div className="container">
          <h1>Contactez-Nous</h1>
          <p>Nous sommes à votre écoute pour répondre à toutes vos questions</p>
        </div>
      </div>

      {/* Contact Content */}
      <ContactSection />
    </div>
  );
}

export default ContactPage;
