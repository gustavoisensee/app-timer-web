import { withFormik } from 'formik';
import { login } from '../../services/account';
import { storeData } from '../../services/storage';
import Login from './Login';
import { USER } from '../../constants/storageKeys';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: 'gustavo.isensee@gmail.com',
    password: '112'
  }),

  validate: values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.passwprd = 'Required';
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
