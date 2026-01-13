import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type } = body;

    const emailContent = type === 'appointment' 
      ? `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Details:</strong> ${message}</p>
      `
      : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;

    const data = await resend.emails.send({
      from: 'Web Innovative Tech <onboarding@resend.dev>', // Replace with your verified domain
      to: ['team.webinnovativetech@gmail.com'],
      replyTo: email,
      subject: type === 'appointment' ? `New Appointment Request from ${name}` : `New Contact Form Message from ${name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
