# Configuration de l'envoi d'emails

## 🚀 Instructions pour activer l'envoi d'emails

### Option 1 : Formspree (Recommandé - Gratuit)

1. **Créer un compte Formspree**
   - Allez sur [https://formspree.io/](https://formspree.io/)
   - Créez un compte gratuit

2. **Créer un nouveau formulaire**
   - Cliquez sur "New Form"
   - Donnez un nom à votre formulaire (ex: "Portfolio Contact")

3. **Récupérer l'ID du formulaire**
   - Copiez l'ID du formulaire (ex: `xjplqkwy`)
   - Il ressemble à : `https://formspree.io/f/xjplqkwy`

4. **Configurer le code**
   - Ouvrez `src/services/emailService.js`
   - Remplacez `YOUR_FORM_ID` par votre ID :
   ```javascript
   const response = await fetch('https://formspree.io/f/xjplqkwy', {
   ```

5. **Tester**
   - Démarrez votre site : `npm run dev`
   - Allez sur la section Contact
   - Remplissez le formulaire et testez l'envoi

### Option 2 : EmailJS (Alternative)

1. **Créer un compte EmailJS**
   - Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
   - Créez un compte gratuit

2. **Configurer un service email**
   - Ajoutez votre service email (Gmail, Outlook, etc.)
   - Récupérez le Service ID

3. **Créer un template**
   - Créez un template d'email
   - Récupérez le Template ID

4. **Récupérer la clé publique**
   - Allez dans Account > API Keys
   - Copiez votre Public Key

5. **Configurer le code**
   - Ouvrez `src/services/emailService.js`
   - Remplacez les valeurs :
   ```javascript
   const EMAILJS_CONFIG = {
     serviceId: 'service_xxxxxxx', // Votre Service ID
     templateId: 'template_xxxxxxx', // Votre Template ID
     publicKey: 'your_public_key_here' // Votre Public Key
   };
   ```

## 📧 Fonctionnalités du formulaire

- ✅ **Validation en temps réel**
- ✅ **Messages d'erreur clairs**
- ✅ **Feedback visuel**
- ✅ **Protection anti-spam**
- ✅ **Design responsive**

## 🎯 Champs du formulaire

- **Nom** : Minimum 2 caractères
- **Email** : Format email valide
- **Sujet** : Minimum 3 caractères
- **Message** : Minimum 10 caractères

## 🔧 Personnalisation

Vous pouvez modifier les messages d'erreur et de succès dans :
- `src/hooks/useContactForm.js`
- `src/services/emailService.js`

## 🚨 Dépannage

### L'email ne s'envoie pas
1. Vérifiez votre ID Formspree
2. Vérifiez votre connexion internet
3. Consultez la console du navigateur (F12)

### Erreur CORS
- Assurez-vous d'utiliser HTTPS en production
- Vérifiez que votre domaine est autorisé dans Formspree

### Messages d'erreur
- Vérifiez que tous les champs sont remplis
- Vérifiez le format de l'email

## 📱 Test sur mobile

Le formulaire est entièrement responsive et fonctionne sur tous les appareils.

## 🎨 Style

Les styles sont dans `src/components/Contact.css` :
- Messages d'erreur en rouge
- Messages de succès en vert
- Animations fluides
- Design cohérent avec le portfolio
