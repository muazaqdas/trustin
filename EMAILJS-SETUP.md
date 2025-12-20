# EmailJS Setup Guide

This guide will walk you through setting up EmailJS for the TrustIn contact form.

## Overview

EmailJS is a free service that allows you to send emails directly from client-side JavaScript without needing a backend server. The free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service
- No credit card required

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Log in to your EmailJS dashboard at [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Click on "Email Services" in the left sidebar
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
   - **Recommended**: Gmail for simplicity
5. Follow the connection instructions for your provider:
   - For Gmail: You may need to enable "Less secure app access" or use an App Password
   - For Outlook/Hotmail: Use your Microsoft account credentials
6. Set a Service Name (e.g., "TrustIn Contact Form")
7. Click "Create Service"
8. **Save your Service ID** (e.g., `service_xxxxxxx`) - you'll need this later

## Step 3: Create an Email Template

1. In the EmailJS dashboard, click "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Configure your template with the following settings:

### Template Settings

**Template Name**: TrustIn Contact Form Submission

**From (Sender)**:
- From name: `{{from_firstName}} {{from_lastName}}`
- From email: `noreply@emailjs.com` (EmailJS default)
- Reply to: `{{from_email}}`

**To (Recipient)**:
- To name: `{{to_name}}`
- To email: Enter your business email (e.g., `info@trustinconsultancy.com`)

**Subject**: New Contact Form Submission - {{from_firstName}} {{from_lastName}}

**Content (Email Body)**:
```
New Contact Form Submission from TrustIn Website

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_firstName}} {{from_lastName}}
Email: {{from_email}}
Phone: {{from_phone}}
Medical Level: {{from_profession}}
Target Authority: {{from_state}}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This submission was sent from the TrustIn Contact Form.
Please respond within 24 hours as per company policy.
```

4. Click "Save" to save your template
5. **Save your Template ID** (e.g., `template_xxxxxxx`) - you'll need this later

### Template Variables Used

The following variables are sent from the contact form:
- `from_firstName` - User's first name
- `from_lastName` - User's last name
- `from_email` - User's email address
- `from_phone` - User's phone number
- `from_profession` - User's medical specialization
- `from_state` - Target licensing authority
- `message` - Additional message from user (optional)
- `to_name` - Set to "TrustIn Team" in the code

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, click "Account" in the left sidebar
2. Go to the "API Keys" tab
3. Find your **Public Key** (it looks like a long alphanumeric string)
4. **Save your Public Key** - you'll need this later

## Step 5: Configure Environment Variables

1. In your project root directory, create a `.env` file (if it doesn't exist)
2. Copy the contents from `.env.example`:
   ```bash
   cp .env.example .env
   ```
3. Open the `.env` file and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
4. Replace the placeholder values with your actual EmailJS credentials from Steps 2, 3, and 4

**IMPORTANT**: Never commit the `.env` file to version control. It's already listed in `.gitignore`.

## Step 6: Test the Integration

1. Restart your development server:
   ```bash
   npm start
   ```
2. Navigate to the Contact page
3. Fill out the contact form with test data
4. Submit the form
5. Check your email inbox for the test submission

## Troubleshooting

### "Email service is not configured" Error
- Make sure all three environment variables are set in your `.env` file
- Restart your development server after adding environment variables
- Check that variable names start with `VITE_` (required for Vite)

### Form Submits But No Email Received
- Check your EmailJS dashboard under "Email History" to see if the email was sent
- Verify your email template settings
- Check your spam/junk folder
- Ensure the recipient email in your template is correct

### "Invalid service ID" or Similar Errors
- Double-check that you copied the Service ID, Template ID, and Public Key correctly
- Make sure there are no extra spaces in your `.env` file
- Verify your EmailJS account is active and email service is connected

### Rate Limited Error
- EmailJS free tier allows 200 emails per month
- If you hit the limit, consider upgrading or waiting for the next month
- Check your EmailJS dashboard for current usage

### Network/Connection Errors
- Check your internet connection
- Verify that EmailJS service is not blocked by firewall or ad blocker
- Try accessing https://api.emailjs.com/api/v1.0/email/send in your browser to test connectivity

## Security Notes

1. **Environment Variables**: The `.env` file contains sensitive credentials and should never be committed to version control
2. **Public Key**: EmailJS public keys are designed to be used client-side, so they can be safely exposed in your frontend code
3. **Rate Limiting**: EmailJS has built-in rate limiting to prevent abuse
4. **Domain Whitelist**: Consider setting up domain restrictions in EmailJS dashboard to prevent unauthorized use

## Email Template Best Practices

1. **Reply-To**: Always set reply-to to the user's email (`{{from_email}}`) so you can easily respond
2. **Subject Line**: Include user's name to quickly identify submissions
3. **Formatting**: Use clear sections and separators for readability
4. **Required Fields**: Ensure all form fields are included in your template
5. **Testing**: Send test emails to verify formatting and deliverability

## Deployment Considerations

When deploying to production (Netlify, Vercel, etc.):

1. Add environment variables to your hosting platform's settings:
   - **Netlify**: Site settings → Environment variables
   - **Vercel**: Project Settings → Environment Variables
2. Use the same variable names as in your `.env` file:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Rebuild your site after adding environment variables

## Free Tier Limitations

- 200 emails per month
- 2 email templates
- 1 email service
- Basic email history (30 days)

If you need more, consider upgrading to a paid plan at [EmailJS Pricing](https://www.emailjs.com/pricing/).

## Alternative Email Template (HTML Version)

If you prefer a more styled email, you can use HTML in your template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #5ac2a6, #6abfd6); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin: 10px 0; }
        .label { font-weight: bold; color: #5ac2a6; }
        .value { color: #333; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #5ac2a6; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Submission</h2>
        <p>TrustIn Consultancy</p>
    </div>
    <div class="content">
        <div class="field">
            <span class="label">Name:</span>
            <span class="value">{{from_firstName}} {{from_lastName}}</span>
        </div>
        <div class="field">
            <span class="label">Email:</span>
            <span class="value">{{from_email}}</span>
        </div>
        <div class="field">
            <span class="label">Phone:</span>
            <span class="value">{{from_phone}}</span>
        </div>
        <div class="field">
            <span class="label">Medical Level:</span>
            <span class="value">{{from_profession}}</span>
        </div>
        <div class="field">
            <span class="label">Target Authority:</span>
            <span class="value">{{from_state}}</span>
        </div>
        <div class="message-box">
            <p class="label">Message:</p>
            <p>{{message}}</p>
        </div>
    </div>
</body>
</html>
```

## Support

For EmailJS-specific issues, consult:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

For integration issues with this project, check the source code in:
- [src/config/emailjs.js](src/config/emailjs.js) - Configuration
- [src/pages/Contact.jsx](src/pages/Contact.jsx) - Form implementation
