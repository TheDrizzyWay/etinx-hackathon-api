import crypto from 'crypto';
import User from '../models/User';
import Token from '../models/Token';
import PasswordUtil from '../utils/passwords';
import { signupEmail } from '../utils/emails';
import JwtUtil from '../utils/jwt';

class AuthController {
    static async signUp(req, res) {
        const { firstName, email, password } = req.body;
        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(409).json({ error: 'An account with this email already exists' });
        }
    
        req.body.password = PasswordUtil.hash(password);

        const user = new User(req.body);
        await user.save();

        const verificationToken = new Token({
            userId: user.id,
            token: crypto.randomBytes(4).toString("hex")
        });
        await verificationToken.save();
        const verificationLink = `frontendurl/verify?token=${verificationToken.token}&email=${email}`;
        signupEmail(email, verificationLink, firstName);
    
        return res.status(201).json({
            message: 'Your account was created successfully', 
            data: { firstName, email }
        });
    }

    static async verifyAccount(req, res) {
        const { email, token } = req.body;
        const user = await User.findOne({ email }, { password: 0 });

        if(!user) {
            return res.status(404).json({ error: 'An account with this email does not exist' });
        }
        if(user.isActivated) {
            return res.status(400).json({ error: 'This account is already activated' });
        }

        const userToken = await Token.findOne({ $and: [{ userId: user.id }, { token }] });

        if(!userToken) {
            return res.status(400).json({ error: 'Invalid or expired token '});
        }

        await user.updateOne({ isActivated: true });
        return res.status(200).json({
            message: 'Account verified', 
            data: { ...user._doc, isActivated: true },
            auth: JwtUtil.generateToken({ ...user._doc })
        });
    }

    static async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(404).json({ error: 'An account with this email does not exist' });
        }

        if(!PasswordUtil.compare(password, user.password)) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const userObject = { ...user._doc };
        delete userObject.password;

        return res.status(200).json({
            message: 'Logged in succesfully', 
            data: userObject,
            auth: JwtUtil.generateToken(userObject)
        });
    }
}

export default AuthController;
