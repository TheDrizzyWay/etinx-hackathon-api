import { Schema, model } from 'mongoose';
import { IUser } from 'server/interfaces/User';

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  passwordResetToken: { type: String, default: null }
},
{ 
  timestamps: true,
  toJSON: {
    transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
  }
 });

const User = model<IUser>('User', userSchema);

export default User;
