import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_MAIL_USER,
    pass: process.env.NEXT_MAIL_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.NEXT_MAIL_USER,
  to: process.env.NEXT_MAIL_USER,
};

export const validationSendEmail = (name, message, email) => {
  if (name.trim() == "") {
    return { isValid: false, errMessage: "Please fill in the name." };
  }

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const isValid = gmailRegex.test(email);

  if (!isValid) {
    return { isValid: false, errMessage: "Invalid email address." };
  }

  if (message.trim() == "") {
    return { isValid: false, errMessage: "Please fill in the message." };
  }

  return { isValid: true, errMessage: null };
};

// export const sendEmail = async (sender, receipients, subject, message) => {
//   return await transport.sendMail({
//     from: sender,
//     to: receipients,
//     subject,
//     html: message,
//     text: message,
//   });
// };
