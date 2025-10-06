// Configuration pour les services d'email
export const EMAIL_CONFIG = {
  // Formspree (service gratuit recommandé)
  formspree: {
    endpoint: 'https://formspree.io/f/YOUR_FORM_ID', // Remplacez par votre ID Formspree
    enabled: true
  },
  
  // EmailJS (alternative)
  emailjs: {
    serviceId: 'service_xxxxxxx',
    templateId: 'template_xxxxxxx', 
    publicKey: 'your_public_key_here',
    enabled: false
  }
};

// Instructions pour configurer Formspree :
/*
1. Allez sur https://formspree.io/
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez l'ID du formulaire (ex: xjplqkwy)
5. Remplacez YOUR_FORM_ID par cet ID
6. Testez l'envoi d'emails
*/

// Instructions pour configurer EmailJS :
/*
1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Créez un service email (Gmail, Outlook, etc.)
4. Créez un template d'email
5. Récupérez vos IDs et clé publique
6. Remplacez les valeurs dans emailjs
7. Activez emailjs et désactivez formspree
*/
