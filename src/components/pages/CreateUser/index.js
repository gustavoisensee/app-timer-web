import { withFormik } from 'formik';
import { create } from '../../../services/account';
import CreateUser from './CreateUser';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: ''
  }),

  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { props, resetForm, setErrors, setSubmitting, ...rest }) => {
    create(values)
      .then(async(res) => {
        const result = await res.json();
        const { code, message } = result;

        if (code === 400) {
          setErrors({ api: message });
          setSubmitting(false);
        } else {
          resetForm();
        }
      })
      .catch(() => setSubmitting(false));
  },

  displayName: 'CreateUser',
})(CreateUser);

export default EnhancedForm;
