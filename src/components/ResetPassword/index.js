import ResetPassword from './ResetPassword';
import { withFormik } from 'formik';
import queryString from 'query-string';
import jwt from 'jsonwebtoken';

const publicKey = 'app-timer-api-v1';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    password: ''
  }),

  validateOnBlur: false,
  validateOnChange: false,
  validate: (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = true;
    }

    return errors;
  },

  handleSubmit: (values, { props, resetForm, setErrors, setStatus, setSubmitting }) => {
    const { token } = queryString.parse(props.location.search);
    const verified = jwt.verify(token, publicKey);

    if (verified && verified.email && verified.userId) {
      // TODO: make a call to reset password
      setTimeout(() => {
        resetForm();
        setStatus('success');
        setSubmitting(false);
      }, 2000);
    }
  },
  displayName: 'ResetPassworForm',
})(ResetPassword);

export default EnhancedForm;
