export const contactContent = {
  // Hero Section
  hero: {
    title: "Start Your UAE Licensing Journey",
    subtitle: "Ready to begin your DHA, MOH or DOH licensing process? Fill out the form below and our consultancy team will contact you within 24 hours with a personalized package recommendation and timeline."
  },

  // Contact Form Section
  form: {
    title: "Start Your Consultation",
    description: "Complete the form below for a free consultation, package recommendation, and personalized timeline estimate.",

    fields: {
      firstName: {
        label: "First Name",
        placeholder: "John",
        required: true
      },
      lastName: {
        label: "Last Name",
        placeholder: "Doe",
        required: true
      },
      email: {
        label: "Email Address",
        placeholder: "john.doe@email.com",
        required: true
      },
      phone: {
        label: "Phone Number",
        placeholder: "(234) 567-890",
        required: true
      },
      profession: {
        label: "Medical Level & Specialization",
        required: true,
        options: [
          "Select your level",
          "General Practitioner (GP)",
          "Dentist",
          "Specialist - Internal Medicine",
          "Specialist - Pediatrics",
          "Specialist - Surgery",
          "Specialist - Cardiology",
          "Specialist - Radiology",
          "Specialist - Anesthesiology",
          "Specialist - Other",
          "Consultant - Internal Medicine",
          "Consultant - Surgery",
          "Consultant - Other Specialty",
          "Other Medical Professional"
        ]
      },
      state: {
        label: "Target Licensing Authority",
        placeholder: "e.g., DHA (Dubai), DOH or MOH (Other Emirates)",
        required: true
      },
      message: {
        label: "Additional Information (Optional)",
        placeholder: "Tell us about your credentials tier, current location, timeline expectations, or any questions...",
        required: false
      }
    },

    privacy: "By submitting this form, you agree to our privacy policy. Your information is secure and will never be shared.",

    buttons: {
      submit: "Request Free Consultation",
      submitting: "Submitting..."
    },

    successMessage: {
      title: "Thank You!",
      text: "Your consultation request has been received. Our team will contact you within 24 hours to discuss your DHA/DOH/MOH licensing needs, recommend a package, and provide a timeline estimate.",
      buttonText: "Submit Another Request"
    },

    errors: {
      firstName: "First name is required",
      lastName: "Last name is required",
      email: {
        required: "Email is required",
        invalid: "Please enter a valid email"
      },
      phone: {
        required: "Phone number is required",
        invalid: "Please enter a valid phone number"
      },
      profession: "Please select your medical level",
      state: "Licensing authority is required"
    }
  },

  // Contact Information Section
  contactInfo: [
    {
      iconName: "MdEmail",
      title: "Email Us",
      content: "info@trustinconsultancy.com",
      link: "mailto:info@trustinconsultancy.com"
    },
    {
      iconName: "MdPhone",
      title: "Call Us",
      content: "+971 58 8121 004",
      link: "tel:+971588121004"
    },
    {
      iconName: "MdLocationOn",
      title: "Visit Us",
      content: "Ajman Free Zone C1 Building\nOffice - C1 - 1F\nUnited Arab Emirates",
      link: null
    },
    {
      iconName: "MdAccessTime",
      title: "Business Hours",
      content: "Sunday - Thursday: 9AM - 6PM GST\nSaturday: 10AM - 2PM GST",
      link: null
    }
  ],

  // Commitment/Guarantee Card
  guarantee: {
    title: "Our Commitment to You",
    items: [
      "24-hour response time",
      "Free initial consultation",
      "Transparent package pricing",
      "No hidden fees",
      "95% success rate",
      "Personalized consultant support"
    ]
  }
};
