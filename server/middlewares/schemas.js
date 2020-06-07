import Joi from '@hapi/joi';

export const signupSchema = {
  firstName: Joi.string().min(2).max(30).required().trim(),
  lastName: Joi.string().min(2).max(30).required().trim(),
  email: Joi.string().email().required().trim(),
  password: Joi.string().min(6).max(24).required().trim()
};