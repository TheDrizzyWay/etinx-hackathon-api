import { Router } from 'express';
import AuthController from '../controllers/authController';
import AuthValidation from '../middlewares/authValidation';
import tryCatch from '../utils/trycatch';

const authRoutes = new Router();

authRoutes.post('/signup', AuthValidation.signup, tryCatch(AuthController.signUp));
authRoutes.post('/verify', AuthValidation.verify, tryCatch(AuthController.verifyAccount));
authRoutes.post('/login', AuthValidation.login, tryCatch(AuthController.login));

export default authRoutes;
