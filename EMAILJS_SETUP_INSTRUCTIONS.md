# EmailJS Setup Instructions

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Contact Form Submission

**Subject:** Nouvelle demande de contact - Finition Éclat

**Content:**
```
Nouvelle demande de contact reçue depuis le site web:

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Adresse: {{address}}

Type(s) de demande: {{project_types}}

Message:
{{message}}

---
Vous pouvez répondre directement à cet email pour contacter le client.
```

4. **Save the template** and **copy the Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** and copy it

## Step 5: Update ContactSection.js

Open `src/components/ContactSection.js` and replace these three values:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',      // ← Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // ← Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'       // ← Replace with your Public Key
);
```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the new message

## Troubleshooting

- **Form not sending?** Check browser console for errors
- **Email not received?** Check spam folder
- **Need more emails?** Upgrade to a paid plan on EmailJS

## Security Note

The Public Key is safe to use in client-side code. EmailJS handles the email sending securely on their servers.

