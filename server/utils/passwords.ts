import * as bcrypt from 'bcryptjs';

class PasswordUtil {
  static hash(password: string) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static compare(password: string, hashPassword: string) {
    return bcrypt.compareSync(password, hashPassword);
  }
}

export default PasswordUtil;
