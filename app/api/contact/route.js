// app/api/contact/route.js (App Router)
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();
  console.log(process.env.EMAIL_USER);

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or any SMTP provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
