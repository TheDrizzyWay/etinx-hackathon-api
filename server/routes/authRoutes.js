import { Router } from 'express';
import AuthController from '../controllers/authController';
import AuthValidation from '../middlewares/authValidation';
import tryCatch from '../utils/trycatch';

const authRoutes = new Router();

authRoutes.post('/signup', AuthValidation.signup, tryCatch(AuthController.signUp));

export default authRoutes;
