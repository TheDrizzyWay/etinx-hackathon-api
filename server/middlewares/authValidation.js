import { signupSchema, verifySchema, loginSchema, forgetSchema } from './schemas';
import validator from '../utils/validator';

class AuthValidation {
    static signup(req, res, next) {
        const error = validator(req.body, signupSchema);
        if (error) return res.status(400).json({ error });
        return next();
    }

    static verify(req, res, next) {
        const error = validator(req.body, verifySchema);
        if (error) return res.status(400).json({ error });
        return next();
    }

    static login(req, res, next) {
        const error = validator(req.body, loginSchema);
        if (error) return res.status(400).json({ error });
        return next();
    }

    static forget(req, res, next) {
        const error = validator(req.body, forgetSchema);
        if (error) return res.status(400).json({ error });
        return next();
    }
}

export default AuthValidation;
