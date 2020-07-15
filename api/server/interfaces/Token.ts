import { Document } from 'mongoose';

interface Token {
    userId: string,
    token: string,
    createdAt: string
}

export interface IToken extends Token, Document {}
