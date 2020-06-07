import bcrypt from 'bcryptjs';

class PasswordUtil {
  static hash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static compare(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
  }
}

export default PasswordUtil;
