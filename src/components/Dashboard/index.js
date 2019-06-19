import { withFormik } from 'formik';
import Dashboard from './Dashboard';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    data: []
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log('values: ', values);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(Dashboard);

export default EnhancedForm;
