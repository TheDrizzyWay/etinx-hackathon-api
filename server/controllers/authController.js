import crypto from 'crypto';
import User from '../models/User';
import Token from '../models/Token';
import PasswordUtil from '../utils/passwords';

class AuthController {
    static async signUp(req, res) {
        const { firstName, lastName, email, password } = req.body;
        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(409).json({ error: 'An account with this email already exists' });
        }
    
        const hashedPassword = PasswordUtil.hash(password);
        req.body.password = hashedPassword;

        const user = new User(req.body);
        await user.save();

        const verificationToken = new Token({
            userId: user.id,
            token: crypto.randomBytes(4).toString("hex")
        });
        await verificationToken.save();
        // const verificationLink = `${url}/verify?token=${verificationToken}`;
        // signupEmail(email, verificationLink);
    
        return res.status(201).json({ success: 'Your account was created successfully' });
    }
}

export default AuthController;
