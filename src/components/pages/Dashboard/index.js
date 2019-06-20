import { withFormik } from 'formik';
import Dashboard from './Dashboard';
import { saveMonths } from '../../../services/month';


const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    data: []
  }),

  handleSubmit: (values, { setSubmitting }) => {
    saveMonths(values);
    setSubmitting(false);
  },

  displayName: 'BasicForm',
})(Dashboard);

export default EnhancedForm;
