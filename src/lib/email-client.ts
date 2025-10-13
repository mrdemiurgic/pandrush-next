import axios from 'axios';

export const sendBookingForm = async (
  packageName: string,
  price: string,
  date: string,
  name: string,
  email: string,
  note: string,
): Promise<number> => {
  const subject = `${name} - Booking Form`;

  const body = `
    <p><b>Name:</b> ${name}</p>
    <p><b>E-mail:</b> ${email}</p>
    <p><b>Package:</b> ${packageName}</p>
    <p><b>Price:</b> ${price}</p>
    <p><b>Date:</b> ${date}</p>
    <p><b>Note:</b> ${note}</p>
  `;

  return await sendEmail(subject, body);
};

export const sendContactForm = async (
  name: string,
  email: string,
  message: string,
): Promise<number> => {
  const subject = `${name} - Contact Form`;

  const body = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `;

  return await sendEmail(subject, body);
};

const sendEmail = async (subject: string, body: string): Promise<number> => {
  try {
    console.log('Sending email via API...');
    const result = await axios.post('/api/email', { subject, body });
    console.log('Email sent successfully:', result);
    return result.status;
  } catch (error) {
    console.error('Email sending error:', error);
    return 502;
  }
};
