import React, { memo } from 'react';
import image from '../../assets/white-loading.png';
import './styles.scss';

const Login = props => {
  const {
    isSubmitting,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit} className="Login">
      <input
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        value={values.email}
      />
      {errors.email && touched.email && <div>{errors.email}</div>}
      <input
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        value={values.password}
      />
      {errors.password && touched.password && <div>{errors.password}</div>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ?
          <img alt="" src={image} className="Loading" /> :
          'Submit'
        }
      </button>
    </form>
  );
};

export default memo(Login);
