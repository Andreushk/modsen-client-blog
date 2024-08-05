import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('This is required field')
    .min(2, 'Must be at least two characters')
    .max(50, 'Must be no more than 50 characters'),
  email: Yup.string().required('This is required field').email('Invalid email'),
  queryRelated: Yup.string().required('This is required field'),
  message: Yup.string()
    .required('This is required field')
    .min(10, 'Please write something more than 10 characters'),
});

export default contactSchema;
