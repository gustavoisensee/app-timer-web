import { withFormik } from 'formik';
import queryString from 'query-string';
import ResetPassword from './ResetPassword';
import { resetPassword } from '../../services/account';
import { CLIENT_ERROR } from '../../constants/httpStatus';
import { SUCCESS, ERROR } from '../../constants/status';

const errorMessage = 'Token is invalid or expired!';

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
    try {
      const { token } = queryString.parse(props.location.search);

      if (token) {
        resetPassword({ ...values, token })
          .then(response => {
            resetForm();
            if ([
              CLIENT_ERROR.badRequest,
              CLIENT_ERROR.unauthorized,
            ].includes(response.status)) {
              setStatus(ERROR);
              setErrors({ api: errorMessage });
            } else {
              setStatus(SUCCESS);
            }
            setSubmitting(false);
          })
          .catch(() => {
            resetForm();
            setStatus(ERROR);
            setErrors({ api: errorMessage });
            setSubmitting(false);
          });
      }
    } catch (e) {
      setStatus(ERROR);
      setErrors({ api: errorMessage });
      setSubmitting(false);
    }
  },
  displayName: 'ResetPassworForm',
})(ResetPassword);

export default EnhancedForm;
