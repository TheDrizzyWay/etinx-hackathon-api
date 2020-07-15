import * as bcrypt from 'bcryptjs';

class PasswordUtil {
  static hash(password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static compare(password: string, hashPassword: string): boolean {
    return bcrypt.compareSync(password, hashPassword);
  }
}

export default PasswordUtil;
