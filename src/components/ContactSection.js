import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => {
      if (checked) {
        return {
          ...prevState,
          projectType: [...prevState.projectType, value]
        };
      } else {
        return {
          ...prevState,
          projectType: prevState.projectType.filter(type => type !== value)
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Prepare email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Non fourni',
      address: formData.address || 'Non fourni',
      project_types: formData.projectType.length > 0 
        ? formData.projectType.join(', ') 
        : 'Non spécifié',
      message: formData.message,
      to_email: 'info@finitioneclat.ca', // Your business email
      reply_to: formData.email
    };

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_0opyrc6',      // Your EmailJS Service ID
        'template_wjxmu9i',    // Your EmailJS Template ID
        templateParams,
        'ffD_sMlwFjndYj3KZ'    // Your EmailJS Public Key
      );

      console.log('Email sent successfully:', result.text);
      
      setSubmitStatus({
        type: 'success',
        message: 'Merci! Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        projectType: [],
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement au (450) 341-1121.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contactez-Nous</h2>
            
            <div className="info-block">
              <h3>Adresse de l'atelier</h3>
              <p>3145 Rue Harvey,</p>
              <p>Local 6, Saint Hubert, Quebec.</p>
            </div>

            <div className="info-block">
              <h3>Téléphone</h3>
              <p><a href="tel:+14503411121">+1 (450) 341-1121</a></p>
              <p><a href="tel:+15148343554">+1 (514) 834-3554</a></p>
            </div>

            <div className="info-block">
              <h3>Email</h3>
              <p><a href="mailto:info@finitioneclat.ca">info@finitioneclat.ca</a></p>
            </div>

            {/* Google Map */}
            <div className="map-container">
              <iframe
                title="Finition Eclat Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.8826527977436!2d-73.41394668444021!3d45.36619497909995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90b0e6e6e6e6f%3A0x1234567890abcdef!2s3145%20Rue%20Harvey%2C%20Saint-Hubert%2C%20QC!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Demandes de Renseignement</h2>
            <p className="form-description">
              Pour toute demande de renseignement, questions ou recommandations, 
              veuillez nous contacter au (450) 341-1121 ou remplissez le formulaire suivant.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label className="checkbox-label">Type de Demande:</label>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Escalier"
                      checked={formData.projectType.includes('Escalier')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Escalier</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Cuisine"
                      checked={formData.projectType.includes('Cuisine')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Cuisine</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Portes"
                      checked={formData.projectType.includes('Portes')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Portes</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Gants"
                      checked={formData.projectType.includes('Gants')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Gants</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Autres"
                      checked={formData.projectType.includes('Autres')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Autres</span>
                  </label>
                </div>
              </div>

              <div className="form-row">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {submitStatus.message && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Soumettre'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
