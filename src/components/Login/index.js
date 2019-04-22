import { withFormik } from 'formik';
import Login from './Login';

const EnhancedForm = withFormik({
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  },

  displayName: 'Login',
})(Login);

export default EnhancedForm;
