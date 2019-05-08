import { withFormik } from 'formik';
import Dashboard from './Dashboard';

const _data = [
  {
    year: 2019,
    month: "March",
    income: 3633,
    items: [
      {
        name: 'Gloceries',
        total: 300,
        subItems: [
        ]
      },
      {
        name: 'Health Ensurance',
        total: 235,
        subItems: [
        ]
      }
    ]
  },
  {
    year: 2019,
    month: "February",
    income: 3500,
    items: [
      {
        name: 'Gloceries',
        total: 300,
        subItems: [
          { description: 'Albert heijn 1', value: 12.33 },
          { description: 'Albert heijn 2', value: 34.22 },
        ]
      },
      {
        name: 'Health Ensurance',
        total: 235,
        subItems: [
          { description: 'Bru HE', value: 135 },
        ]
      }
    ]
  },
  {
    year: 2019,
    month: "January",
    income: 3500,
    items: [
      {
        name: 'Gloceries',
        total: 300,
        subItems: [
          { description: 'Albert heijn 1', value: 12.33 },
          { description: 'Albert heijn 2', value: 34.22 },
          { description: 'Albert heijn 3', value: 45.11 },
        ]
      },
      {
        name: 'Health Ensurance',
        total: 235,
        subItems: [
          { description: 'Bru HE', value: 135 },
        ]
      }
    ]
  },
  {
    year: 2018,
    month: "December",
    income: 3500,
    items: [
      {
        name: 'Gloceries',
        total: 300,
        subItems: [
        ]
      },
      {
        name: 'Health Ensurance',
        total: 235,
        subItems: [
        ]
      }
    ]
  },
];

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    data: _data
  }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(Dashboard);

export default EnhancedForm;
