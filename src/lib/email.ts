import { Resend } from "resend";

// Load configuration from environment variables
const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.EMAIL_FROM;
const toEmail = process.env.EMAIL_TO;

// Validate environment variables
if (!apiKey) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

if (!fromEmail) {
  throw new Error("EMAIL_FROM environment variable is not set");
}

if (!toEmail) {
  throw new Error("EMAIL_TO environment variable is not set");
}

// Initialize Resend client
const resend = new Resend(apiKey);

const sendEmail = async (subject: string, body: string): Promise<number> => {
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      html: body,
    });

    if (error) {
      console.error("Resend error:", error);
      return 502;
    }

    console.log("Resend response:", data);
    return 200;
  } catch (error) {
    console.error("Email sending error:", error);
    return 502;
  }
};

export default sendEmail;
