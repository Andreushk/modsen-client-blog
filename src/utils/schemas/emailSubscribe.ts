import * as Yup from 'yup';

const emailSubscribeSchema = Yup.object().shape({
  email: Yup.string().required('This is required field').email('Invalid email'),
});

export default emailSubscribeSchema;
