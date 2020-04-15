import nodemailer from "nodemailer";

export async function sendEmail(email: string, url: string) {


  const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: 'moosemalooks1',
      pass: 'Matpod657!'
    }
  });

  const mailOptions = {
    from: '"Developers Quiz" <developers.quiz.app@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Welcome to Developers Quiz App", // Subject line
    text: "please confirm your account!", // plain text body
    html: `<a href="${url}">${url}</a>`, // html body
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}