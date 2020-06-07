import { signupSchema } from './schemas';
import validator from '../utils/validator';

class AuthValidation {
    static signup(req, res, next) {
        const error = validator(req.body, signupSchema);
        if (error) return res.status(400).json({ error });
        return next();
    }
}

export default AuthValidation;
