import { withFormik } from 'formik';
import { login } from '../../../services/account';
import { storeData } from '../../../services/storage';
import { USER } from '../../../constants/storageKeys';
import Login from './Login';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),

  validate: values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { props, resetForm, setErrors, setSubmitting, ...rest }) => {
    login(values)
      .then(async(res) => {
        const result = await res.json();
        const { code, message } = result;

        if (code === 400) {
          setErrors({ api: message });
          setSubmitting(false);
        } else {
          storeData(USER, result);
          resetForm();
          window.location.reload();
        }
      })
      .catch(() => setSubmitting(false));
  },

  displayName: 'Login',
})(Login);

export default EnhancedForm;
