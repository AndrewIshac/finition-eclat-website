import React from 'react';
import AboutSection from '../components/AboutSection';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header-about">
        <div className="container">
          <h1>À Propos de Nous</h1>
          <p>Une entreprise familiale au service de votre satisfaction</p>
        </div>
      </div>

      {/* About Content */}
      <AboutSection />
    </div>
  );
}

export default AboutPage;
