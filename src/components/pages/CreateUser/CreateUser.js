import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/loading.png';
import './styles.scss';

const CreateUser = props => {
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
    <form onSubmit={handleSubmit} className='CreateUser'>
      <h1>Create User</h1>

      <span>Name</span>
      <input
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        name='name'
        value={values.namel}
        placeholder='name'
      />
      {errors.email && touched.email && <div className='required'>{errors.email}</div>}

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
          'Create'
        }
      </button>
      <div className='links-container'>
        <Link to='/'>Back to Login</Link>
      </div>
    </form>
  );
};

export default memo(CreateUser);
