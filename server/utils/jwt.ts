import * as jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/variables';

class JwtUtil {
  static generateToken(payload: any): string {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1d' });
    return token;
  }

  static verifyToken(token: string): any {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  }
}

export default JwtUtil;
