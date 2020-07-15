import * as Joi from '@hapi/joi';

const joiFormatter = (str: string) => str.split('"').join('');

export const validator = (data: object, schema: object) => {
  const { error } = Joi.object(schema).validate(data);
  if (!error) return null;
  const { message } = error.details[0];
  return joiFormatter(message);
};

export default validator;
