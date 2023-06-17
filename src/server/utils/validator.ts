import * as yup from 'yup';

const validator = {
  storeUser: yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  }),

  updateUser: yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  }),

  login: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })
};

export default validator;
