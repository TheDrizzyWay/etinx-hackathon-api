import { Request, Response, NextFunction } from 'express';
import { signupSchema, verifySchema, loginSchema, forgetSchema, resetSchema } from './schemas';
import validator from '../utils/validator';

class AuthValidation {
    static signup(req: Request, res: Response, next: NextFunction ): void | Response {
        const error = validator(req.body, signupSchema);
        if (error) return res.status(400).json({ error });
        return next();
    }

    static verify(req: Request, res: Response, next: NextFunction): void | Response {
        const error = validator(req.body, verifySchema);
        if (error) return res.status(400).json({ error });
        return next();
    }

    static login(req: Request, res: Response, next: NextFunction): void | Response {
        const error = validator(req.body, loginSchema);
        if (error) return res.status(400).json({ error });
        return next();
    }

    static forget(req: Request, res: Response, next: NextFunction): void | Response {
        const error = validator(req.body, forgetSchema);
        if (error) return res.status(400).json({ error });
        return next();
    }

    static reset(req: Request, res: Response, next: NextFunction): void | Response {
        const error = validator(req.body, resetSchema);
        if (error) return res.status(400).json({ error });
        return next();
    }
}

export default AuthValidation;
