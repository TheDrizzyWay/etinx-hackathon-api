import { Document } from 'mongoose';

interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isActivated: boolean,
    passwordResetToken: string
}

export interface IUser extends User, Document {}