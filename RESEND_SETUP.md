# Resend Email Setup Instructions

## What is Resend?
Resend is a modern email API service that provides a simple and reliable way to send transactional emails from your application.

## Setup Steps

### 1. Create a Resend Account
1. Visit [https://resend.com](https://resend.com)
2. Sign up for a free account
3. You get 100 emails/day for free (3,000/month)

### 2. Get Your API Key
1. Once logged in, go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Web Innovative Tech Contact Form")
4. Copy the API key (starts with `re_`)

### 3. Add API Key to Your Project
1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file

### 4. Verify Your Domain (Optional but Recommended)
For production use, verify your domain to send from your custom email:

1. Go to [Domains](https://resend.com/domains) in Resend
2. Click "Add Domain"
3. Enter your domain (e.g., `webinnovativetech.com`)
4. Add the DNS records provided by Resend to your domain registrar
5. Once verified, update the `from` field in `/app/api/send/route.ts`:
   ```typescript
   from: 'Contact Form <contact@yourdomain.com>',
   ```

### 5. Update Recipient Email
In `/app/api/send/route.ts`, update the `to` field with your actual email:
```typescript
to: ['your-email@example.com'],
```

### 6. Restart Your Development Server
After adding the API key, restart your Next.js development server:
```bash
npm run dev
```

## Testing
1. Go to your contact page
2. Fill out and submit the form
3. Check your email inbox for the message
4. Also check the [Resend Logs](https://resend.com/emails) to see email delivery status

## Features Implemented
✅ Contact form submissions sent via email
✅ Appointment requests sent via email
✅ Reply-to address set to sender's email
✅ Professional HTML email templates
✅ Error handling with user-friendly messages

## Troubleshooting
- **Email not received**: Check Resend logs for delivery status
- **API error**: Verify your API key is correct in `.env.local`
- **403 Forbidden**: Your API key might be invalid or expired
- **Rate limit**: Free plan has 100 emails/day limit

## Upgrade Options
- **Free**: 100 emails/day, 3,000/month
- **Pro**: $20/month, 50,000 emails/month
- **Enterprise**: Custom pricing

Visit [Resend Pricing](https://resend.com/pricing) for more details.
