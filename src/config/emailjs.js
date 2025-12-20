/**
 * EmailJS Configuration
 *
 * This file contains the configuration for EmailJS integration.
 * Environment variables are used to keep sensitive credentials secure.
 *
 * Setup Instructions:
 * 1. Create a .env file in the project root
 * 2. Add your EmailJS credentials (see .env.example)
 * 3. Never commit the .env file to version control
 */

export const emailJSConfig = {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

/**
 * Validates that all required EmailJS credentials are configured
 * @returns {boolean} True if all credentials are present
 */
export const isEmailJSConfigured = () => {
  return !!(
    emailJSConfig.serviceID &&
    emailJSConfig.templateID &&
    emailJSConfig.publicKey
  );
};
