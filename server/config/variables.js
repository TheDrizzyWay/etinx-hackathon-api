import dotenv from 'dotenv';

dotenv.config();

export const appPort = process.env.PORT;
export const databaseUrl = process.env.DATABASE_URL;
export const environment = process.env.ENVIRONMENT;
export const jwtSecret = process.env.JWT_SECRET;
