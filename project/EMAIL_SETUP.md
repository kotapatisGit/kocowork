# 📧 Email Setup Instructions for Contact Form

## 🚀 Quick Setup with EmailJS (Recommended)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Contact Form Submission - KOCO Workspace

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Plan: {{plan}}
Submitted: {{submitted_at}}

Message:
{{message}}

---
This email was sent from the KOCO website contact form.
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key**

### Step 5: Update Configuration
1. Open `src/config/email.ts`
2. Replace the placeholder values:

```typescript
export const emailConfig = {
  serviceId: 'your_actual_service_id',
  templateId: 'your_actual_template_id', 
  publicKey: 'your_actual_public_key',
  toEmail: 'your-actual-email@example.com' // Where you want to receive emails
};
```

### Step 6: Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox

---

## 🔧 Alternative: Using Environment Variables (More Secure)

### Create `.env.local` file in project root:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then the config will automatically use these values.

---

## 🎯 Alternative Services

### Option 2: Resend (More Professional)
- Requires backend API route
- Better for production applications
- More secure

### Option 3: SendGrid
- Enterprise-grade
- More complex setup
- Best for high-volume emails

---

## 🔍 Troubleshooting

### Common Issues:
1. **"Failed to send message"** - Check your Service ID, Template ID, and Public Key
2. **Emails not arriving** - Check spam folder, verify email template
3. **CORS errors** - Make sure you're using the correct domain in EmailJS settings

### Need Help?
- Check EmailJS documentation
- Verify all IDs are correct
- Test with a simple template first

---

## 📊 Email Template Variables Available:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone (or "Not provided")
- `{{plan}}` - Selected plan
- `{{message}}` - User's message
- `{{submitted_at}}` - Timestamp of submission
- `{{to_email}}` - Your email address 