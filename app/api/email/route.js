import { mailOptions, transport, validationSendEmail } from "@/utils/mail.util";

export async function POST(request) {
  const { name, message, email } = await request.json();
  const { isValid, errMessage } = validationSendEmail(name, message, email);

  if (!isValid) {
    return Response.json({ error: { message: errMessage } }, { status: 400 });
  }

  try {
    const result = await transport.sendMail({
      ...mailOptions,
      subject: "Porto App",
      text: "message",
      html: `<h1>New Message</h1>
              <div>Name: ${name}</div>
              <div>Email: ${email}</div>
              <div>${message}</div>`,
    });
    return Response.json({
      accepted: result.accepted,
      message: "Success send email",
    });
  } catch (error) {
    return Response.json(
      { error: { message: "Unable to send email this time" } },
      { status: 500 }
    );
  }
}
