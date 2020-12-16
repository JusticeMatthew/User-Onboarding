import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('username is required')
    .min(3, 'username minimum 3 chars'),
  email: yup.string().email('must be an email').required('email is required'),
  pass: yup
    .string()
    .required('password is required')
    .min(3, 'password must be longer than 3 characters')
    .max(15, 'password cannot exceed 15 characters'),
  tos: yup.bool().required('You mus accept the terms of service'),
});
