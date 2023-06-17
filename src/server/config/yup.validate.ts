import { ValidationError } from 'yup';

/**
 * Utility helper for Yup validation.
 *
 * @param {object} schema
 * @returns {Function}
 */
function validate(schema: any) {
  return async function (req: any, res: any, next: any) {
    try {
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (error) {
      if (error instanceof ValidationError) {
        // Handle Yup validation errors
        const errors = error.inner.map((err: ValidationError) => ({
          field: err.path,
          message: err.message,
        }));
        return res.status(400).json({ errors });
      }
      return next(error);
    }
  };
}

export default validate;
