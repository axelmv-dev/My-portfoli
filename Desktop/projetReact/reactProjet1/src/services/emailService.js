import emailjs from '@emailjs/browser';

// Configuration EmailJS (vous devrez remplacer ces valeurs par les vôtres)
const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxxxx', // À remplacer par votre service ID
  templateId: 'template_xxxxxxx', // À remplacer par votre template ID
  publicKey: 'your_public_key_here' // À remplacer par votre clé publique
};

// Initialiser EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Yeo Gozie Ousmane Axel'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    return {
      success: true,
      message: 'Email envoyé avec succès !',
      response: response
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.',
      error: error
    };
  }
};

// Alternative avec un service d'email gratuit (Formspree)
export const sendEmailFormspree = async (formData) => {
  try {
    // Code réel pour Formspree avec votre ID
    const response = await fetch('https://formspree.io/f/xvgwqdpl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
        _subject: `Nouveau message de ${formData.name} - ${formData.subject}`
      })
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Message envoyé avec succès !'
      };
    } else {
      throw new Error('Erreur lors de l\'envoi');
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
    };
  }
};

// Fonction de validation des données
export const validateEmailData = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères';
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }

  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.subject = 'Le sujet doit contenir au moins 3 caractères';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
