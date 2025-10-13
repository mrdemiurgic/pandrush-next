import Mailjet from "node-mailjet";

// Hardcoded Mailjet credentials
const apiKey = "5b95ce24beff242df6d73591d94237e5";
// const apiKey = '84b76b2176fcbc1ece9e3497f6d36851';
// const apiSecret = '9c98ecfe4ccdf57746b36b9444aa1f31';
const apiSecret = "a69660d47e0baca90b58005e77786d74";
const email = "pandrushllc@gmail.com";

// Initialize Mailjet client
const mailjet = Mailjet.apiConnect(apiKey, apiSecret);

const sendEmail = async (subject: string, body: string) => {
  try {
    const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: email,
          },
          To: [
            {
              Email: email,
            },
          ],
          Subject: subject,
          HTMLPart: body,
          CustomID: "ApplicationForm",
        },
      ],
    });

    console.log("Mailjet response:", result.body);
    return result.response.status;
  } catch (error) {
    console.error("Mailjet error:", error);
    return 502;
  }
};

export default sendEmail;
