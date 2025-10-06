import { useEffect, useState, useRef } from 'react';
import { useContactForm } from '../hooks/useContactForm';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Utiliser le hook personnalisé pour gérer le formulaire
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      const button = event.target;
      const originalText = button.textContent;
      button.textContent = 'Copié !';
      setTimeout(() => button.textContent = originalText, 2000);
    });
  };

  const contactInfo = [
    {
      icon: '📱',
      title: 'Téléphone',
      value: '+225 07 15 40 02 09',
      action: 'copy'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'ousmaneaxel108@gmail.com',
      action: 'copy'
    },
    {
      icon: '📍',
      title: 'Localisation',
      value: 'Côte d\'Ivoire Abidjan',
      action: 'none'
    },
    {
      icon: '🎓',
      title: 'Formation',
      value: 'Licence 2 MIAGE',
      action: 'none'
    }
  ];

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03</span>
            Contactez-moi
          </h2>
          <p className="section-subtitle">
            N'hésitez pas à me contacter pour discuter de projets ou d'opportunités
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Informations de contact</h3>
              <p>Retrouvez toutes mes informations et moyens de contact</p>
            </div>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="info-card"
                >
                  <div className="card-icon">{info.icon}</div>
                  <div className="card-content">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                  {info.action === 'copy' && (
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(info.value)}
                    >
                      📋
                    </button>
                  )}
                </div>
              ))}
            </div>

          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h3>Envoyez-moi un message</h3>
              <p>Je vous répondrai dans les plus brefs délais</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom complet"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="votre.email@exemple.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Objet de votre message"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Décrivez votre projet ou votre demande..."
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              {/* Message de statut */}
              {submitStatus && (
                <div className={`status-message ${submitStatus}`}>
                  {submitStatus === 'success' ? (
                    <span>✅ Message envoyé avec succès !</span>
                  ) : (
                    <span>❌ Erreur lors de l'envoi. Veuillez réessayer.</span>
                  )}
                </div>
              )}

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content">
            <div className="footer-text">
              <h4>Yeo Gozie Ousmane Axel</h4>
              <p>Étudiant MIAGE • Futur Ingénieur Big Data • Spécialisé en Gestion & Informatique</p>
            </div>
            
            <div className="footer-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a href="https://wa.me/225715400209" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </a>
              <button 
                className="footer-link"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                🔝 Retour en haut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
