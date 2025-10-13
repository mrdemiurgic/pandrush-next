import mailjet from './mailjet';

const sendEmail = async (subject: string, body: string): Promise<number> => {
  return await mailjet(subject, body);
};

export default sendEmail;
