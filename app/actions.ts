'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  eventDate: z.string().min(1, 'Please select an event date'),
  eventType: z.string().min(1, 'Please select an event type'),
  message: z.string().optional(),
});

export async function submitForm(formData: FormData) {
  try {
    const rawFormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      eventDate: formData.get('eventDate') as string,
      eventType: formData.get('eventType') as string,
      message: formData.get('message') as string || '',
    };

    // Validate form data
    const validatedData = formSchema.safeParse(rawFormData);

    if (!validatedData.success) {
      const errors = validatedData.error.issues.map(issue => ({
        field: issue.path[0],
        message: issue.message,
      }));
      return { success: false, errors };
    }

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'Boujee Beverages <noreply@yourdomain.com>',
      to: 'tigernelson@gmail.com',
      subject: 'New Booking Request',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${validatedData.data.firstName} ${validatedData.data.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.data.email}</p>
        <p><strong>Phone:</strong> ${validatedData.data.phone}</p>
        <p><strong>Event Date:</strong> ${new Date(validatedData.data.eventDate).toLocaleDateString()}</p>
        <p><strong>Event Type:</strong> ${validatedData.data.eventType}</p>
        <p><strong>Message:</strong> ${validatedData.data.message || 'No additional details provided'}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send email. Please try again later.' };
    }

    return { success: true, message: 'Your booking request has been submitted successfully!' };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, message: 'An error occurred. Please try again later.' };
  }
}
