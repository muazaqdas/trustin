export const contactContent = {
  // Hero Section
  hero: {
    title: "Comienza Tu Proceso de Licenciamiento en EAU",
    subtitle: "¿Listo para comenzar tu proceso de licenciamiento DHA, MOH o DOH? Completa el formulario a continuación y nuestro equipo de consultoría te contactará dentro de 24 horas con una recomendación de paquete personalizada y cronograma."
  },

  // Contact Form Section
  form: {
    title: "Inicia Tu Consulta",
    description: "Completa el formulario a continuación para una consulta gratuita, recomendación de paquete y estimación de cronograma personalizada.",

    fields: {
      firstName: {
        label: "Nombre",
        placeholder: "Juan",
        required: true
      },
      lastName: {
        label: "Apellido",
        placeholder: "Pérez",
        required: true
      },
      email: {
        label: "Correo Electrónico",
        placeholder: "juan.perez@email.com",
        required: true
      },
      phone: {
        label: "Número de Teléfono",
        placeholder: "(234) 567-890",
        required: true
      },
      profession: {
        label: "Nivel Médico y Especialización",
        required: true,
        options: [
          "Selecciona tu nivel",
          "Médico general",
          "Medicina Interna",
          "Medicina Familiar",
          "Cirugía General",
          "Medicina de Emergencia",
          "Obstetricia y Ginecología (OB-GYN)",
          "Pediatría",
          "Psiquiatría",
          "Anestesia",
          "Radiología (Diagnóstica)",
          "Cardiología",
          "Dermatología",
          "Neurología",
          "Ortopedia",
          "Otorrinolaringología (ORL)",
          "Oftalmología",
          "Urología",
          "Gastroenterología",
          "Nefrología",
          "Endocrinología",
          "Hematología",
          "Oncología",
          "Neumología / Medicina Respiratoria",
          "Enfermedades Infecciosas",
          "Reumatología",
          "Cirugía Plástica",
          "Cirugía Vascular",
          "Cirugía Cardiotorácica",
          "Neurocirugía",
          "UCI / Cuidados Intensivos",
          "Medicina de Rehabilitación",
          "Patología",
          "Medicina de Laboratorio",
          "Medicina Nuclear",
          "Medicina Deportiva"
        ]
      },
      state: {
        label: "Autoridad de Licenciamiento Objetivo",
        placeholder: "ej., DHA (Dubái), DOH o MOH (Otros Emiratos)",
        required: true
      },
      message: {
        label: "Información Adicional (Opcional)",
        placeholder: "Agrega un nivel de inglés (B1, B2, C1, C2)\nCuéntanos sobre tu nivel de credenciales, ubicación actual, expectativas de cronograma o cualquier pregunta...",
        required: false
      }
    },

    privacy: "Al enviar este formulario, aceptas nuestra política de privacidad. Tu información es segura y nunca será compartida.",

    buttons: {
      submit: "Solicitar Consulta Gratuita",
      submitting: "Enviando..."
    },

    successMessage: {
      title: "¡Gracias!",
      text: "Hemos recibido tu solicitud de consulta. Nuestro equipo te contactará dentro de 24 horas para discutir tus necesidades de licenciamiento DHA/DOH/MOH, recomendar un paquete y proporcionar una estimación de cronograma.",
      buttonText: "Enviar Otra Solicitud"
    },

    errors: {
      firstName: "El nombre es requerido",
      lastName: "El apellido es requerido",
      email: {
        required: "El correo electrónico es requerido",
        invalid: "Por favor ingresa un correo electrónico válido"
      },
      phone: {
        required: "El número de teléfono es requerido",
        invalid: "Por favor ingresa un número de teléfono válido",
        tooShort: "El número de teléfono debe tener al menos 10 dígitos"
      },
      profession: "Por favor selecciona tu nivel médico",
      state: "La autoridad de licenciamiento es requerida",
      submission: {
        network: "Error de red. Por favor verifica tu conexión e intenta de nuevo.",
        timeout: "Se agotó el tiempo de espera. Por favor intenta de nuevo.",
        serverError: "Error del servidor. Por favor intenta más tarde o contáctanos directamente al +971 58 8121 004.",
        serviceError: "Servicio de correo temporalmente no disponible. Por favor intenta de nuevo o contáctanos por teléfono al +971 58 8121 004.",
        generic: "Error al enviar el mensaje. Por favor intenta de nuevo o contáctanos directamente a info@trustinconsultancy.com",
        rateLimited: "Demasiadas solicitudes. Por favor espera un momento e intenta de nuevo."
      }
    }
  },

  // Contact Information Section
  contactInfo: [
    {
      iconName: "MdEmail",
      title: "Envíanos un Correo",
      content: "info@trustinconsultancy.com",
      link: "mailto:info@trustinconsultancy.com"
    },
    {
      iconName: "MdPhone",
      title: "Llámanos",
      content: "+971 58 8121 004",
      link: "tel:+971588121004"
    },
    {
      iconName: "MdLocationOn",
      title: "Visítanos",
      content: "Zona Franca de Ajman, Edificio C1\nOficina - C1 - 1F\nEmiratos Árabes Unidos",
      link: null
    },
    {
      iconName: "MdAccessTime",
      title: "Horario de Atención",
      content: "Domingo - Jueves: 9AM - 6PM GST\nSábado: 10AM - 2PM GST",
      link: null
    }
  ],

  // Commitment/Guarantee Card
  guarantee: {
    title: "Nuestro Compromiso Contigo",
    items: [
      "Tiempo de respuesta de 24 horas",
      "Consulta inicial gratuita",
      "Precios de paquetes transparentes",
      "Sin tarifas ocultas",
      "Tasa de éxito del 95%",
      "Apoyo personalizado de consultor"
    ]
  }
};
