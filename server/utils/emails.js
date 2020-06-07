import sgMail from '@sendgrid/mail';
import nodemailer from 'nodemailer';
import { environment, emailUser, emailPass } from '../config/variables';

const sendEmail = async (to, subject, message) => {
  if (environment === 'development') {
    const transporter = nodemailer.createTransport({
      service:'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: emailUser, pass: emailPass }
    });
    const mailOptions = {
      from: 'no-reply@etinxhackathon.com',
      to,
      subject,
      html: message,
    };
    await transporter.sendMail(mailOptions);
  } else {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to,
      from: 'no-reply@etinxhackathon.com',
      subject,
      html: message,
    };
    await sgMail.send(msg);
  }
};

export const signupEmail = (email, link, name) => {
  const body = `<div><p>Hi ${name}, Your account was successfully created.</p>
  <p>Click <a href="${link}">here</a> to verify your account</p></div>
  <p>This link will expire in 1 hour`;
  const subject = 'Welcome';
  sendEmail(email, subject, body);
};
