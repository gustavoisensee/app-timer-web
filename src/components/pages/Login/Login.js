import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/loading.png';
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
    <form onSubmit={handleSubmit} className='Login'>
      <h1>Login</h1>
      <span>E-mail</span>
      <input
        type='email'
        onChange={handleChange}
        onBlur={handleBlur}
        name='email'
        value={values.email}
        placeholder='email@email.com'
      />
      {errors.email && touched.email && <div className='required'>{errors.email}</div>}
      <span>Password</span>
      <input
        type='password'
        onChange={handleChange}
        onBlur={handleBlur}
        name='password'
        value={values.password}
        placeholder='******'
      />
      {errors.password && touched.password && <div className='required'>{errors.password}</div>}
      <button type='submit' disabled={isSubmitting} className='btn'>
        {isSubmitting ?
          <img alt='' src={image} className='Loading' /> :
          'Sign in'
        }
      </button>
      <div className='links-container'>
        <Link to='/account/create'>Create an account</Link>
      </div>
    </form>
  );
};

export default memo(Login);
