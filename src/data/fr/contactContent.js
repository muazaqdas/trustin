export const contactContent = {
  // Hero Section
  hero: {
    title: "Commencez Votre Parcours de Licence aux EAU",
    subtitle: "Prêt à commencer votre processus de licence DHA, MOH ou DOH ? Remplissez le formulaire ci-dessous et notre équipe de conseil vous contactera dans les 24 heures avec une recommandation de forfait personnalisée et un calendrier."
  },

  // Contact Form Section
  form: {
    title: "Commencez Votre Consultation",
    description: "Remplissez le formulaire ci-dessous pour une consultation gratuite, une recommandation de forfait et une estimation de calendrier personnalisée.",

    fields: {
      firstName: {
        label: "Prénom",
        placeholder: "Jean",
        required: true
      },
      lastName: {
        label: "Nom",
        placeholder: "Dupont",
        required: true
      },
      email: {
        label: "Adresse E-mail",
        placeholder: "jean.dupont@email.com",
        required: true
      },
      phone: {
        label: "Numéro de Téléphone",
        placeholder: "(234) 567-890",
        required: true
      },
      profession: {
        label: "Niveau Médical et Spécialisation",
        required: true,
        options: [
          "Sélectionnez votre niveau",
          "Médecin généraliste",
          "Médecine Interne",
          "Médecine Familiale",
          "Chirurgie Générale",
          "Médecine d'Urgence",
          "Obstétrique et Gynécologie (OB-GYN)",
          "Pédiatrie",
          "Psychiatrie",
          "Anesthésie",
          "Radiologie (Diagnostique)",
          "Cardiologie",
          "Dermatologie",
          "Neurologie",
          "Orthopédie",
          "Oto-rhino-laryngologie (ORL)",
          "Ophtalmologie",
          "Urologie",
          "Gastro-entérologie",
          "Néphrologie",
          "Endocrinologie",
          "Hématologie",
          "Oncologie",
          "Pneumologie / Médecine Respiratoire",
          "Maladies Infectieuses",
          "Rhumatologie",
          "Chirurgie Plastique",
          "Chirurgie Vasculaire",
          "Chirurgie Cardiothoracique",
          "Neurochirurgie",
          "USI / Soins Intensifs",
          "Médecine de Réadaptation",
          "Pathologie",
          "Médecine de Laboratoire",
          "Médecine Nucléaire",
          "Médecine Sportive"
        ]
      },
      state: {
        label: "Autorité de Licence Cible",
        placeholder: "ex., DHA (Dubaï), DOH ou MOH (Autres Émirats)",
        required: true
      },
      message: {
        label: "Informations Supplémentaires (Facultatif)",
        placeholder: "Ajoutez un niveau d'anglais (B1, B2, C1, C2)\nParlez-nous de votre niveau de diplômes, emplacement actuel, attentes de calendrier ou toute question...",
        required: false
      }
    },

    privacy: "En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Vos informations sont sécurisées et ne seront jamais partagées.",

    buttons: {
      submit: "Demander une Consultation Gratuite",
      submitting: "Envoi en cours..."
    },

    successMessage: {
      title: "Merci !",
      text: "Nous avons reçu votre demande de consultation. Notre équipe vous contactera dans les 24 heures pour discuter de vos besoins en matière de licence DHA/DOH/MOH, recommander un forfait et fournir une estimation de calendrier.",
      buttonText: "Soumettre une Autre Demande"
    },

    errors: {
      firstName: "Le prénom est requis",
      lastName: "Le nom est requis",
      email: {
        required: "L'e-mail est requis",
        invalid: "Veuillez entrer un e-mail valide"
      },
      phone: {
        required: "Le numéro de téléphone est requis",
        invalid: "Veuillez entrer un numéro de téléphone valide",
        tooShort: "Le numéro de téléphone doit contenir au moins 10 chiffres"
      },
      profession: "Veuillez sélectionner votre niveau médical",
      state: "L'autorité de licence est requise",
      submission: {
        network: "Erreur réseau. Veuillez vérifier votre connexion et réessayer.",
        timeout: "Délai d'attente dépassé. Veuillez réessayer.",
        serverError: "Erreur du serveur. Veuillez réessayer plus tard ou nous contacter directement au +971 58 8121 004.",
        serviceError: "Service de messagerie temporairement indisponible. Veuillez réessayer ou nous contacter par téléphone au +971 58 8121 004.",
        generic: "Échec de l'envoi du message. Veuillez réessayer ou nous contacter directement à info@trustinconsultancy.com",
        rateLimited: "Trop de demandes. Veuillez patienter un moment et réessayer."
      }
    }
  },

  // Contact Information Section
  contactInfo: [
    {
      iconName: "MdEmail",
      title: "Envoyez-nous un E-mail",
      content: "info@trustinconsultancy.com",
      link: "mailto:info@trustinconsultancy.com"
    },
    {
      iconName: "MdPhone",
      title: "Appelez-Nous",
      content: "+971 58 8121 004",
      link: "tel:+971588121004"
    },
    {
      iconName: "MdLocationOn",
      title: "Visitez-Nous",
      content: "Zone Franche d'Ajman, Bâtiment C1\nBureau - C1 - 1F\nÉmirats Arabes Unis",
      link: null
    },
    {
      iconName: "MdAccessTime",
      title: "Heures d'Ouverture",
      content: "Dimanche - Jeudi : 9h - 18h GST\nSamedi : 10h - 14h GST",
      link: null
    }
  ],

  // Commitment/Guarantee Card
  guarantee: {
    title: "Notre Engagement Envers Vous",
    items: [
      "Temps de réponse de 24 heures",
      "Consultation initiale gratuite",
      "Prix de forfaits transparents",
      "Aucun frais caché",
      "Taux de réussite de 95%",
      "Soutien personnalisé de consultant"
    ]
  }
};
