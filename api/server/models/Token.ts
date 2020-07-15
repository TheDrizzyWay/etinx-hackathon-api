import { Schema, model } from 'mongoose';
import { IToken } from 'server/interfaces/Token';

const tokenSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 3600 }
});

const Token = model<IToken>('Token', tokenSchema);

export default Token;
