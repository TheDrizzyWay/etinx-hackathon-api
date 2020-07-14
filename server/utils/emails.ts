import * as sgMail from '@sendgrid/mail';
import * as nodemailer from 'nodemailer';
import { environment, emailUser, emailPass, sendgridKey } from '../config/variables';

const sendEmail = async (to: string, subject: string, message: string) => {
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
    sgMail.setApiKey(sendgridKey);
    const msg = {
      to,
      from: 'no-reply@etinxhackathon.com',
      subject,
      html: message,
    };
    await sgMail.send(msg);
  }
};

export const signupEmail = (email: string, link: string, name: string) => {
  const body = `<div><p>Hi ${name}, Your account was successfully created.</p>
  <p>Click <a href="${link}">here</a> to verify your account</p></div>
  <p>This link will expire in 1 hour`;
  const subject = 'Welcome';
  sendEmail(email, subject, body);
};

export const forgetPasswordEmail = (email: string, link: string) => {
  const body = `<p>You requested for a password reset</p>
  <p>follow this link to reset your password <a href=${link}>Reset my password</a></p>
  <br><b>Please note that this link expires in 24hours and you can only use it once</b>
  <p>If you didn't request for a password reset, ignore this email.</p>`;
  const subject = 'Reset Password';
  sendEmail(email, subject, body);
}
