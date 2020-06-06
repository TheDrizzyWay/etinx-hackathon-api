import dotenv from 'dotenv';

dotenv.config();

export const appPort = process.env.PORT;
export const dbName = process.env.DB_NAME;
export const dbUsername = process.env.DB_USERNAME;
export const dbPassword = process.env.DB_PASSWORD;
export const environment = process.env.ENVIRONMENT;
export const jwtSecret = process.env.JWT_SECRET;
