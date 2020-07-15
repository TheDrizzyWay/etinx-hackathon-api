import { Router } from 'express';
import AuthController from '../controllers/authController';
import AuthValidation from '../middlewares/authValidation';
import tryCatch from '../utils/trycatch';

const authRoutes = Router();

authRoutes.post('/signup', AuthValidation.signup, tryCatch(AuthController.signUp));
authRoutes.post('/verify', AuthValidation.verify, tryCatch(AuthController.verifyAccount));
authRoutes.post('/login', AuthValidation.login, tryCatch(AuthController.login));
authRoutes.post('/forget-password', AuthValidation.forget, tryCatch(AuthController.forgetPassword));
authRoutes.patch('/reset-password', AuthValidation.reset, tryCatch(AuthController.resetPassword));

export default authRoutes;
