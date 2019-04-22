import React from 'react';


const Login = props => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        name="name"
      />
      <input
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
