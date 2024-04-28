'use server'
import { Resend } from 'resend';

export const sendEmail = async (formData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ncubes1999@gmail.com',
      subject: formData.message,
      reply_to: formData.email,
      html: `<p>You have a message from <strong>${formData.name}</strong>!</p>`,

    });
    return { status: 'success', message: 'Email sent successfully.' };
  }
  catch (error) {
    console.error('An error occurred: ' + error.message);
    return { status: 'error', message: error.message };
  }
}




