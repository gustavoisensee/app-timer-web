import React from 'react';
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
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
};

export default Login;
