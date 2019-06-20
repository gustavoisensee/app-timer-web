import React, { PureComponent } from 'react';
import { ERROR, SUCCESS } from '../../../constants/status';
import './styles.scss';

class ResetPassword extends PureComponent {
  render() {
    const {
      errors,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
      values,
      status
    } = this.props;

    return (
      <div className='ResetPassword'>
        <form onSubmit={handleSubmit}>
          <h3>
            My finances web - reset password
          </h3>
          <input
            type='password'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            name='password'
            placeholder='New password'
            className={errors.password && 'input-error'}
          />
          <button
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Reset'}
          </button>
          <span className='error-message'>
            {status === ERROR && errors.api}
          </span>
          <span className='success-message'>
            {status === SUCCESS && 'Password has been successfully reset!'}
          </span>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
