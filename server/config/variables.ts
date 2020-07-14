import * as dotenv from 'dotenv';

dotenv.config();

export const appPort = process.env.PORT;
export const databaseUrl = process.env.DATABASE_URL;
export const environment = process.env.NODE_ENV;
export const jwtSecret = process.env.JWT_SECRET;
export const emailUser = process.env.EMAIL_USER;
export const emailPass = process.env.EMAIL_PASSWORD;
export const sendgridKey = process.env.SENDGRID_API_KEY;
